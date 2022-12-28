import "./App.css";
import Navbar from "./components/Navbar";
import About from "./components/About";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NoteState from "./context/notes/NoteState";
function App() {
  return (
    <>
      <NoteState>
        <Router>
          <Navbar />

          <div className="container">
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<Home />} />
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
