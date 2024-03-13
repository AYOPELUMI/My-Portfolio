import {TbBrandGithubFilled} from "react-icons/tb"
import { RiLinkedinFill } from 'react-icons/ri'

import "./FirstSection.scss"
import "./Reponsive.scss"

export const FirstSection = () => {
    
    
    return (
        <section className='firstSection'>
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
                    <TbBrandGithubFilled className='gitIcon icon' />
                    <RiLinkedinFill className='linkedIcon icon'/>
                </div>
            </aside>
            <aside>
                    <div className="hexagon"></div>
            </aside>
        </section>
    )
}
