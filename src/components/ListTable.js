import React from 'react'
import Table from 'react-bootstrap/Table'
import styled from 'styled-components'

// import {
//   tbody,
//   TableContainer,
//   Table,
//   thead,
//   tr,
//   th,
//   td
// } from '../styles/TableStyles'

const Td = styled.td`
  vertical-align: middle;
`

const ListTable = ({ sortedArray, headings }) => {
  return (
      <Table striped hover>
        <thead>
          <tr>
            {headings.map((heading, idx) => {
              return (
                <th style={{textAlign: idx === 0? 'center': 'left'}}
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
              <tr key={`row-${idx}`}>
                <Td style={{textAlign: 'center'}}>
                  <img src={movie.Poster} alt={movie.Title} style={{width: 100, height:150}} />
                </Td>
                <Td>
                  {movie.Title}
                </Td>
                <Td>
                  {movie.Type}
                </Td>
                <Td>
                  {movie.Year}
                </Td>
              </tr>
            );
          })}
        </tbody>
      </Table>
  );
};

export default ListTable;