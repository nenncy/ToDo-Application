import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes,Link, BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "./components /ToDo/create-todo.component";
import EditTodo from "./components /ToDo/edit-todo.component";
import TodosList from "./components /ToDo/todos-list.component";
import NavigationBar from "./components /Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
       <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" exact element={<TodosList/>}/>
          <Route path="/edit/:id" element={<EditTodo/>} />
          <Route path="/create" element={<CreateTodo/>}/>

      </Routes>
      </BrowserRouter>
          
         
      
      
    
    );
  }
}
export default App;