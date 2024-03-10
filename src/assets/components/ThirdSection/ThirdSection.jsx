import {useState} from 'react'
import "./ThirdSection.scss"
import "./Reponsive.scss"

export const ThirdSection = () => {
    const[showMore, setShowMore] = useState(false)
    console.log({showMore})
  return (
    <section className='thirdSection'>
        <div className='cardCtnr'>
            <h4 className="heading">
                Recent Projects
            </h4>
            <div className=' card'>
                <div className="cardBg"></div>
                <img alt="Calculator" />
                <div className='front'>
                    <h4>Calculator</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-calculator.netlify.app/" target='_blank'>Check it out</a>
                </div>
            </div>
            <div className='card'>
                <div className="cardBg"></div>
                <img alt='Bill splitter'/>
                <div className='front'>
                    <h4>BilL Splitter</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-billsplitter.netlify.app/" target="_blank">Check it out </a>
                </div>
            </div>
            <div className='card'>
                <div className="cardBg"></div>
                <img alt="Atm form" />
                <div className='front'>
                    <h4>Atm Form</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-atmform.netlify.app/" target="_blank">Check it out</a>
                </div>
            </div>
            <div className=' card'>
                <div className="cardBg"></div>
                <img alt="Multi step form" />
                <div className='front'>
                    <h4>Multi Step Form</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-multistepform.netlify.app/" target='_blank'>Check it out</a>
                </div>
            </div>
            <div className='card card2'>
                <div className="cardBg"></div>
                <img alt='Invoice app'/>
                <div className='front'>
                    <h4>Invoice App</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-invoiceapp.netlify.app/" target="_blank"> Check it out</a>
                </div>
            </div>
            <div className='card card3'>
                <div className="cardBg"></div>
                <img  alt='Link sharing app'/>
                <div className='front'>
                    <h4>Link Sharing App</h4>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt a excepturi nesciunt modi quidem porro deleniti veniam ea inventore corrupti illum, alias eum laborum nihil nisi. Necessitatibus hic distinctio cumque.</p>
                    <a href="https://ayopelumi-linksharingapp.netlify.app/" target='_blank'>Check it out</a>
                </div>
            </div>
        </div>
        <div className='reponsiveFooter'>
            <p className={showMore ? "active" : "nothing" } onClick={() => setShowMore(!showMore)}>Click for more</p>
        </div>
    </section>
  )
}
