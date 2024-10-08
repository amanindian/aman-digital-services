import React, { useContext } from 'react'
import { ProjectInfoContext } from '../Context/ProjectInfo';
import "./Welcome.css"
import { Link } from 'react-router-dom';


export default function Welcome({ button }) {
    const { SiteTitle, WelcomeData } = useContext(ProjectInfoContext);
    return (
        <div className="welcome container">
            <div className="welcome-text">
                <h1 className='welcome-title'>Welcome to {SiteTitle}</h1>
                <p className='welcome-description'>
                    Welcome to Aman Digital Services, your one stop solution for web development, design and digital marketing. Founded by Aman Kumar in March 2020 near Siwan, Bihar, we have 5+ years of experience in creating awesome online experiences that drive business results. Our services are designed to boost your online presence and brand visibility.

                    <br />
                    <br />
                    At Aman Digital Services we know the importance of search engine optimization (SEO) in today’s digital world. That’s why our team of experts are committed to implement latest SEO strategies to increase your website visibility and organic traffic. From keyword research to on-page optimization, we will help you climb the search engine rankings and stand out from the crowd.
                    <br />
                    <br />

                    When you partner with Aman Digital Services, you’re not just getting a service provider – you’re getting a trusted friend who will help you succeed. We take the time to understand your unique goals and objectives so our solutions are tailored to your needs. Try Aman Digital Services and unlock your online potential.                </p>
                {button && <Link to="/about" className='welcome-button'>Know More</Link>}
            </div>
            <div className="welcome-image">
                <img src={WelcomeData.Image} alt={"Welcome to " + SiteTitle + " Aman Kumar"} />
            </div>
        </div>
    )
}