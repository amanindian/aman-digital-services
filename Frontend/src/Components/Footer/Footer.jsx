import React, { useContext } from 'react';
import { ProjectInfoContext } from '../../Context/ProjectInfo';
import { NavLink } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
  const { SiteTitle, FooterMenu } = useContext(ProjectInfoContext);
  return (
    <footer id='footer'>
      <div className="container">
        <div className="footer-columns">
          <div className="footer-about footer-column">
            <NavLink className="logo footer-logo" to="/" title="Click Here">{SiteTitle}</NavLink>
            <p className='footer-about-description'>Aman Digital Services is a Cyber Cafe Shop and this also provides E-commerce Services and Studio services These all Products and Services managed by Aman Kumar who holds 3+ years of experience in the IT field</p>
          </div>


          <div className="quick-links footer-column">
            <h3 className='Footer-subheading'>Quick Links</h3>
            <ul className='footer-navbar menus'>
              {FooterMenu.QuickLinks.map((Item, i) => {
                return <li key={i}>  <NavLink className='menu-item before-icon' to={Item.URL}  >{Item.Name}</NavLink>  </li>
              })}
            </ul>
          </div>


          <div className="contact-info footer-column">
            <h3 className='Footer-subheading'>Contact Info</h3>
            <ul className='footer-navbar'>

              <li>
                <a className='menu-item' href="tel:918002579962"  >
                  <i className="material-symbols-outlined">call</i>
                  +91-8002579962
                </a>
              </li>
              <li>
                <a className='menu-item' href="mailto:amanparariya@gmail.com"  >
                  <i className="material-symbols-outlined">mail</i>
                  amanparariya@gmail.com
                </a>
              </li>

              <li>
                <span className='menu-item' href="tel:918002579962"  >
                  <i className="material-symbols-outlined">location_on</i>
                  Siwan, Bihar, India, 841226
                </span>
              </li>

              <li>
                <span className='menu-item' href="tel:918002579962"  >
                  <i className="material-symbols-outlined">schedule</i>
                  Hours:10:00 - 18:00(Monday - Sunday)
                </span>
              </li>

            </ul>

            <div className="social-icons">
              {FooterMenu.SocialIcons.map((Item, i) => {
                return (
                  <a className='social-icon' href={Item.URL} key={i} target="_blank" rel="noreferrer">
                    <i className={"fa-brands " + Item.Icon}></i>
                  </a>
                )
              })}
            </div>
          </div>

          <div className="our-location footer-column">
            <h3 className='Footer-subheading'>Our Location</h3>
            <div style={{
              background:"white",
              height:"200px"
            }}>

            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}