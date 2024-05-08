import ProfilePic from "../../Images/profile-pic.png"

import "./FirstSection.scss"
import "./Reponsive.scss"

export const FirstSection = () => {
    
    
    return (
        <section id="About Me" className='firstSection'>
            <aside>
                <div className='introDiv'>
                    <h1>
                        I am Ayodeji Ogundeji,
                    </h1>
                    <span>
                        a web developer who execute ideas into reality
                    </span>
                    <p>
                        a <span className="specialChar">front end developer</span>, creating good <span className="specialChar">UI/UX experience</span>, versatile codes, with loads of skills and quality attached within. Seeking opportunity to showcase skills. My interest in web development started in 2021 when I was amazed by the single page which i playfully created a single page form which taught me about HTML & CSS! Ever since I have experience developing and designing app;ications for the web, from landing pages to progressive web applications(PWA).
                    </p> 
                    <p>
                        I emphasize on creating applications that not only runs efficiently, but also create an intuitive user experiences. Learning new and better ways to create modern user experiences with clean, efficient and scalable code. I consider working as a progressive step in learning, and I'm up for grab to work with those who are experienced and also willing to share their knowledge & experience with me.
                    </p>
                    <p> 
                        At the end of the day,<span className="specialChar"> my primary goal is live, learn and level up </span>with newest knowledge to create something unique.I have created several <a href="#Recent Projects" className="specialChar">projects</a>
                    </p>
                </div>
            </aside>
            <aside>
                <div className="imgCtnr">
                    <img src={ProfilePic} alt="Profile Picture" />
                </div>
            </aside>
        </section>
    )
}
