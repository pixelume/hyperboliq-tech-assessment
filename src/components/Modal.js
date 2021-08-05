import React, {useState} from 'react'
// import styled from 'styled-components/macro'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const ModalComponent = ({children}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Add to Favourites
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalComponent;