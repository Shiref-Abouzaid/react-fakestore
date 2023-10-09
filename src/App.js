import "./App.css";
import { AppProviders } from './AppProviders';
import Navbar from "~/components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "~/pages/Home";
import Card from "~/pages/Card";
import Product from "~/pages/Product/index";
import WishList from "~/pages/WishList";
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '~/components/Footer';
function App() {


  return (
    <AppProviders>
      <BrowserRouter>
        <Navbar />
    
        <Routes>
            <Route path="/react-fakestore/" element={<Home />} />
            <Route path="/react-fakestore/cart" element={<Card />} />
            <Route path="/react-fakestore/product/:id" element={<Product />} />
            <Route path="/react-fakestore/wishlist" element={<WishList />} />
          </Routes>
      </BrowserRouter>
      <Footer/>
    </AppProviders>

  );
}

export default App;
