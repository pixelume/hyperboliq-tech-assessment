import React, { useContext } from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import imagePlaceHolder from '../images/movie_poster_placeholder.29ca1c87.svg';
import { AppContext } from '../App';
import { useStoreState } from 'easy-peasy';

export const Td = styled.td`
  vertical-align: middle;
`;
const ListTable = ({ headings, setShowDetails }) => {
  const { data, showFavs } = useContext(AppContext);
  let sortedArray = [];

  const favourites = useStoreState(state => state.favourites)
  if (showFavs) {
    sortedArray = favourites
  } else {
    sortedArray = data.Search
  }

  return (
    <>
      <Table striped hover size='sm'>
        <thead>
          <tr>
            {headings.map((heading, idx) => {
              return (
                <th
                  style={{ textAlign: idx === 0 ? 'center' : 'left' }}
                  key={`heading-${idx}-${heading}`}
                >
                  {heading}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedArray.map((movie, idx) => {
            return (
              <tr
                key={movie.imdbID}
                role='button'
                tabIndex={0}
                onClick={() => setShowDetails(movie)}
              >
                <Td style={{ textAlign: 'center' }}>
                  <img
                    src={
                      movie.Poster.slice(0, 4) === 'http'
                        ? movie.Poster
                        : imagePlaceHolder
                    }
                    alt={movie.Title}
                    style={{
                      width: 100,
                      height: 150,
                      boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
                    }}
                  />
                </Td>
                <Td>{movie.Title}</Td>
                <Td>{movie.Type}</Td>
                <Td>{movie.Year}</Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  );
};

export default ListTable;
