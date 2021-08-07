import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import MovieDetail from '../components/MovieDetail';
import Skeleton from 'react-loading-skeleton';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { MovieDetailSkeleton } from './Skeletons';
import useFetch from '../hooks/useFetch';

const ModalComponent = ({movieObj, closeHandler}) => {
  const favourites = useStoreState((state) => state.favourites);
  const setFavourites = useStoreActions((actions) => actions.setFavourites)
  const removeFavourites = useStoreActions((actions) => actions.removeFavourites)
  const {imdbID} = movieObj
  
  const query = new URLSearchParams({
    i: imdbID,
    r: 'json'
  }).toString();

  const [data, fetchError, loading] = useFetch(query)
  
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