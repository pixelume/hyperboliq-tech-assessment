import React from 'react';
import Col from 'react-bootstrap/Col';
// import styled from 'styled-components/macro';
import { RowStyled } from '../styles/StyledComponents';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';

const Td = styled.td`
  font-weight: bold;
`;

const MovieDetail = ({ movieData }) => {
  //Logic

  return (
    <RowStyled>
      <Col md={12} lg={4}>
        <img src={movieData.Poster} alt={movieData.Title} style={{ width: '100%' }} />
      </Col>
      <Col md={12} lg={4}>
        <Table striped hover size='sm'>
          <tbody>
            <tr>
              <Td>{`Year: `}</Td>
              <td>{movieData.Year}</td>
            </tr>
            <tr>
              <Td>{`Rated: `}</Td>
              <td>{movieData.Rated}</td>
            </tr>
            <tr>
              <Td>{`Released: `}</Td>
              <td>{movieData.Released}</td>
            </tr>
            <tr>
              <Td>{`Runtime: `}</Td>
              <td>{movieData.Runtime}</td>
            </tr>
            <tr>
              <Td>{`Genre: `}</Td>
              <td>{movieData.Genre}</td>
            </tr>
            <tr>
              <Td>{`Director: `}</Td>
              <td>{movieData.Director}</td>
            </tr>
            <tr>
              <Td>{`Writer: `}</Td>
              <td>{movieData.Writer}</td>
            </tr>
            <tr>
              <Td>{`Actors: `}</Td>
              <td>{movieData.Actors}</td>
            </tr>
            <tr>
              <Td>{`Language: `}</Td>
              <td>{movieData.Language}</td>
            </tr>
            <tr>
              <Td>{`Country: `}</Td>
              <td>{movieData.Country}</td>
            </tr>
            <tr>
              <Td>{`Awards: `}</Td>
              <td>{movieData.Awards}</td>
            </tr>
            <tr>
              <Td>{`Metascore: `}</Td>
              <td>{movieData.Metascore}</td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col md={12} lg={4}>
        <h3>Plot:</h3>
        {movieData.Plot}
      </Col>
    </RowStyled>
  );
};

export default MovieDetail;
