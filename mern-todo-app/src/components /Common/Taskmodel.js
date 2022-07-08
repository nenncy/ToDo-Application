import { useState } from "react";

import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { Container, Row, Modal, Col, Card } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useHistory, useParams } from 'react-router';
import { useNavigate, Navigate } from "react-router-dom";
import SingleCard from "./Single-todolist";
import Moment from 'react-moment';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

function taskmodel(props) {
    const [show, setShow] = useState(false);
    

    return (
        <Modal
            show={props.show} onHide={props.handleClose}  centered>
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
            </Modal.Body>
        </Modal>

    )

}


