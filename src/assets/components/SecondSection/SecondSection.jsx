import React from 'react'
import { FaCheckCircle } from "react-icons/fa";
import { PiDevicesFill } from "react-icons/pi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import Goggle from "../../Images/Goggle.svg"
import "./SecondSection.scss"
import "./Responsive.scss"

export const SecondSection = () => {

    return (
        <section id="Services" className='secondSection'>
            <div className='serviceHeading'>
                <h1>What I Do</h1>
                <p>I design web apps, breathing life into ideas with frameworks.My passion lies in optimizing codes, good UI&UX experience From idea to launch, i cultivate all ideas into reality</p>
            </div>
                <ul className='list'>
                    <li> 
                        <h4>
                            <PiDevicesFill />
                            WEB DEVELOPMENT 
                        </h4> 
                        <p> 
                            Building apps using HTML, CSS, and JavaScript with pre-processors like React and build tools 
                            such as Sass, Geting the desired functionalities to work on websites
                             and apps has been my drive while maintaining a semantic, modular code base.
                        </p>
                    </li>
                    <li> 
                        <h4>
                             <RiPencilRuler2Fill />
                             UI/VISUAL DESIGN 
                        </h4>
                        <p>
                            I have a passion to develop and implement responsive and pleasing interfaces 
                            for websites and apps that adapt to any type of device, platform, or browser in use.
                        </p>
                    </li>
                    <li> 
                        <h4> 
                            UX DESIGN/RESEARCH
                        </h4>
                        <p>
                            Design isn't just what a product looks.Design covers 
                            the functionality uf a product and the user experience.
                            I love to design interfaces and experiences that people can enjoy on all digital medium.                        </p>
                    </li>
                </ul>
        </section>
    )
}
