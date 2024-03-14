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
            link:"https://wa.me/+2348111206206?text=Hello", 
            icon:<RiWhatsappFill />
        },
        {
            link:"mailto:atopelumi2014@gmail.com?aubject=Hello",
            icon:<TbMailFilled />
        },
        {
            link:"https://github.com/AYOPELUMI",
            icon :<TbBrandGithubFilled />
        }
    ]

    const handleChatOption = () => {
      setChatOptions(!chatOptions)
    }
  return (
    <div id="footer" className='footer'>
      <div className='topContent'>
        <h3>Start a project</h3>
        <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
        <a  href="mailto:ayopelumi4@gmail.com?subject=Hello" className="chatBtn">Let's Talk <TiLocationArrowOutline /></a>
      </div>

      <div>
        <div className="logo">
            Ayodeji<br />Pelumi
        </div>
        <h2>Live, learn, & level up everyday.<span>- life Motto</span></h2>
        <h2 className="contact">Contact Me :</h2>
        <ul className='chatOptionsCtnr'>
            {chatLinks.map((value, index) => (
                <li key={`icon${index}`} className='chatOptions'> 
                    <a href={value.link} target='_blank' >{value.icon}</a>
                </li>
            ))}
        </ul>
      </div>
    </div>
  )
}