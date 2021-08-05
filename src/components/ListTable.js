import React from 'react'
import {
  Tbody,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Td
} from '../styles/TableStyles'

const ListTable = ({ sortedArray, headings }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr>
            {headings.map((heading, idx) => {
              return (
                <Th
                  key={`heading-${idx}-${heading}`}
                >
                  {heading}
                </Th>
              );
            })}
          </Tr>
        </Thead>
        <Tbody>
          {sortedArray.map((movie, idx) => {
            return (
              <Tr key={`row-${idx}`}>
                <Td style={{ verticalAlign: 'middle' }}>
                  <div style={{maxHeight: 250}}>
                    <img src={movie.Poster} alt={movie.Title} style={{height:250, objectFit: 'contain'}} />
                  </div>
                </Td>
                <Td style={{ verticalAlign: 'middle' }}>
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
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;