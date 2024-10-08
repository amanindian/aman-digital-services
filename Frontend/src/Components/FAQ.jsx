import React, { useState, useContext } from 'react';
import './FAQ.css';
import { ProjectInfoContext } from '../Context/ProjectInfo';
import FAQ_Image from '../Assets/Primary Images/faqs-sidebar.gif'


const FAQ = () => {
    const [activeId, setActiveId] = useState(0);

    const toggleAccordion = (index) => {
        setActiveId(activeId === index ? null : index);
    };

    const { FAQsData } = useContext(ProjectInfoContext);


    return (
        <div className="container faq-section">
            <div className="faq">
                <h2 className='faq-title'>Frequently Asked Questions
                </h2>
                {FAQsData.map((item) => (
                    <div key={item.Id} className={`accordion ${activeId === item.Id ? 'active' : ''}`} onClick={() => toggleAccordion(item.Id)}>
                        <div className="accordion-header">
                            <h3 className="accordion-title">{item.Q}</h3>
                            <div className="accordion-icon">{activeId === item.Id ? '-' : '+'}</div>
                        </div>
                        {activeId === item.Id && <p className="accordion-content">{item.Ans}</p>}
                    </div>
                ))}
            </div>
            <div className="faq">
                <img src={FAQ_Image} className='faq-side-image' alt="Aman Digital Services Frequently Asked Question" />
            </div>
        </div>
    );
};

export default FAQ;
