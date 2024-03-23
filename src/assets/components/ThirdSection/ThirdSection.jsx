import {useState} from 'react'
import "./ThirdSection.scss"
import "./Reponsive.scss"
import calculator from "../../Images/Calculator.png"
import invoice_app from "../../Images/Inovice-app.png"
import bill_splitter from "../../Images/bil-splitter.png"
import multi_step_form from "../../Images/multi-step-form.png"
import atm_form from "../../Images/atm-form.png"
import timer_counter from "../../Images/timer-counter.png"

export const ThirdSection = () => {
    const[showMore, setShowMore] = useState(false)


    const handleToggle =() => {
         setShowMore(!showMore)
    }
    console.log({showMore})
  return (
    <section id="Recent Projects"className={showMore? 'thirdSection active' :'thirdSection'}>
        <div className="cardCtnr">
            <h4 className="heading">
                Recent Projects
            </h4>
            <div className='card'>
                <div className="cardBg"></div>
                <img alt='Invoice app' src={invoice_app}/>
                <div className='front'>
                    <h4>Invoice App</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-invoiceapp.netlify.app/" target="_blank"> Check it out</a>
                </div>
            </div>
            <div className='card'>
                <div className="cardBg"></div>
                <img alt='Bill splitter' src={bill_splitter}/>
                <div className='front'>
                    <h4>BilL Splitter</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-billsplitter.netlify.app/" target="_blank">Check it out </a>
                </div>
            </div>
            <div className=' card'>
                <div className="cardBg"></div>
                <img alt="Calculator" src={calculator}/>
                <div className='front'>
                    <h4>Calculator</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-calculator.netlify.app/" target='_blank'>Check it out</a>
                </div>
            </div>
            <div className='card'>
                <div className="cardBg"></div>
                <img alt="Atm form" src={atm_form} />
                <div className='front'>
                    <h4>Atm Form</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-atmform.netlify.app/" target="_blank">Check it out</a>
                </div>
            </div>
            <div className=' card'>
                <div className="cardBg"></div>
                <img alt="Multi step form" src={multi_step_form}/>
                <div className='front'>
                    <h4>Multi Step Form</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-multistepform.netlify.app/" target='_blank'>Check it out</a>
                </div>
            </div>
            <div className='card'>
                <div className="cardBg"></div>
                <img  alt='Link sharing app'/>
                <div className='front'>
                    <h4>Link Sharing App</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-linksharingapp.netlify.app/" target='_blank'>Check it out</a>
                </div>
            </div>
            <div className='card'>
                <div className="cardBg"></div>
                <img  alt='Time Counter' src={timer_counter}/>
                <div className='front'>
                    <h4>Time Counter</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-timecounter.netlify.app/" target='_blank'>Check it out</a>
                </div>
            </div>
        </div>
        <div className='reponsiveFooter'>
            <p onClick={handleToggle}>Click {showMore ? "for less" : "for more"}</p>
        </div>
    </section>
  )
}
