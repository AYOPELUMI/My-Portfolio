import { useState } from 'react'
import {TbBrandGithubFilled, TbMailFilled} from "react-icons/tb"
import { RiLinkedinFill,RiWhatsappFill } from 'react-icons/ri'
import {FaTelegramPlane} from "react-icons/fa"
import {TiLocationArrowOutline} from "react-icons/ti"
import "./FirstSection.scss"
import { Button } from '../Button/Button'

export const FirstSection = () => {
    const [chatOptions, setChatOptions] = useState(false)
    const chatLinks =[
        {
            name:"whatsApp",
            icon:<RiWhatsappFill />
        },
        {
            name:"Email",
            icon:<TbMailFilled />
        },
        {
            name:"Telegram",
            icon:<FaTelegramPlane />
        }
    ]

    const handleChatOption = () => {
      setChatOptions(!chatOptions)
    }
    
    return (
        <section className='firstSection'>
            <aside>
                <div className='introDiv'>
                    <h1>
                        We  breath design <br/>
                        We execute ideas
                    </h1>
                    <h3>
                        Hi, i am an front end developer, creating good UI/UX experience,<br /> versatile codes
                    </h3>
                </div>
                <div className ="btnCtnr">
                    <Button className="chatBtn" displayWord={<><p>Let's Talk</p> <TiLocationArrowOutline /> </>} onClick={handleChatOption} />{
                        chatOptions ? <ul className='chatOptionsCtnr'>
                            {chatLinks.map((value, index) => (
                           
                                <li key={`icon${index}`} className='chatOptions'> 
                                    <p>{value.name}</p>
                                    {value.icon}
                                </li>
    ))}
                        </ul> : null
                    }
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
