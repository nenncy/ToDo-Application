import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Moment from 'react-moment';
import Button from 'react-bootstrap/Button';
import { Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import '../../Styles/todolist.css'
const myStyle={
  // backgroundImage:'url('+image+')',
  height:'100vh',
  // marginTop:'auto',
  backgroundColor: '#212529',
  width:'100%',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
};

const TodayList = () => {

  const [data, setData] = useState([])
  const fetchData = async () => {

    const { data: response } = await axios.get('http://localhost:4000/api/todaytask');

    setData(response.data);

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

  return (
       <>
         <div className='mask' style={myStyle}>
        <Container>
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
                  <Link to={{ pathname: `/edit/${item._id}` }}>
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


export default TodayList;