import React, { useContext } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import imagePlaceHolder from '../images/movie_poster_placeholder.29ca1c87.svg';
import { AppContext } from '../App';

const CardView = ({ setShowDetails }) => {
  const { data } = useContext(AppContext);
  const sortedArray = data.Search;
  return (
    <>
      {sortedArray.map((movie, index) => (
        <Card
          key={movie.imdbID}
          as='button'
          onClick={() => setShowDetails(movie.imdbID)}
          className='m-2'
          style={{
            display: 'block',
            padding: 0,
            width: '300px',
            boxShadow: '1px 1px 5px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Card.Img
            variant='top'
            src={
              movie.Poster.slice(0, 4) === 'http'
                ? movie.Poster
                : imagePlaceHolder
            }
          />
          <Card.Body>
            <Card.Title>{movie.Title}</Card.Title>
            {/* <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text> */}
          </Card.Body>
          <ListGroup className='list-group-flush'>
            <ListGroupItem>
              <span style={{ fontWeight: 'bold' }}>{`Type: `}</span>
              {movie.Type}
            </ListGroupItem>
            <ListGroupItem>
              <span style={{ fontWeight: 'bold' }}>{`Year: `}</span>
              {movie.Year}
            </ListGroupItem>
          </ListGroup>
          {/* <Card.Body>
            <Card.Link href='#'>Card Link</Card.Link>
            <Card.Link href='#'>Another Link</Card.Link>
          </Card.Body> */}
        </Card>
      ))}
    </>
  );
};

export default CardView;
