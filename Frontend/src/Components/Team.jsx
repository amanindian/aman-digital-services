import AmanPic from "../Assets/Primary Images/aman-kumar-profile-photo.png";
import RajaPic from "../Assets/Primary Images/Raja-Pandey.jpg";
import AramanPic from "../Assets/Primary Images/Araman-Arya.jpg";
import React from "react";
import "./Team.css";

export default function Team() {
  return (
    <section className="container" id="team">
      <div className="about-founder">
        <div className="main-content">
          <img
            src={AmanPic}
            alt="Aman Kumar Founder of Aman Digital Services"
            className="founder-image"
          />
          <div>
            <h3 className="title">About Founder</h3>
            <p>
              I'm Aman Kumar, a web developer currently enrolled in a Bachelor
              of Computer Application program at Indira Gandhi National Open
              University. I live in Zirakpur, Punjab, and I honed my web
              development skills through online tutorials. I'm known for my hard
              work and ability to learn quickly. During my studies, I
              consistently achieved top grades and completed projects showcasing
              my skills, which you can see on my portfolio website. These
              include a{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://amanindian.netlify.app/"
                title="Click Here"
              >
                Portfolio Website{" "}
              </a>
              itself, a{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://amantextutils.netlify.app/"
                title="Click Here"
              >
                Text Utilities
              </a>{" "}
              application, and an
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://amanshopnow.netlify.app/"
                title="Click Here"
              >
                {" "}
                ShopNow ( E-Commerce shop ).
              </a>
            </p>
            <h3>Er. Aman Kumar</h3>
            <div className="social-icons">
              <a
                className="social-icon"
                href="https://amanindian.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-solid fa-link"></i>
              </a>

              <a
                className="social-icon"
                href="https://join.skype.com/invite/qvM4tdcpzPWr"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands  fa-skype " aria-hidden="true"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.facebook.com/amankrindian/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands  fa-facebook " aria-hidden="true"></i>
              </a>
              <a
                className="social-icon"
                href="https://twitter.com/amankrindian"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands  fa-twitter " aria-hidden="true"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/aman__indian/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands  fa-instagram " aria-hidden="true"></i>
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/amanindian/"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands  fa-linkedin " aria-hidden="true"></i>
              </a>
            </div>
          </div>
        </div>
        <p>
          Aman Kumar the founder of Aman Digital Services has made a name for
          himself in the digital world with over 5 years of hands on experience
          in web development. Aman is from Siwan, Bihar and his journey started
          with a passion for technology and an understanding of its power. His
          expertise lies in web development, web designing and digital marketing
          making him a jack of all trades in the digital world. In March 2020 he
          launched Aman Digital Services to bring world class digital solutions
          to local businesses. Aman’s leadership is all about excellence,
          innovation and client satisfaction. Under his guidance Aman Digital
          Services has become a go to partner for businesses looking to boost
          their online presence. His forward thinking and hard work continues to
          drive the company’s growth and keep it ahead of the curve.
        </p>
      </div>
      <div className="other-team">
        <h3 className="title">Other Members</h3>
        <div className="our-team">
          <div className="team-card">
            <img
              src={AramanPic}
              alt="Araman Arya Aman Digital Services"
              className="member-image"
            />
            <div className="team-member-details">
              <h4>Araman Arya</h4>
              <h5>Marketing Head</h5>
              <p>
                Araman Arya, a marketing specialist with over 10 years of
                experience, excels in managing SEO strategies. His expertise
                enhances online visibility and drives business growth, making
                him a pivotal asset to our digital marketing team.{" "}
              </p>

              <p style={{ display: "none" }}>
                Araman Arya is a marketing professional and SEO expert with over
                10 years of experience in digital marketing. He’s known for his
                strategic thinking and understanding of search engine
                algorithms. Araman has helped many businesses get online
                visibility and growth. His expertise includes SEO, content
                strategy, social media marketing and PPC campaigns. Throughout
                his career Araman has developed and executed marketing
                strategies that not only increase website traffic but also user
                engagement and conversion rates. His analytical mind and ability
                to stay ahead of the curve has made him a valuable asset to any
                team. At Aman Digital Services Araman uses his experience and
                knowledge to drive marketing initiatives and get clients their
                digital marketing goals. He’s committed to excellence and
                results driven so he’s your go to guy in the ever changing world
                of digital marketing.
              </p>
              <div className="social-icons">
                <a
                  className="social-icon"
                  href="https://join.skype.com/invite/qvM4tdcpzPWr"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands  fa-skype " aria-hidden="true"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://www.facebook.com/aramanpandey.arya"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands  fa-facebook " aria-hidden="true"></i>
                </a>
                <a className="social-icon" href="tel:918307456161">
                  <i className="fa-solid fa-phone " aria-hidden="true"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://www.instagram.com/agreenarya/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands  fa-instagram "
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div className="team-card">
            <img
              src={RajaPic}
              alt="Raja Pandey Aman Digital Services"
              className="member-image"
            />
            <div className="team-member-details">
              <h4>Raja Pandey</h4>
              <h5>Video Editor</h5>
              <p>
                Raja Pandey, with over 2 years of experience, skillfully manages
                the designing and video editing at Aman Digital Services. His
                creative expertise ensures visually stunning and engaging
                content, elevating the digital presence of our clients.
              </p>

              <p style={{ display: "none" }}>
                Raja Pandey is our secret sauce at Aman Digital Services where
                he handles designing and video editing. With over 2 years of
                experience in the field he brings a new perspective to every
                project. His attention to detail and artistic sense makes every
                design and video he works on visually stunning and top notch.
                Raja is dedicated to his craft and keeps himself updated with
                the latest design and video editing trends and technologies
                making him an essential part of the team. His creativity and
                technical skills delivers amazing results and helps Aman Digital
                Services to grow and shine.
              </p>
              <div className="social-icons">
                <a
                  className="social-icon"
                  href="mailto:rajapandey841226@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://www.facebook.com/profile.php?id=61557048719287"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa-brands  fa-facebook " aria-hidden="true"></i>
                </a>
                <a className="social-icon" href="tel:+919771917095">
                  <i className="fa-solid fa-phone " aria-hidden="true"></i>
                </a>
                <a
                  className="social-icon"
                  href="https://www.instagram.com/i_am_alone_raja/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i
                    className="fa-brands  fa-instagram "
                    aria-hidden="true"
                  ></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
