import "./App.css";
import { AppProviders } from './AppProviders';
import Navbar from "~/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "~/pages/Home";
import Card from "~/pages/Card";
import Product from "~/pages/Product/index";
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {


  return (
    <AppProviders>
      <BrowserRouter>
        <Navbar />
    
        <Routes>
            <Route path="/react-fakestore/" element={<Home />} />
            <Route path="/react-fakestore/card" element={<Card />} />
            <Route path="/react-fakestore/product/:id" element={<Product />} />
          </Routes>
      </BrowserRouter>
    </AppProviders>

  );
}

export default App;
