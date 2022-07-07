import React, {
    Component
} from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    BrowserRouter
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import CreateTodo from "../components /ToDo/create-todo.component"
import EditTodo from "../components /ToDo/edit-todo.component";
import TodosList from "../components /ToDo/todos-list.component";
import TodayList from "../components /ToDo/Today-todo.component";
import NavigationBar from "../components /Common/Navigation";



function DefaultRoutes() {
    return (
        <BrowserRouter>
            <NavigationBar></NavigationBar>
            <Routes>
                <Route path='/' exact element={<TodosList />} />
                <Route path='/lists' exact element={<TodosList />} />
                <Route path="/edit/:id" exact element={<EditTodo />} />
                <Route path="/create" exact element={<CreateTodo />} />
                <Route path="/today" exact element={<TodayList/>} />

            </Routes>
        </BrowserRouter>

    );

}

export default DefaultRoutes;