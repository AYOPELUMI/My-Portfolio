import { useState } from 'react'
import {TbMailFilled, TbBrandGithubFilled} from "react-icons/tb"
import {RiWhatsappFill, RiLinkedinFill } from 'react-icons/ri'
import {FaTelegramPlane} from "react-icons/fa"
import {TiLocationArrowOutline} from "react-icons/ti"
import { Button } from '../Button/Button'
import "./Footer.scss"
import "./Responsive.scss"
export const Footer = () => {
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
        },
        {
            icon :<TbBrandGithubFilled />
        },
        {
            icon:<RiLinkedinFill />
        }
    ]

    const handleChatOption = () => {
      setChatOptions(!chatOptions)
    }
  return (
    <div className='footer'>
      <div className='topContent'>
        <h3>Start a project</h3>
        <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
        <div className ="btnCtnr">
            <Button className="chatBtn" displayWord={<><p>Let's Talk</p> <TiLocationArrowOutline /> </>} onClick={handleChatOption} />
        </div>
      </div>

      <div>
        <div className="logo">
            Ayodeji<br />Pelumi
        </div>
        <h2>Live, learn, & level up everyday.<br /><span>- life Motto</span></h2>
        <ul className='chatOptionsCtnr'>
            {chatLinks.map((value, index) => (
                <li key={`icon${index}`} className='chatOptions'> 
                    {value.icon}
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}