
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container, Row, Modal, Col } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from "react";
// import { useHistory, useParams } from 'react-router';
// import { useNavigate, Navigate } from "react-router-dom";

// const myStyle = {
//   // backgroundImage:'url('+image+')',
//   height: '100vh',
//   // marginTop:'auto',
//   backgroundColor: '#212529',
//   width: '100%',
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
// };

// const CreateTodo = () => {

//   const navigate = useNavigate();
//   const [data, setData] = useState({
//     todo_name: "",
//     date: ""
//   });
//   console.log(data);
//   const handleChange = (e) => {
//     const value = e.target.value;
//     console.log('value is:', value);
//     setData({ ...data, todo_name: e.target.value })

//   };
//   const onChangeDate = (date) => {

//     setData({
//       ...data,
//       date: date
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(data.todo_name);
//     const userData = {

//       todo_name: data.todo_name,

//       date: data.date
//     };
//     console.log(userData);
//     axios.post("http://localhost:4000/api/create-todo", userData).then((response) => {
//       console.log(response.status);
//       console.log(response.data);
//     });
//     navigate('/');
//   };

//   return (
//     <div className='mask' style={myStyle}>
//       <Container className='center'>
//         <Row className='content'>

//           <Form onSubmit={handleSubmit}>
//             <Form.Group controlId="Task">
//               <Form.Label style={{ color: 'white' }}>Task name</Form.Label>
//               <Form.Control type="text" value={data.todo_name} onChange={handleChange} />
//             </Form.Group>
//             <Form.Group controlId="date">
//               <Form.Label style={{ color: 'white' }}>Date</Form.Label>

//               <DatePicker
//                 selected={data.date}
//                 onChange={onChangeDate}
//                 dateFormat='yyyy/MM/dd'
//                 showYearDropdown
//                 showMonthDropdown
//                 scrollableYearDropdown
//                 scrollableMonthYearDropdown
//               />
//             </Form.Group>

//             <Button size="sm" block="block" type="submit" className="mt-4">
//               Create Task
//             </Button>
//           </Form>
//         </Row>
//       </Container>
//     </div>
//   );
// };
// export default CreateTodo;
const modelstyle = {
  // margin: '30px 20px 40px 550px',
  // padding: '10px 20px',
  // height: '45px',
  // borderRadius: '4px'

}


function CreateTodo() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <Col xs='auto'>
            <Button variant="primary"  onClick={handleShow} style={modelstyle}>
              Launch demo modal
            </Button>
          </Col>
        </Row>
      </Container>




      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Example textarea</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default CreateTodo;


