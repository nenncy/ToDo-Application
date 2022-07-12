import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col, Button } from "react-bootstrap";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import { PencilSquare, pencilSquare } from 'react-bootstrap-icons';
import EditTodo from "./edit-todo.component";
import { Link } from "react-router-dom";
import { Modal } from 'react-bootstrap';
import axios from 'axios';

const myStyle = {

  backgroundColor: '#212529',

};

function SingleCard(props) {

  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState([])


  const handleClose = () => setShow(false);

  

  const handleShow = (id) => {

    console.log(id);
    getData(id);
    setShow(true);
  }
  const getData = async (id) => {

    const edit = await axios.get(`http://localhost:4000/api/get/${id}`);
    console.log(id);
    setEdit(edit);

    console.log(edit);
    // setLoading(false)
  }



  return (
    <>
      {/* reading the props */}
      <Col>
        <Card key={props._id}>
          <Card.Img></Card.Img>
          <Card.Body >
            <Card.Title>{props.todo_name}</Card.Title>
            <Card.Text>
              <Moment format="MM/DD/YYYY">
                {props.date}
              </Moment>

            </Card.Text>
            <PencilSquare color="royalblue" size={20} onClick={() => handleShow(props._id)} />
            {/* <Button onClick={() => handleShow(props._id)}> edit</Button> */}
          </Card.Body>
        </Card>
        <Modal
         show={show} onHide={handleClose} style={myStyle} centered>
        <Modal.Header closeButton >
          <Modal.Title>Update {edit?.data?.data?.todo_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTodo id={edit?.data?.data?._id} ></EditTodo>
        </Modal.Body>
      </Modal>
        {/* <EditTodo
          handleShow={handleShow}
          // handleModalOpen={this.handleModalOpen}
        /> */}
      </Col>

    </>

  );
}

export default SingleCard;
