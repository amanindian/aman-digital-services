import React, { useContext } from 'react';
import { ProjectInfoContext } from '../../Context/ProjectInfo';
import { NavLink } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
  const { SiteTitle, FooterMenu } = useContext(ProjectInfoContext);
  return (
    <footer className='footer container'>
      <div className="footer-about footer-column">
        <NavLink className="logo footer-logo" to="/" title="Click Here">{SiteTitle}</NavLink>
        <p className='footer-about-description'>Aman Digital Services is a Cyber Cafe Shop and this also provides E-commerce Services and Studio services These all Products and Services managed by Aman Kumar who holds 3+ years of experience in the IT field</p>
      </div>


      <div className="quick-links footer-column">
        <h3 className='Footer-subheading'>Quick Links</h3>
        <ul className='footer-navbar'>
          {FooterMenu.QuickLinks.map((Item, i) => {
            return <li key={i}>  <NavLink className='menu-item before-icon' to={Item.URL}  >{Item.Name}</NavLink>  </li>
          })}
        </ul>
      </div>


      <div className="contact-info footer-column">
        <h3 className='Footer-subheading'>Contact Info</h3>
        <ul className='footer-navbar'>
          {FooterMenu.ContactInfo.map((Item, i) => {
            return <li key={i}>
              <a className='menu-item' href={Item.URL}  >
                <i className={"fa-solid " + Item.Icon}></i>
                {Item.Name}
              </a>
            </li>
          })}
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
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7154.140410854519!2d84.333149!3d26.291824!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3992ff8bc28ef74d%3A0x88410757469b7340!2sAMAN%20DIGITAL%20SERVICE!5e0!3m2!1sen!2sin!4v1707632867090!5m2!1sen!2sin"
          width="100%"
          height="220px"
          title='Aman Digital Services'
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </footer>
  )
}