import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';
import { ColStyled, RowStyled } from '../styles/StyledComponents';
import Button from 'react-bootstrap/Button';

const SearchBox = ({ inputHandler, submitHandler, value, favClickHandler }) => {
  return (
    <RowStyled className='my-4' style={{backgroundColor: 'whitesmoke', paddingTop: 10}}>
      <ColStyled className='mb-2' fluid='sm' md={3}>
        <Form onSubmit={submitHandler}>
          <Form.Group>
            <InputGroup size='lg'>
              <FormControl
                type='search'
                placeholder='Search for a movie'
                aria-label='Search for a movie'
                value={value}
                onChange={inputHandler}
              />
              <InputGroup.Text
                as='button'
                type='submit'
                style={{ cursor: 'pointer' }}
                id='basic-addon1'
              >
                <BsSearch />
              </InputGroup.Text>
            </InputGroup>
          </Form.Group>
        </Form>
      </ColStyled>
      <ColStyled className='text-end' fluid='sm' md={5} lg={4}>
        <Button variant='outline-primary' onClick={favClickHandler}>My Favourites</Button>
      </ColStyled>
    </RowStyled>
  );
};

export default SearchBox;
