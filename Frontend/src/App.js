import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import EnquirePopup from "./Components/EnquirePopup";
import About from "./Page/About";
import Home from "./Page/Home";
import Shop from "./Page/Shop";
import Blogs from "./Page/Blogs";
import Contact from "./Page/Contact";
import ProductQuickView from "./Components/Shop/ProductQuickView";
import Copyright from "./Components/Footer/Copyright";
import ProductDetails from "./Components/Shop/ProductDetails";
import PageNotFound from "./Components/PageNotFound";
import Category from "./Components/Shop/Category";
import Breadcrumb from "./Components/Breadcrumb";
import Banner from './Components/Header/Banner'
import Services from "./Page/Services";
import Login from "./Page/Login";
import Register from "./Page/Register";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <ToastContainer />
      <EnquirePopup />
      <ProductQuickView />
      <main>
        <Routes>
          <Route path="/:PageTitle" Component={Breadcrumb} />
          <Route path="/" Component={Banner} />
          <Route path="/product/:productParma" Component={Breadcrumb} />
          <Route path="/category/:categoryParma" Component={Breadcrumb} />
          <Route path="/*" Component={Breadcrumb} />
        </Routes>

        <Routes>
          <Route path="/product/:productParma" element={<ProductDetails />} />
          <Route path="/category/:categoryParma" element={<Category />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/*" Component={PageNotFound} />
        </Routes>
      </main>
      <Footer />
      <Copyright />
    </BrowserRouter>
  );
}

export default App;
