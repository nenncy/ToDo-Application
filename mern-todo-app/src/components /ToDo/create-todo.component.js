
import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container, Row, Modal, Col, Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState, useEffect } from "react";
import { useHistory, useParams } from 'react-router';
import { useNavigate, Navigate } from "react-router-dom";
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

function CreateTodo() {
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

    toast.success('Task is created!', {
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

    axios.post("http://localhost:4000/api/create-todo", userData).then((response) => {
      console.log(response.status);
      console.log(response.data);
    });
    toast.success("Task is created")
    console.log("notified");
  };

  const [task, setTask] = useState([])
  const fetchData = async () => {

    const { data: response } = await axios.get('http://localhost:4000/api/get');

    setTask(response.data);
    setLoading(false);

  }

  useEffect(() => {
    fetchData()
  }, [handleClose]);


  if (loading) return <div className='loader'>
    <Loader type="bubble-loop" bgColor={"#212529"} title={"Loading"} color={'blue'} size={100} />
  </div>;
  return (
    <>
      <div ><style>{"body { background-color: #212529; }"}</style>
        <Container>
          <Row className="justify-content-center">
            <Col className="justify-content-center" xs='auto'>
              <Button variant="primary" onClick={handleShow} style={modelstyle}>
                Add Task
              </Button>

            </Col>
          </Row>
        </Container>

        <section id="approval" >
          <div className="container ">
            {/* reading the props */}
            <Row xs={1} md={3} className="g-4">
              {task.map((item) => {
                return (
                  <SingleCard {...item} key={item._id}></SingleCard>
                )
              })}
            </Row>
          </div>
        </section>
      </div>
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
      <Modal
        show={show} onHide={handleClose} style={myStyle} centered>
        <Modal.Header closeButton >
          <Modal.Title>Create Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>

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

            <Button size="sm" block="block" type='submit' className="mt-4" onClick={handleClose} >
              Save
            </Button>
           
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default CreateTodo;


