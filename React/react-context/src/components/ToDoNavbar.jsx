import React from 'react'
import { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { toDoContext } from '../context/ToDoContext';
function ToDoNavbar() {
    
  let {todos, setToDos} = useContext(toDoContext)
  return (
    <>
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            ToDos: <span> {todos.length}</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default ToDoNavbar
