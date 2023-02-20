import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";
import Protected from './Protected'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
     
        {/* <Header /> */}
      
      
        <Routes>

        <Route path="/login" element={<Login />}> </Route>
        <Route path="/register" element={<Register />}> </Route>
        <Route path="/add" element={<Protected cmp = {AddProduct }/>}></Route>
        <Route path="/update" element={<Protected cmp = {UpdateProduct }/>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
