import "./App.css";


import Navbar from "~/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "~/pages/Home";
import Card from "~/pages/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <BrowserRouter>
      <Navbar />
  
      <Routes>
          <Route path="/react-fakestore/" element={<Home />} />
          <Route path="/react-fakestore/card" element={<Card />} />

        </Routes>
    </BrowserRouter>
  );
}

export default App;
