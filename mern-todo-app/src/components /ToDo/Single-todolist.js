import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Row, Col } from "react-bootstrap";
import Moment from "react-moment";
import { useState, useEffect } from "react";
import { PencilSquare, pencilSquare } from 'react-bootstrap-icons';
import EditTodo from "./edit-todo.component";
import { Link } from "react-router-dom";


function SingleCard(props) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


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
            <PencilSquare color="royalblue" size={20}  />
        
          </Card.Body>
        </Card>
        {/* <EditTodo
          handleShow={handleShow}
          // handleModalOpen={this.handleModalOpen}
        /> */}
      </Col>

    </>

  );
}

export default SingleCard;
