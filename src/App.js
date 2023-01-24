import React, { useState } from 'react'
import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  const [alert, setAlert] = useState(null)
  const token = localStorage.getItem("token")
   const showAlert = (message,type) =>{
     setAlert({
      msg:message,
      type:type
     })
     setTimeout(() => {
      setAlert(null)
     }, 2000);
   }
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login showAlert={showAlert}  />} />
              <Route exact path="/signup" element={<Signup showAlert={showAlert} /> } />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
