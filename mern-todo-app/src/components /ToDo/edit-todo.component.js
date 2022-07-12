import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Container ,Row, Modal,Col} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState,useEffect } from "react";
import { useHistory, useParams } from 'react-router';

import {useNavigate} from 'react-router-dom'
// const myStyle={
//   // backgroundImage:'url('+image+')',
//   height:'100vh',
//   // marginTop:'auto',
//   backgroundColor: '#212529',
//   width:'100%',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

// const EditTodo= () => {

//   const navigate = useNavigate();
//   const params = useParams();
//   const [data, setData] = useState({
//     todo_name: "",
//     date: ""
//   });

//   // console.log(data);
//   const handleChange = (e) => {
//     const value = e.target.value;
    
//     setData({...data,todo_name:e.target.value})
    
//   };
//   const onChangeDate = (date) => {
  
//     setData({
//       ...data,
//       date:date
//     });
//   };
  

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data.todo_name);
//     const userData = {
    
//       todo_name:data.todo_name,
      
//       date:data.date
//     };
//     console.log(params.id);
//     axios.post(`http://localhost:4000/api/edit/${params.id}`, userData).then((response) => {
//       console.log(response.status);
//       console.log(response.data);
//     });
//     navigate('/');
//   };

//   return (
//     <div><style>{"body { background-color: #212529; }"}</style>
//     <Container className='center'>
//         <Row className='content'>
        
//         <Form onSubmit={handleSubmit}>
//           <Form.Group controlId="Task">
//             <Form.Label  style={{color:'white'}}>Task name</Form.Label>
//             <Form.Control type="text" value={data.todo_name} onChange={handleChange} />
//           </Form.Group>
//           <Form.Group controlId="date">
//             <Form.Label  style={{color:'white'}}>Date</Form.Label>
          
//             <DatePicker
//                       selected={data.date}
//                       onChange={onChangeDate}
//                       dateFormat='yyyy/MM/dd'
//                       showYearDropdown
//                       showMonthDropdown
//                       scrollableYearDropdown
//                       scrollableMonthYearDropdown
//                     />
//           </Form.Group>
          
//           <Button  size="sm"  block="block" type="submit" className="mt-4"  >
//             Edit Task
//           </Button>
//         </Form>
//         </Row>
//     </Container>
//     </div>
//   );
// };

import SingleCard from "./Single-todolist";
import Moment from 'react-moment';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import Loader from 'react-js-loader';

const modelstyle = {
  margin: '50px ',

}
const myStyle = {

  backgroundColor: '#212529',
  width: '100%',
  hieght: '100%'
};

function EditTodo({id}) {

  // const id=_id;

  // console.log(id);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const navigate = useNavigate();

  const [data, setData] = useState({
    todo_name: "",
    date: ""
  });

  const handleChange = (e) => {
    const value = e.target.value;

    setData({ ...data, todo_name: e.target.value })

  };
  const onChangeDate = (date) => {

    setData({
      ...data,
      date: date
    });
  };
  const notify = () => {

    toast.success('Task is Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // navigate('/');
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(data.todo_name);
      const userData = {
      todo_name: data.todo_name,
      date: data.date
    };

    axios.post(`http://localhost:4000/api/edit/${id}`, userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    // console.log("notified");
  };
  return (
    <>
      <Form onSubmit={handleSubmit} >
            <Form.Group controlId="Task">
              <Form.Label >Task name</Form.Label>
              <Form.Control type="text" value={data.todo_name} onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label >Date</Form.Label>

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

            <Button size="sm" block="block" type='submit' className="mt-4" onClick={notify}>
              Save
            </Button>
            <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover></ToastContainer>
          </Form>
    </>
  );
}




export default EditTodo;