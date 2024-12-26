import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import './App.css'
import AddTodo from './components/AddTodo';
import Main from './components/Main';
import ToDoNavbar from './components/ToDoNavbar';
import ToDos from './components/ToDos';

function App() {
 

  return (
    <>
    <ToDoNavbar />
    <AddTodo/>
    <Main/>  
    </>
  )
}

export default App
