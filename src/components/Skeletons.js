import React from 'react';
import Skeleton from 'react-loading-skeleton';
import styled from 'styled-components/macro';
import Table from 'react-bootstrap/Table';
import { Td } from './ListTable';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-flow: row wrap;
`;
const PlaceHolder = styled.div`
  width: 300px;
  height: 500px;
`;

export const MovieDetailSkeleton = () => {
  return (
    <Container>
      <PlaceHolder>
        <Skeleton height={450} />
      </PlaceHolder>
      <PlaceHolder>
        <Skeleton count={10} />
      </PlaceHolder>
      <PlaceHolder>
        <Skeleton count={5} />
      </PlaceHolder>
    </Container>
  );
};

export const ListSkeleton = () => {

  let rows = []

  for (let i = 0; i < 10; i++) {
    rows.push(<tr>
      <Td style={{ textAlign: 'center' }}>
        <Skeleton height={150} width={100} />
      </Td>
      <Td><Skeleton width={100}/></Td>
      <Td><Skeleton width={100}/></Td>
      <Td><Skeleton width={100}/></Td>
    </tr>);
  }

  return (
    <Table hover size='sm' style={{maxWidth: '90vw'}}>
      <tbody>
        {rows}
      </tbody>
    </Table>
  );
};
