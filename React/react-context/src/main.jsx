import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ToDoProvider from './context/ToDoContext'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  <ToDoProvider>
    <App />
  </ToDoProvider>,
)
