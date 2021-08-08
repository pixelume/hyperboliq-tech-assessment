import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Table from 'react-bootstrap/Table';
import { Td } from './ListTable';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import imagePlaceHolder from '../images/movie_poster_placeholder.29ca1c87.svg';
import styled, {keyframes} from 'styled-components';

export const MovieDetailSkeleton = () => {
  return (
    <Row>
      <Col md={12} lg={4}>
        <Skeleton height={450} />
      </Col>
      <Col md={12} lg={4}>
        <Table striped hover size='sm'>
          <tbody>
            <tr>
              <Td>{`Year: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Rated: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Released: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Runtime: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Genre: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Director: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Writer: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Actors: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Language: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Country: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Awards: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
            <tr>
              <Td>{`Metascore: `}</Td>
              <td>
                <Skeleton />
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
      <Col md={12} lg={4}>
        <h3>Plot:</h3>
        <Skeleton count={8} />
      </Col>
    </Row>
  );
};

export const ListSkeleton = () => {
  let rows = [];

  for (let i = 0; i < 10; i++) {
    rows.push(
      <tr key={`LSR-${i}`}>
        <Td style={{ textAlign: 'center' }}>
          <Skeleton height={150} width={100} />
        </Td>
        <Td>
          <Skeleton width={100} />
        </Td>
        <Td>
          <Skeleton width={100} />
        </Td>
        <Td>
          <Skeleton width={100} />
        </Td>
      </tr>
    );
  }

  return (
    <Table hover size='sm' style={{ maxWidth: '90vw' }}>
      <tbody>{rows}</tbody>
    </Table>
  );
};

const fadeInOut = keyframes`
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`

const CardImgAnimated = styled(Card.Img)`
  animation: ${fadeInOut} 2s ease-in-out infinite both;
`

export const CardViewSkeleton = () => {
  return (
    <Card
      // as='button'
      className='m-2'
      style={{
        display: 'block',
        padding: 0,
        width: '300px',
        boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
      }}
    >
      <CardImgAnimated variant='top' src={imagePlaceHolder} />
      <Card.Body>
        <Card.Title>
          <Skeleton />
        </Card.Title>
      </Card.Body>
      <ListGroup className='list-group-flush'>
        <ListGroupItem>
          <span style={{ fontWeight: 'bold' }}>{`Type: `}</span>
          <Skeleton />
        </ListGroupItem>
        <ListGroupItem>
          <span style={{ fontWeight: 'bold' }}>{`Year: `}</span>
          <Skeleton />
        </ListGroupItem>
      </ListGroup>
    </Card>
  );
};
