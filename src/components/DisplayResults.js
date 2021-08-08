import React, { useState, useContext } from 'react';
import { Col } from 'react-bootstrap';
import { ColStyled } from '../styles/StyledComponents';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import CardView from './CardView';
import ListTable from './ListTable';
import ModalComponent from './ModalComponent';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { AppContext } from '../App';
import { CardViewSkeleton, ListSkeleton } from './Skeletons';
import Alert from 'react-bootstrap/Alert';

const DisplayResults = () => {
  const [showDetails, setShowDetails] = useState(false);
  // const [cardView, setCardView] = useState(false);
  const cardView = useStoreState((state) => state.cardView);
  const setCardView = useStoreActions((actions) => actions.setCardView);
  const { loading, data } = useContext(AppContext);

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
            {data && data.Response === 'True' && !loading && (
              <CardView setShowDetails={setShowDetails} />
            )}
            {loading && (
              <>
                <CardViewSkeleton />
                <CardViewSkeleton />
                <CardViewSkeleton />
              </>
            )}
            {data && data.Response === 'False' && !loading && (
                <Alert variant='danger'>{data.Error}</Alert>
            )}
          </ColStyled>
        </Row>
      ) : (
        <Row>
          <ColStyled className='py-2' md={10}>
            {data && data.Response === 'True' && !loading && <ListTable
              headings={['Poster', 'Title', 'Type', 'Year']}
              setShowDetails={setShowDetails}
            />}
            {loading && (
              <ListSkeleton/>
            )}
            {data && data.Response === 'False' && !loading && (
                <Alert variant='danger'>{data.Error}</Alert>
            )}
          </ColStyled>
        </Row>
      )}
      {showDetails && (
        <ModalComponent
          movieObj={showDetails}
          setShowDetails={setShowDetails}
          closeHandler={() => setShowDetails(false)}
        />
      )}
    </>
  );
};

export default DisplayResults;

// {
//   loading && cardView && (
//     <>
//       <CardViewSkeleton />
//     </>
//   );
// }
// {
//   loading && !cardView && <ListSkeleton />;
// }
// {
//   data && data.Response === 'False' && (
//     <Row style={{ margin: 'auto' }}>
//       <Alert variant='danger'>{data.Error}</Alert>
//     </Row>
//   );
// }
// {
//   ((data && data.Response === 'True') || showFavs) && <DisplayResults />;
// }
