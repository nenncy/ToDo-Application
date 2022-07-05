import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container ,Row} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState,useEffect } from "react";
import { useHistory, useParams } from 'react-router';

import {useNavigate} from 'react-router-dom'

const EditTodo= () => {

  const navigate = useNavigate();
  const params = useParams();
  const [data, setData] = useState({
    todo_name: "",
    date: ""
  });

  // console.log(data);
  const handleChange = (e) => {
    const value = e.target.value;
    
    setData({...data,todo_name:e.target.value})
    
  };
  const onChangeDate = (date) => {
  
    setData({
      ...data,
      date:date
    });
  };
  

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data.todo_name);
    const userData = {
    
      todo_name:data.todo_name,
      
      date:data.date
    };
    console.log(params.id);
    axios.post(`http://localhost:4000/api/edit/${params.id}`, userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    navigate('/');
  };

  return (
    <Container className='center'>
        <Row className='content'>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="Task">
            <Form.Label>Task name</Form.Label>
            <Form.Control type="text" value={data.todo_name} onChange={handleChange} />
          </Form.Group>
          <Form.Group controlId="date">
            <Form.Label>Date</Form.Label>
          
            <DatePicker
                      selected={data.date}
                      onChange={onChangeDate}
                      dateFormat='yyyy/MM/dd'
                      showYearDropdown
                      showMonthDropdown
                      scrollableYearDropdown
                      scrollableMonthYearDropdown
                    />
          </Form.Group>
          
          <Button  size="sm"  block="block" type="submit" className="mt-4"  >
            Edit Task
          </Button>
        </Form>
        </Row>
    </Container>
  );
};

export default EditTodo