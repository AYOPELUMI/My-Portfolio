import {TbBrandGithubFilled} from "react-icons/tb"
import { RiLinkedinFill } from 'react-icons/ri'

import "./FirstSection.scss"
import "./Reponsive.scss"

export const FirstSection = () => {
    
    
    return (
        <section id="About Me" className='firstSection'>
            <aside>
                <div className='introDiv'>
                    <h1>
                        We  breath design,
                        We execute ideas
                    </h1>
                    <h3>
                        Hi, i am a front end developer, creating good UI/UX experience, versatile codes
                    </h3>
                </div>

                <div className='socialLinks'>
                    <h4>Check me on :</h4>
                    <a nref="https://github.com/AYOPELUMI" target="_blank"><TbBrandGithubFilled className='gitIcon icon' /> </a>
                </div>
            </aside>
            <aside>
                    <div className="hexagon"></div>
            </aside>
        </section>
    )
}
