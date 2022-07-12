import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../../Styles/todolist.css'
import image from '../../assets/images.jpeg'
import Loader from "react-js-loader";
import Form from 'react-bootstrap/Form'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useParams } from 'react-router';
import { Modal } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import EditTodo from './edit-todo.component';



const myStyle = {

  backgroundColor: '#212529',

};


const TodosList = () => {

  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);


  const handleShow = (id) => {

    console.log(id);
    getData(id);
    setShow(true);


  }



  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const [edit, setEdit] = useState([])

  const fetchData = async () => {

    const { data: response } = await axios.get('http://localhost:4000/api/get');

    setData(response.data);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []);

  const getData = async (id) => {

    const edit = await axios.get(`http://localhost:4000/api/get/${id}`);
    console.log(id);
    setEdit(edit);

    console.log(edit);
    // setLoading(false)
  }

  const deletedata = async (id) => {

    const res = await axios.delete(`http://localhost:4000/api/delete/${id}`);
  };
  useEffect(() => {
    fetchData();
  }, [deletedata]);


  if (loading) return <div className='loader'>
    <Loader type="bubble-loop" bgColor={"#212529"} title={"Loading"} color={'blue'} size={100} />
  </div>;
  return (
    <>
      <div > <style>{"body { background-color: #212529; }"}</style>
        <Container >
          <table>
            <tbody>
              <tr>
                <th>NAME</th>
                <th>DATE</th>
                <th>EDIT</th>
                <th>DELETE</th>
              </tr>
              {data.map((item) => {
                return (
                  <tr key={item._id}>
                    <td>{item.todo_name}</td>
                    <td>
                      <Moment format="MM/DD/YYYY">
                        {item.date}
                      </Moment></td>
                    <td className="table-actions">

                      <Button onClick={() => handleShow(item._id)}> Edit</Button>
                    </td>
                    <td className="table-actions">
                      <Button
                        style={{ color: 'white' }}
                        onClick={() => deletedata(item._id)}
                      >
                        {' '}
                        Delete Task
                      </Button>
                    </td>
                  </tr>
                )

              })}
            </tbody>
          </table>

        </Container>
      </div>
      <Modal
         show={show} onHide={handleClose} style={myStyle} centered>
        <Modal.Header closeButton >
          <Modal.Title>Update {edit?.data?.data?.todo_name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditTodo id={edit?.data?.data?._id} ></EditTodo>
        </Modal.Body>
      </Modal>
    </>
  )
}


export default TodosList