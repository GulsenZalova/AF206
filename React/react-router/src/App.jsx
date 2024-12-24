import { Routes, Route, Link, NavLink } from "react-router-dom"
import './App.css'
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import NotFound from "./pages/NotFound"
import Products from "./pages/Products"
import 'bootstrap/dist/css/bootstrap.min.css';
import DetailPage from "./pages/DetailPage.jsx"
import AddProduct from "./pages/AddProduct"

function App() {


  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/">Home</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink style={({ isActive }) => ({ color: isActive ? "red" : "black" })} to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>

      {/* <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/products" element={<Products/>}/>
          <Route path="/products/:id" element={<DetailPage/>}/>
          <Route path="/products/addproduct" element={<AddProduct/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
      </Routes> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products">
          <Route index element={<Products />}></Route>
          <Route path=":id" element={<DetailPage />}></Route>
          <Route path="addproduct" element={<AddProduct />}></Route>
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
