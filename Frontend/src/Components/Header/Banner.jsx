import React, { useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ProjectInfoContext } from '../../Context/ProjectInfo';
import "./Banner.css"
import Helmet from 'react-helmet';


export default function Banner() {
    const { BannerData } = useContext(ProjectInfoContext);


    return (
        <section className='banner-slider'>
            <Helmet>
                <meta charSet="utf-8" />
                <meta name="description"
                    content="Aman Digital Services offers Web Development, Web Designing, Digital Marketing, and E-Commerce Services. Founded by Aman Kumar, providing expert solutions for your digital needs." />
                <meta name="keywords" content="Web Development, E-Commerce, Digital Marketing, Web Designing, Aman Digital Services, Aman Kumar, amanindian" />
                <title> Aman Digital Services</title>
            </Helmet>
            <Slide>
                {BannerData.map((slideImage, index) => (
                    <div key={index}>
                        <div className='banner-image' title={slideImage.Alt} style={{ 'backgroundImage': `url("${slideImage.url.Banner_1}")` }}>
                            <div className="container">
                                <h4 className='banner-heading'>{slideImage.Heading}</h4>
                                <p className='banner-description'>{slideImage.Description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slide>


        </section>
    )
}