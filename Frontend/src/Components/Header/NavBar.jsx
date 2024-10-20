import React, { useContext, useEffect, useState } from "react";
import { ProjectInfoContext } from "../../Context/ProjectInfo";
import { NavLink, Link, useNavigate } from "react-router-dom";
import "./NavBar.css";
import { StateContext } from "../../Context/StateProvider";
import { useAuth } from "../../Context/Auth";
import Shop_bnr_Image from '../../Assets/Primary Images/Aman Digital Services Banner.jpg'
import { toast } from "react-toastify";



export default function NavBar() {
  const { SiteTitle, Services } =
    useContext(ProjectInfoContext);

  const { setIsEnquirePopup } = useContext(StateContext);
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate()

  const [isSticky, setIsSticky] = useState(false);


  const handleScroll = () => {
    const offset = window.pageYOffset;
    if (offset > 40) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  const HandleLogout = () => {

    setAuth({
      ...auth,
      user: null,
      token: ""
    })

    localStorage.removeItem('auth')
    toast.success("Logout Successful")
    navigate('/login')
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <header id="header" className={isSticky ? 'hfe-sticky' : ''} >
      <div id="topinfo">
        <div className="container">
          <div className="topinfo ">
            <div className="top-contact-info">
              <a href="tel:918002579962"><i className="material-symbols-outlined">call</i>+91-8002579962</a>
              <a href="mailto:amanparariya@gmail.com"><i className="material-symbols-outlined">mail</i>amanparariya@gmail.com</a>
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
                <button className="search-btn"><i className="material-symbols-outlined">search</i></button>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div id="navmenu">
        <div className="container">
          <nav className="navmenu ">
            <NavLink className="logo desktop-item" to="/" title="Click Here">
              {SiteTitle}
            </NavLink>
            <NavLink className="logo mobile-item" to="/" title="Click Here">
              ADS
            </NavLink>
            <input type="radio" name="slider" id="menu-btn" />
            <label htmlFor="menu-btn" className="mobile-item menu-trigger-btn">
              <i className="material-symbols-outlined">menu</i>
            </label>
            <input type="radio" name="slider" id="close-btn" />

            <ul className="navbar">
              <li className="mobile-item ">
                <label htmlFor="close-btn" className="menu-close-btn">
                  <i className="material-symbols-outlined">close</i>
                </label>
              </li>
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
                      <img src={Shop_bnr_Image} alt="Aman Digital Services Shop" width='100' height='80' />
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

              {!auth.user ?

                (
                  <li className="menu-item">
                    <NavLink className="menu-link desktop-item" to="/login">
                      <i className="material-icons">person</i>
                    </NavLink>
                    <input type="checkbox" id="authLink" />
                    <label htmlFor="authLink" className="mobile-item menu-link"><i className="material-icons">person</i></label>
                    <ul className="drop-menu">
                      <li > <NavLink to="/login">Login</NavLink></li>
                      <li > <NavLink to="/register">Register</NavLink></li>
                    </ul>
                  </li>
                )

                :

                (
                  <li className="menu-item">
                    <NavLink className="menu-link desktop-item" to="/account">
                      <i className="material-icons">person</i>{!auth.user.Name ? "No Name" : auth.user.Name.substr(0, 5)}
                    </NavLink>
                    <input type="checkbox" id="authLink" />
                    <label htmlFor="authLink" className="mobile-item menu-link"><i className="material-icons">person</i></label>
                    <ul className="drop-menu">
                      <li > <span className="menu-link" style={{ cursor: "pointer" }} onClick={HandleLogout}>Logout
                      </span> </li>
                      <li > <NavLink to="/register">My Order</NavLink></li>
                    </ul>
                  </li>
                )
              }
              <li className="menu-item">
                <NavLink className="menu-link" to="/cart">
                  <i className="material-icons">shopping_cart</i>
                </NavLink>
              </li>

            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}