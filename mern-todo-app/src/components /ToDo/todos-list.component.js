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

const myStyle = {

  backgroundColor: '#212529',
  // width: '100%',
  // backgroundSize: 'cover',
  // backgroundRepeat: 'no-repeat',
};




const TodosList = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([])
  const fetchData = async () => {
    
    const { data: response } = await axios.get('http://localhost:4000/api/get');

    setData(response.data);
    setLoading(false)
  }

  useEffect(() => {
    fetchData()
  }, []);


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
                      <Link to={{ pathname: `/edit/${item._id}` }} >
                        Edit Task
                      </Link>
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
    </>
  )
}


export default TodosList;