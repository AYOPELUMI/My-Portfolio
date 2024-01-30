import React, { useState } from 'react'
import {TbBrandGithubFilled, TbMailFilled} from "react-icons/tb"
import { RiLinkedinFill,RiWhatsappFill } from 'react-icons/ri'
import {FaTelegramPlane} from "react-icons/fa"
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

                </div>
                <div className ="btnCtnr">
                    <Button displayWord="Let's Talk" onClick={handleChatOption} />{
                        chatOptions ? <ul>
                            {chatLinks.map((value, index) => (
                           
                                <li key={`icon${index}`}> {value.name}{value.icon} </li>
    ))}
                        </ul> : null
                    }
                </div>
                <div className='socialLinks'>
                    <h4>Check me on</h4>
                    <TbBrandGithubFilled />
                    <RiLinkedinFill />
                </div>
            </aside>
            <aside>

            </aside>
        </section>
    )
}
