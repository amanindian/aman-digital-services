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
                    Welcome to Aman Digital Services, your premier destination for top-notch web development, design, and digital marketing solutions. Founded by Aman Kumar in March 2020 near Siwan, Bihar, our company boasts over 5 years of experience dedicated to crafting compelling online experiences that drive business success. Our comprehensive suite of services is meticulously designed to optimize your online presence and enhance brand visibility.
                    <br />
                    <br />
                    At Aman Digital Services, we understand the importance of search engine optimization (SEO) in today's competitive digital landscape. That's why our team of experts is committed to implementing cutting-edge SEO strategies to boost your website's visibility and drive organic traffic. From keyword research to on-page optimization, we'll help you climb the search engine rankings and stand out from the crowd.
                    <br />
                    <br />
                    When you partner with Aman Digital Services, you're not just getting a service provider – you're gaining a trusted ally dedicated to your success. We take the time to understand your unique goals and objectives, ensuring that our solutions are tailored to meet your specific needs. Experience the difference with Aman Digital Services and unlock the full potential of your online presence.
                </p>
                {button && <Link to="/about" className='welcome-button'>Know More</Link>}
            </div>
            <div className="welcome-image">
                <img src={WelcomeData.Image} alt={"Welcome to " + SiteTitle + " Aman Kumar"} />
            </div>
        </div>
    )
}