import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import { ColStyled } from '../styles/StyledComponents';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardView from './CardView';
import ListTable from './ListTable';
import ModalComponent from './ModalComponent'
import { useStoreActions, useStoreState } from 'easy-peasy';

const DisplayResults = () => {
  const [showDetails, setShowDetails] = useState(false)
  // const [cardView, setCardView] = useState(false);
  const cardView = useStoreState((state) => state.cardView);
  const setCardView = useStoreActions((actions) => actions.setCardView)

  return (
    <>
      <Row>
        <Col md={4} style={{ margin: 'auto 0px auto auto' }}>
          <Form>
            <Form.Check
              type='switch'
              id='custom-switch'
              label={`Toggle ${cardView ? 'List View' : 'Card View'}`}
              checked={cardView}
              onChange={() => setCardView(!cardView)}
            />
          </Form>
        </Col>
      </Row>
      {cardView ? (
        <Row>
          <ColStyled
            md={10}
            style={{
              display: 'flex',
              flexFlow: 'row wrap',
              justifyContent: 'center',
            }}
          >
            <CardView
              setShowDetails={setShowDetails}
            />
          </ColStyled>
        </Row>
      ) : (
        <Row>
          <ColStyled className='py-2' md={10}>
            <ListTable
              headings={['Poster', 'Title', 'Type', 'Year']}
              setShowDetails={setShowDetails}
            />
          </ColStyled>
        </Row>
      )}
      {showDetails && <ModalComponent movieObj={showDetails} setShowDetails={setShowDetails} closeHandler={() => setShowDetails(false)}/>}
    </>
  );
};

export default DisplayResults;
