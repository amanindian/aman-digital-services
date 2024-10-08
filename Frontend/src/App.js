import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Footer from "./Components/Footer/Footer";
import EnquirePopup from "./Components/EnquirePopup";
import About from "./Page/About";
import Home from "./Page/Home";
import Shop from "./Page/Shop";
import Blog from "./Page/Blog";
import ProductQuickView from "./Components/Shop/ProductQuickView";
import Copyright from "./Components/Footer/Copyright";
import ProductDetails from "./Components/Shop/ProductDetails";
import PageNotFound from "./Components/PageNotFound";
import Category from "./Components/Shop/Category";
import Breadcrumb from "./Components/Breadcrumb";
import Banner from './Components/Header/Banner'


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <EnquirePopup />
      <ProductQuickView />

      <Routes>
        <Route path="/:PageTitle" Component={Breadcrumb} />
        <Route path="/" Component={Banner} />
        <Route path="/product/:productParma" Component={Breadcrumb} />
        <Route path="/category/:categoryParma" Component={Breadcrumb} />
      </Routes>

      <Routes>
        <Route path="/product/:productParma" element={<ProductDetails />} />
        <Route path="/category/:categoryParma" element={<Category />} />
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Shop" element={<Shop />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/*" Component={PageNotFound} />
      </Routes>

      <Footer />
      <Copyright />
    </BrowserRouter>
  );
}

export default App;
