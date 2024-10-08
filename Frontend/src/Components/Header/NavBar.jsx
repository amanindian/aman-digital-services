import React, { useContext } from "react";
import { ProjectInfoContext } from "../../Context/ProjectInfo";
import { NavLink, Link } from "react-router-dom";
import "./NavBar.css";
import { StateContext } from "../../Context/StateProvider";
import Shop_bnr_Image from '../../Assets/Primary Images/Aman Digital Services Banner.jpg'



export default function NavBar() {
  const { SiteTitle, Icons, Phone_Number, Email, Services } =
    useContext(ProjectInfoContext);

  const { setIsEnquirePopup } = useContext(StateContext);
  return (
    <header>
      <div className="topinfo container">
        <div className="top-contact-info">
          <a href={"tel:+91" + Phone_Number}>
            {Icons.Phone}
            {Phone_Number}
          </a>
          <a href={"mailto:" + Email}>
            {Icons.Email}
            {Email}
          </a>
        </div>
        <div className="top-button-info">
          <button
            className="enquiry-btn"
            onClick={() => {
              setIsEnquirePopup(true);
            }}
          >
            Enquiry Now
          </button>
          <div className="search-box">
            <input
              type="text"
              name="Search"
              className="search-felid"
              placeholder="Search Here"
            />
            <button className="search-btn">{Icons.Search}</button>
          </div>
        </div>
      </div>
      <nav className="navmenu container">
        <NavLink className="logo desktop-item" to="/" title="Click Here">
          {SiteTitle}
        </NavLink>
        <NavLink className="logo mobile-item" to="/" title="Click Here">
          ADS
        </NavLink>
        <input type="radio" name="slider" id="menu-btn" />
        <label htmlFor="menu-btn" className="mobile-item menu-trigger-btn">
          <i className="fa-solid fa-bars"></i>
        </label>
        <input type="radio" name="slider" id="close-btn" />

        <ul className="navbar">
          <label htmlFor="close-btn" className="mobile-item menu-close-btn">
            <i className="fa-solid fa-x"></i>
          </label>
          <li className="menu-item">
            <NavLink className="menu-link" to="/">
              Home
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="/about">
              About
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link desktop-item" to="/shop">
              Shop
            </NavLink>
            <input type="checkbox" id="showMega" />
            <label htmlFor="showMega" className="mobile-item menu-link">Shop</label>
            <div className="mega-box">
              <div className="content">
                <div className="row">
                  <img src={Shop_bnr_Image} alt="Aman Digital Services Shop" />
                </div>
                <div className="row">
                  <NavLink className='main-mega-link' to="/category/electronic">Electronic</NavLink>
                  <ul className="mega-links">
                    <li><NavLink to="/category/laptops">Laptop</NavLink></li>
                    <li><NavLink to="/category/mobile">Mobile</NavLink></li>
                    <li><NavLink to="/category/smartphones"> Smartphones</NavLink></li>
                    <li><NavLink to="/category/accessories">Accessories </NavLink></li>
                  </ul>
                </div>
                <div className="row">
                  <NavLink className='main-mega-link' to="/category/man">Man </NavLink>
                  <ul className="mega-links">
                    <li><Link to="/category/clothing">Clothing </Link></li>
                    <li><Link to="/category/footwear">Footwear </Link></li>
                    <li><Link to="/category/skincare">Skincare</Link></li>
                    <li><Link to="/category/home-decoration">Decoration</Link></li>
                  </ul>
                </div>
                <div className="row">
                  <NavLink className='main-mega-link' to="/category/woman">Women </NavLink>
                  <ul className="mega-links">
                    <li><Link to="/category/clothing">Clothing </Link></li>
                    <li><Link to="/category/footwear">Footwear </Link></li>
                    <li><Link to="/category/fragrances">Fragrances</Link></li>
                    <li><Link to="/category/skincare">Skincare</Link></li>
                  </ul>
                </div>
              </div>
            </div>

          </li>
          <li className="menu-item">
            <NavLink className="menu-link desktop-item" to="/services">
              Services
            </NavLink>
            <input type="checkbox" id="showDrop" />
            <label htmlFor="showDrop" className="mobile-item menu-link">Our Services</label>
            <ul className="drop-menu">
              {Services.map((Item, Index) => {
                return <li key={Index}><NavLink to={`/${Item.Name.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-{2,}/g, '-')}  `} >{Item.Name}</NavLink></li>
              })}
            </ul>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="/blogs">
              Blogs
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="/contact">
              Contact Us
            </NavLink>
          </li>
          <li className="menu-item">
            <NavLink className="menu-link" to="/cart">
              {Icons.Cart}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
