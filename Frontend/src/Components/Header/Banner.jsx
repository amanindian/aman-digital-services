import React, { useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import { ProjectInfoContext } from '../../Context/ProjectInfo';
import "./Banner.css"


export default function Banner() {
    const { BannerData } = useContext(ProjectInfoContext);


    return (
        <section className='banner-slider'>
            <Slide>
                {BannerData.map((slideImage, index) => (
                    <div key={index}>
                        <div className='banner-image' title={slideImage.Alt} style={{ 'backgroundImage': `url("${slideImage.url.Banner_1}")` }}>
                            <h4 className='banner-heading'>{slideImage.Heading}</h4>
                            <p className='banner-description'>{slideImage.Description}</p>
                        </div>
                    </div>
                ))}
            </Slide>

            
        </section>
    )
}