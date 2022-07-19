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
import moment from 'moment';
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

function EditTodo({id ,todo_name}) {

  const todoname=todo_name;

  // console.log(todoname);
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const[edit,setEdit]=useState();
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const navigate = useNavigate();

  const [data, setData] = useState({
    
    todo_name: "",
    date: ""
  });

  const getData = async (id) => {

    const edit = await axios.get(`http://localhost:4000/api/get/${id}`);
    // console.log(id);
    setEdit(edit);

    //console.log(moment((edit.data.data.date)).format("DD/MM/YYYY"));
    //const defaultValue = `${new Date(edit.data.data.date).toISOString().slice(0,10)}T12:00:00.000Z`;

    // setLoading(false)
  };
 

  useEffect(()=>{
    
   getData(id);

  })

 

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
    //  console.log("notified");
    toast.success('Task is Updated!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <>
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
           <Form onSubmit={handleSubmit} >
            <Form.Group controlId="Task">
              <Form.Label >Task name</Form.Label>
              <Form.Control type="text" defaultValue={edit?.data?.data?.todo_name} onChange={handleChange}  />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label >Date</Form.Label>
              <DatePicker
                defaultValue={edit?.data?.data?.date ? new Date(edit?.data?.data?.date) : data.date}
             
                //selected={edit?.data?.data?.date ? new Date(edit?.data?.data?.date) : data.date}
                 selected={data.date}
                onChange={onChangeDate}
                dateFormat='yyyy/MM/dd'
                showYearDropdown
                showMonthDropdown
                scrollableYearDropdown
                scrollableMonthYearDropdown
              />
            </Form.Group>

            <Button size="sm" block="block" type='submit' className="mt-4" onClick={handleClose}>
              Save
            </Button>
           
          </Form>
    </>
  );
}




export default EditTodo;