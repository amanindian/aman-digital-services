import WelcomeImage from "../Assets/Primary Images/Welcome.jpg";
import Banner_1 from "../Assets/Primary Images/Aman Digital Services Banner.jpg";
import React, { createContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faEnvelopeOpen,
    faPhone,
    faSearch,
    faShoppingCart,
    faXmark,
} from "@fortawesome/free-solid-svg-icons";
export const ProjectInfoContext = createContext();

export default function ProjectInfo({ children }) {
    const ProjectInfoData = {
        SiteTitle: "Aman Digital Services",
        Email: "amanparariya@gmail.com",
        Phone_Number: 8002579962,
        Address: "Aman Kumar, Parariya, Sarsar , Siwan, Bihar, 841226",

        Services: [
            {
                Name: "Web Designing",
            },
            {
                Name: "Web Development",
            },
            {
                Name: "Digital Marketing",
            },
            {
                Name: "SEO",
            },
            {
                Name: "E-Commerce Development"
            }
        ],
        Icons: {
            Phone: <FontAwesomeIcon icon={faPhone} />,
            Email: <FontAwesomeIcon icon={faEnvelopeOpen} />,
            Search: <FontAwesomeIcon icon={faSearch} />,
            Bar: <FontAwesomeIcon icon={faBars} />,
            Cart: <FontAwesomeIcon icon={faShoppingCart} />,
            X: <FontAwesomeIcon icon={faXmark} />,
        },
        FooterMenu: {
            QuickLinks: [
                {
                    Name: "About Us",
                    URL: "/about",
                },
                {
                    Name: "Cart",
                    URL: "/cart",
                },
                {
                    Name: "Blog",
                    URL: "/blog",
                },
                {
                    Name: "Contact Us",
                    URL: "/contact",
                },
            ],
            ContactInfo: [
                {
                    Icon: "fa-envelope",
                    Name: "amanparariya@gmail.com",
                    URL: "mailto:amanparariya@gmail.com",
                },
                {
                    Icon: "fa-phone",
                    Name: "+91-8002579962",
                    URL: "tel:+91-8002579962",
                },
                {
                    Icon: "fa-location-dot",
                    Name: "Siwan, Bihar, 841226",
                    URL: "/",
                },
                {
                    Icon: "fa-clock",
                    // URL: "tel:+91-8002579962",
                    Name: "Hours:10:00 - 18:00(Monday - Sunday)",
                },
            ],
            SocialIcons: [
                {
                    Icon: " fa-youtube ",
                    URL: "https://www.youtube.com/channel/UCMr7miKWktz7vXj7zydHBcQ",
                },
                {
                    Icon: " fa-facebook ",
                    URL: "https://www.facebook.com/amankrindian/",
                },
                {
                    Icon: " fa-twitter ",
                    URL: "https://twitter.com/amankrindian",
                },
                {
                    Icon: " fa-instagram ",
                    URL: "https://www.instagram.com/aman__indian/",
                },
                {
                    Icon: " fa-linkedin ",
                    URL: "https://www.linkedin.com/in/amanindian/",
                },
            ],
        },

        Our_Achievements: [
            {
                // < NumberCounter end = { 100} delay = { 5} className = "increment" preFix = "Up revenue:" postFix = "$" />
                Title: "Year of Experience",
                End: 5,
                Start: 0,
                Delay: 3,
                Type: "increment",
                postFix: "+",
            },
            {
                Title: "Total Employee",
                End: 30,
                Start: 0,
                Delay: 3,
                Type: "increment",
                postFix: "+",
            },
            {
                Title: "Total Services",
                End: 10,
                Start: 0,
                Delay: 3,
                Type: "increment",
                postFix: "+",
            },
            {
                Title: "Total Customer",
                End: 100,
                Start: 0,
                Delay: 5,
                Type: "increment",
                postFix: "+",
            },
        ],


        BannerData: [
            {
                url: {Banner_1},
                Heading: "Up to 30% Off",
                Description:
                    "Elevate Your Online Presence with Aman Digital Services - Expert Web Development, Design, and Marketing Solutions for Business Success!",
                Alt: "Aman Digital Services Banner 1 services"
            },
            {
                url: {Banner_1},
                Heading: "Up to 30% Off",
                Description:
                    "Transform Your Digital Strategy Today - Unlock Growth Potential with Aman Digital Services' Tailored Solutions and Proven Expertise.",
                Alt: "Aman Kumar, Founder of Aman Digital Services"
            },
            {
                url: {Banner_1},
                Heading: "Up to 30% Off",
                Description:
                    "Drive Results with Aman Digital Services - Craft Compelling Online Experiences That Stand Out in a Crowded Digital Landscape",
                Alt: "Small Business Solutions by Aman Digital Services"
            },
        ],


        WelcomeData: {
            Description: `
            Introducing Aman Digital Services, your premier destination for cutting-edge web development, design, and digital marketing solutions. Established by Aman Kumar in March 2020, our company is committed to delivering unparalleled expertise honed over 5+ years in the field.
            
            Based near Siwan, Bihar, our roots are deeply ingrained in the heart of India, and our dedication to excellence resonates in every project we undertake. At Aman Digital Services, we pride ourselves on crafting compelling online experiences that not only captivate audiences but also drive tangible business success.
            
            Our comprehensive suite of services encompasses web development, design, and digital marketing strategies tailored to your unique needs and objectives. Whether you're looking to enhance your online presence, boost brand awareness, or maximize your digital ROI, we have the tools and expertise to help you achieve your goals.
            
            When you choose Aman Digital Services, you're not just partnering with a service provider – you're gaining a trusted ally committed to your success. We prioritize understanding your specific requirements and aspirations, ensuring that our solutions are perfectly aligned with your vision.
            
            Join countless satisfied clients who have experienced the difference with Aman Digital Services. Elevate your business to new heights and unlock its full potential in the digital landscape. Get in touch with us today and let's embark on a journey towards unprecedented online success together.` ,
            Image: WelcomeImage,
        },


        TabsData: [
            {
                id: 1,
                Title: "E-Commerce",
                Description: `Experience seamless e-commerce solutions with Aman Digital Services. From custom website development to intuitive user interfaces, we specialize in creating dynamic online stores that drive conversions and maximize revenue. Our comprehensive e-commerce services encompass everything you need to succeed in the digital marketplace, including secure payment gateways, inventory management systems, and strategic marketing initiatives. With a focus on user experience and functionality, we ensure that your e-commerce platform not only attracts customers but also keeps them coming back for more. Trust Aman Digital Services to elevate your online retail business and achieve unparalleled success in the competitive e-commerce landscape.`,
                Icon: "fa-shop",
                Image: undefined,
            },
            {
                id: 2,
                Title: "Web Development",
                Description: `At Aman Digital Services, we specialize in providing comprehensive Web development solutions tailored to meet your unique business needs. Our team of experienced developers leverages the latest technologies and industry best practices to create dynamic and responsive websites that engage your audience and drive results. From custom website design to e-commerce development and everything in between, we offer end-to-end solutions to help you establish a powerful online presence. Whether you're a small startup or a large enterprise, trust Aman Digital Services to deliver exceptional web development services that elevate your brand and propel your business forward.`,
                Image: undefined,
                Icon: "fa-code",
            },
            {
                id: 3,
                Title: "Digital Services",
                Description: `At Aman Digital Services, we specialize in providing comprehensive web development solutions tailored to meet your unique business needs. Our team of experienced developers leverages the latest technologies and industry best practices to create dynamic and responsive websites that engage your audience and drive results. From custom website design to e-commerce development and everything in between, we offer end-to-end solutions to help you establish a powerful online presence. Whether you're a small startup or a large enterprise, trust Aman Digital Services to deliver exceptional web development services that elevate your brand and propel your business forward.`,
                Image: undefined,
                Icon: "fa-computer",
            },
            {
                id: 4,
                Title: "Banking Services",
                Description: `Discover seamless banking solutions tailored to your needs with Aman Digital Services. Our comprehensive suite of banking services encompasses everything from online account management to secure transactions and personalized financial advice. Whether you're a small business looking to streamline your financial operations or an individual seeking convenient banking options, we have you covered. With a focus on user-friendly interfaces and cutting-edge security measures, we ensure a smooth and secure banking experience for all our clients. Trust Aman Digital Services to empower you with the tools and resources you need to manage your finances efficiently and achieve your financial goals. `,
                Image: undefined,
                Icon: "fa-building-columns",
            },
        ],

        FAQsData: [
            {
                Id: 0,
                Q: "Who is Aman Kumar?",
                Ans: "Aman kumar is a Web Developer who Manage Designing and Development of Full Stack Website with the help of HTML, CSS, Javascript, Wordpress, React, Node Js, MongoDB and Express JS",
            },
            {
                Id: 1,
                Q: "What is Aman Digital Services?",
                Ans: "Aman Digital Services is a premier provider of web development, design, and digital marketing solutions, founded by Aman Kumar near Siwan, Bihar, in March 2020. With over 5 years of industry experience, we specialize in delivering top-notch services aimed at creating compelling online experiences that propel business success. Whether you're looking to enhance your online presence, revamp your website, or implement effective digital marketing strategies, Aman Digital Services is dedicated to meeting your needs and exceeding your expectations.",
            },
            {
                Id: 2,
                Q: "What services does Aman Digital Services offer?",
                Ans: "Aman Digital Services specializes in web development, design, and digital marketing solutions. We offer comprehensive services tailored to meet your specific needs and goals.",
            },
            {
                Id: 3,
                Q: "How long does it take to complete a project with Aman Digital Services?",
                Ans: "Project timelines vary depending on the scope and complexity of the work involved. However, we strive to deliver results in a timely manner without compromising on quality. Rest assured, we'll work closely with you to establish clear timelines and keep you informed every step of the way.",
            },
            {
                Id: 4,
                Q: "How do I get started with Aman Digital Services?",
                Ans: `Getting started with Aman Digital Services is easy! Simply reach out to us through our website or contact information provided, and one of our friendly team members will be happy to discuss your needs and objectives. From there, we'll work together to develop a customized plan to achieve your goals.`,
            },
        ]
    };


    return (
        <ProjectInfoContext.Provider value={ProjectInfoData} >
            {children}
        </ProjectInfoContext.Provider>
    );
}