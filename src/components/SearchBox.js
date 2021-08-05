import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';
import { BsSearch } from 'react-icons/bs';

const SearchBox = ({inputHandler, submitHandler, value}) => {
  return (
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
  );
};

export default SearchBox;
