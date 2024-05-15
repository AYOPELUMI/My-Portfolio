import {useState} from 'react'
import "./ThirdSection.scss"
import "./Reponsive.scss"
import calculator from "../../Images/Calculator.png"
import invoice_app from "../../Images/Inovice-app.png"
import bill_splitter from "../../Images/bil-splitter.png"
import multi_step_form from "../../Images/multi-step-form.png"
import atm_form from "../../Images/atm-form.png"
import timer_counter from "../../Images/timer-counter.png"
import REST_Countries from "../../Images/REST-Countries.png"
import { AnimateComponent } from '../AnimateComponent/AnimateComponent';

export const ThirdSection = () => {
    const[showMore, setShowMore] = useState(false)


    const handleToggle =() => {
         setShowMore(!showMore)
    }
    console.log({showMore})
  return (
    <AnimateComponent id="Recent Projects"className={showMore? 'thirdSection active' :'thirdSection' }
       component={
            <>
                <div className="sticky">Recent Projects</div>
                <div className="cardCtnr">
                    <h4 className="heading">
                        Recent Projects
                    </h4>
                    <div className='card'>
                        <img alt='Invoice app' src={invoice_app}/>
                        <div className='front'>
                            <h4>Invoice App</h4>
                            <p>A web responsive app for sending invoice(s) to your client across the world infused with databse of profiles with APIs.
                                <br />Product of react- routers 
                            </p>
                            <a href="https://ayopelumi-invoiceapp.netlify.app/" target="_blank" rel="noopener noreferrer"> EXPLORE</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="cardBg"></div>
                        <img alt='Bill splitter' src={bill_splitter}/>
                        <div className='front'>
                            <h4>BilL Splitter</h4>
                            <p>A responsive web app for calculating and sharing bills among friends,family and others, user friendly app</p>
                            <a href="https://ayopelumi-billsplitter.netlify.app/" target="_blank" rel="noopener noreferrer">EXPLORE</a>
                        </div>
                    </div>
                    <div className=' card'>
                        <div className="cardBg"></div>
                        <img alt="Calculator" src={calculator}/>
                        <div className='front'>
                            <h4>Calculator</h4>
                            <p>Web App that does calculations but with more simplification with self-built libraries to aid the calculation.</p>
                            <a href="https://ayopelumi-calculator.netlify.app/" rel="noopener noreferrer" target='_blank'>EXPLORE</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="cardBg"></div>
                        <img alt="Atm form" src={atm_form} />
                        <div className='front'>
                            <h4>Atm Form</h4>
                            <p>A responsive web app form for atm application form design. Worked with animation and transition to improve friendly user experience.</p>
                            <a href="https://ayopelumi-atmform.netlify.app/" target="_blank" rel="noopener noreferrer">EXPLORE</a>
                        </div>
                    </div>
                    <div className=' card'>
                        <div className="cardBg"></div>
                        <img alt="Multi step form" src={multi_step_form}/>
                        <div className='front'>
                            <h4>Multi Step Form</h4>
                            <p>Web Responsive app for subscription form template for a year & monthly basis.</p>
                            <a href="https://ayopelumi-multistepform.netlify.app/" target='_blank' rel="noopener noreferrer">EXPLORE</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="cardBg"></div>
                        <img src={REST_Countries} alt='REST Countries App'/>
                        <div className='front'>
                            <h4>REST Countries App</h4>
                            <p> A sorted Web responsive App made with Next JS & Typescript (firstly with vanilla then react) for viewing basic information about countries around the world.</p>
                            <a href="https://ayopelumi-rest-countries.netlify.app/" target='_blank' rel="noopener noreferrer">EXPLORE</a>
                        </div>
                    </div>
                    <div className='card'>
                        <div className="cardBg"></div>
                        <img  alt='Time Counter' src={timer_counter}/>
                        <div className='front'>
                            <h4>Time Counter</h4>
                            <p>A web responsive timer for achieving goals, duties, project on a short time basis.</p>
                            <a href="https://ayopelumi-timecounter.netlify.app/" target='_blank' rel="noopener noreferrer">EXPLORE</a>
                        </div>
                    </div>
                </div>
                <div className='reponsiveFooter'>
                    <p onClick={handleToggle}>Click {showMore ? "for less" : "for more"}</p>
                </div>
            </>}
        >
    </AnimateComponent>
  )
}
