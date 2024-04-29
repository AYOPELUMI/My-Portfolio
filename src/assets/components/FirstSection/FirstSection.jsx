import {TbBrandGithubFilled} from "react-icons/tb"
import ProfilePic from "../../Images/profile-pic.png"

import "./FirstSection.scss"
import "./Reponsive.scss"

export const FirstSection = () => {
    
    
    return (
        <section id="About Me" className='firstSection'>
            <aside>
                <div className='introDiv'>
                    <h1>
                        I am Ayodeji Ogundeji,<br />
                        a web developer who execute ideas into reality
                    </h1>
                    <h3>
                        Hi, i am a front end developer, creating good UI/UX experience, versatile codes, with loads of skills and quality attached within. Seeking opportunity to showcase skills.
                    </h3>
                </div>

                <div className='socialLinks'>
                    <h4>Check me on :</h4>
                    <a href="https://github.com/AYOPELUMI" target="_blank"><TbBrandGithubFilled className='gitIcon icon' /> </a>
                </div>
            </aside>
            <aside>
                <div className="imgCtnr">
                    <img src={ProfilePic} alt="Profile Picture" />
                </div>
                    <div className="hexagon"></div>
            </aside>
        </section>
    )
}
