import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './styles/GlobalStyle';
import SearchBox from './components/SearchBox';
// import Alert from 'react-bootstrap/Alert';
import { ContainerStyled } from './styles/StyledComponents';
// import Row from 'react-bootstrap/Row';
import DisplayResults from './components/DisplayResults';
// import { CardViewSkeleton, ListSkeleton } from './components/Skeletons';
import useFetch from './hooks/useFetch';
// import { useStoreState } from 'easy-peasy';
// import CardView from './components/CardView';

export const AppContext = React.createContext();

const App = () => {
  const [searchString, setSearchString] = useState('');
  const [query, setQuery] = useState('');
  const [showFavs, setShowFavs] = useState(false);
  const [data, fetchError, loading] = useFetch(query)
  // const cardView = useStoreState((state) => state.cardView);

  const contextObj = {
    searchString,
    data,
    fetchError,
    loading,
    showFavs,
    setSearchString,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (showFavs) {
      setShowFavs(false);
    }
    setQuery(
      new URLSearchParams({
        s: searchString,
        r: 'json',
        page: 1,
      }).toString()
    );
    setSearchString('')
  };

  return (
    <AppContext.Provider value={contextObj}>
      <GlobalStyle />
      <ContainerStyled fluid>
        <SearchBox
          {...{
            submitHandler: handleSubmit,
            value: searchString,
            inputHandler: (e) => setSearchString(e.target.value),
            showFavs,
            favClickHandler: () => setShowFavs((showFavs) => !showFavs),
          }}
        />
        <DisplayResults />
      </ContainerStyled>
    </AppContext.Provider>
  );
};

export default App;

// {(loading && cardView) && <><CardViewSkeleton/></>}
//         {loading && (!cardView) && <ListSkeleton/>}
//         {data && data.Response === 'False' && (
//           <Row style={{ margin: 'auto' }}>
//             <Alert variant='danger'>
//               {data.Error}
//             </Alert>
//           </Row>
//         )}
//         {((data && data.Response === 'True') || showFavs) && <DisplayResults />}
