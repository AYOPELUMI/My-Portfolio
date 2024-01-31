import React from 'react'
import "./SecondSection.scss"

export const SecondSection = () => {

    return (
        <section className='secondSection'>
            <div className='skllsHeading'>
                <h1>Services & Offer</h1>
                <h4>I design web apps, breathing life into ideas with frameworks.<br/>My passion lies in optimizing codes, good UI&UX experience<br/> From idea to launch, i cultivate all ideas into reality</h4>
            </div>
            <div className='cardCtnr'>
                <div className='card'>
                    card 1
                </div>
                <div className='card '>
                    card 2
                </div>
                <div className='card'>
                    card 3
                </div>
            </div>
        </section>
    )
}
