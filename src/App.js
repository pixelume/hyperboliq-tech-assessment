import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components/macro';
import GlobalStyle from './styles/GlobalStyle';
import SearchBox from './components/SearchBox';
import Skeleton from 'react-loading-skeleton';
import Alert from 'react-bootstrap/Alert';
import ListTable from './components/ListTable';

const RowStyled = styled(Row)`
  /* background-color: whitesmoke; */
`;
const ContainerStyled = styled(Container)`
  margin: auto;
`;
const ColStyled = styled(Col)`
  /* border: 1px solid black; */
  margin: auto;
`;

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [data, setData] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(data);
  }, [data]);

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

    // fetch(
    //   `https://movie-database-imdb-alternative.p.rapidapi.com/?${params.toString()}`,
    //   {
    //     method: 'GET',
    //     headers: {
    //       'x-rapidapi-key':
    //         process.env.REACT_APP_IMDBAPI,
    //       'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com',
    //     },
    //   }
    // )
    //   .then((response) => {
    //     response.json()
    //     .then(data => console.log(data))
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  };

  return (
    <>
      <GlobalStyle />
      <ContainerStyled fluid>
        <RowStyled>
          {!data && !loading && (
            <ColStyled md={4}>
              <SearchBox
                {...{
                  submitHandler,
                  value: searchString,
                  inputHandler: (e) => setSearchString(e.target.value),
                }}
              />
            </ColStyled>
          )}
          {loading && <Skeleton count={10} />}
          {data && data.Response === 'False' && (
            <Alert variant='danger'>{data.Error}</Alert>
          )}
          {data && data.Response === 'True' && (
            <ColStyled className='py-2' md={10}>
              <ListTable
                headings={['Poster', 'Title', 'Type', 'Year']}
                sortedArray={data.Search}
              />
            </ColStyled>
          )}
        </RowStyled>
      </ContainerStyled>
    </>
  );
};

export default App;
