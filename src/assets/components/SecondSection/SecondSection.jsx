import React from 'react'
import "./SecondSection.scss"
import "./Responsive.scss"

export const SecondSection = () => {

    return (
        <section className='secondSection'>
            <div className='serviceHeading'>
                <h1>Services & Offer</h1>
                <h4>I design web apps, breathing life into ideas with frameworks.My passion lies in optimizing codes, good UI&UX experience From idea to launch, i cultivate all ideas into reality</h4>
            </div>
                <ul className='list'>
                    <li> 1. WEB DEVELOPMENT</li>
                    <li>2. UI/VISUAL DESIGN</li>
                    <li>3. UX DESIGN/RESEARCH</li>

                </ul>
        </section>
    )
}
