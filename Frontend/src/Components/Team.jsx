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
                <i className="material-symbols-outlined">link</i>
              </a>

              <a
                className="social-icon"
                href="https://join.skype.com/invite/qvM4tdcpzPWr"
                target="_blank"
                rel="noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" /></svg>
              </a>
              <a
                className="social-icon"
                href="https://www.facebook.com/amankrindian/"
                target="_blank"
                rel="noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
              </a>
              <a
                className="social-icon"
                href="https://twitter.com/amankrindian"
                target="_blank"
                rel="noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z" /></svg>
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/aman__indian/"
                target="_blank"
                rel="noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                  <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/in/amanindian/"
                target="_blank"
                rel="noreferrer"
              ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" /></svg>
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
