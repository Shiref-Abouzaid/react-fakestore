import "./App.css";

import ReactDOM from "react-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <BrowserRouter>
      <Navbar />
  
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
