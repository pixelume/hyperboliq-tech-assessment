import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/GlobalStyle';
import SearchBox from './components/SearchBox';
import Skeleton from 'react-loading-skeleton';
import Alert from 'react-bootstrap/Alert';
import {
  ColStyled,
  ContainerStyled,
  RowStyled,
} from './styles/StyledComponents';
import DisplayResults from './components/DisplayResults';

export const AppContext = React.createContext();

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [data, setData] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);

  const contextObj = {
    searchString,
    data,
    fetchError,
    loading,
    setSearchString,
    setData,
    setFetchError,
    setLoading,
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    if (fetchError) {
      setFetchError(false);
    }
    if (!loading) {
      setLoading(true);
    }
    if (data) {
      setData(false);
    }
    console.log('Form Submitted');
    const params = new URLSearchParams({
      s: searchString,
      r: 'json',
      page: 1,
    });
    try {
      const response = await fetch(
        `https://movie-database-imdb-alternative.p.rapidapi.com/?${params.toString()}`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': process.env.REACT_APP_IMDBAPI,
            'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
          },
        }
      );
      if (response.ok) {
        const json = await response.json();
        setData(json);
      } else {
        setFetchError(
          `${await response.text()} (Status code ${response.status})`
        );
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <AppContext.Provider value={contextObj}>
      <GlobalStyle />
      <ContainerStyled fluid>
        {!data && !loading && (
          <SearchBox
            {...{
              submitHandler,
              value: searchString,
              inputHandler: (e) => setSearchString(e.target.value),
            }}
          />
        )}
        {loading && (
          <RowStyled>
            <ColStyled className='py-2' md={10}>
              <Skeleton count={10} />
            </ColStyled>
          </RowStyled>
        )}
        {data && data.Response === 'False' && (
          <RowStyled style={{margin: 'auto'}}>
            <Alert variant='danger' dismissible onClose={() => setData(false)}>{data.Error}</Alert>
          </RowStyled>
        )}
        {data && data.Response === 'True' && <DisplayResults />}
      </ContainerStyled>
    </AppContext.Provider>
  );
};

export default App;
