import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MovieDetail from '../components/MovieDetail';
// import movieData from '../fakeData/movieDetails.json';
import Skeleton from 'react-loading-skeleton';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { MovieDetailSkeleton } from './Skeletons';

const ModalComponent = ({movieObj, closeHandler}) => {
  const [data, setData] = useState(false);
  const [fetchError, setFetchError] = useState(false);
  const [loading, setLoading] = useState(false);
  // const [addedToFav, setAddedToFav] = useState(false)
  const favourites = useStoreState((state) => state.favourites);
  const setFavourites = useStoreActions((actions) => actions.setFavourites)
  const removeFavourites = useStoreActions((actions) => actions.removeFavourites)
  const {imdbID} = movieObj
  const isInFavs = () => {
    let isTrue = false
    favourites.forEach((el) => {
      if (el.imdbID === movieObj.imdbID) {
        if (!isTrue) {
          isTrue = true
        }
      }
    })
    return isTrue
  }

  useEffect(() => {
    const fetchMovie = async () => {
      setLoading(true)
      const params = new URLSearchParams({
        i: imdbID,
        r: 'json'
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
    fetchMovie();
  }, [imdbID])
  
  return (
      <Modal size='xl' fullscreen='sm-down' show onHide={closeHandler}>
        <Modal.Header closeButton>
          {data? <Modal.Title>{data.Title}</Modal.Title>: loading? <Skeleton />: 'N/A'}
        </Modal.Header>
        <Modal.Body>{data? <MovieDetail movieData={data}/>: (loading? <MovieDetailSkeleton/>: 'Error')}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeHandler}>
            Close
          </Button>
          {!isInFavs() && <Button variant="primary" onClick={() => setFavourites(movieObj)}>
            Add to Favourites
          </Button>}
          {isInFavs() && <Button variant="danger" onClick={() => removeFavourites(movieObj)}>
            Remove from Favourites
          </Button>}
        </Modal.Footer>
      </Modal>
  );
}

export default ModalComponent;