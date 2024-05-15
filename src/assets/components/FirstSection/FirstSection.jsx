import { useEffect, useRef, useState } from "react"
import ProfilePic from "../../Images/profile-pic.png"
import { motion, useInView, useAnimation } from "framer-motion"
import { AnimateComponent } from "../AnimateComponent/AnimateComponent"
import { UseIsVisible } from "../UseIsVisible/UseIsVisibile"
import "./FirstSection.scss"
import "./Reponsive.scss"

export const FirstSection = () => {

    const ref = useRef()
    const isInView = useInView(ref, {once:"true"})

    const aside={
        visible: {
            opacity: 1,
            transition: {
              when: "beforeChildren",
              staggerChildren: 0.7,
            },
          },
          hidden: {
            opacity: 0,
            transition: {
              when: "afterChildren",
            },
          },
    }
    const children = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: -100 },
      }

const controlAnimation = useAnimation();

      useEffect(()=>{
          if(isInView){
              console.log({isInView})
              controlAnimation.start("visible")
          }
      },[isInView])

    return (
        <AnimateComponent id="About Me" className='firstSection'
            component={
                <>
                    <div className="sticky">About Me</div>
                    <motion.aside
                        variants={aside}
                        initial="hidden"
                        animate={controlAnimation}
                        transition={{duration:0.5, delay:.5}}
                    >
                        <motion.div 
                            variants={children}
                            className='introDiv'>
                            <motion.h1 
                                variants={children}>
                                I am Ayodeji Ogundeji,
                            </motion.h1>
                            <motion.span 
                            ref={ref}
                                variants={children}>
                                a web developer who execute ideas into reality
                            </motion.span>
                            <motion.p 
                                variants={children}>
                                a <span className="specialChar">front end developer</span>, creating good <span className="specialChar">UI/UX experience</span>, versatile codes, with loads of skills and quality attached within. Seeking opportunity to showcase skills. My interest in web development started in 2021 when I was amazed by the single page which i playfully created a single page form which taught me about HTML & CSS! Ever since I have experience developing and designing applications for the web, from landing pages to progressive web applications(PWA).
                            </motion.p> 
                            <motion.p 
                                variants={children}>
                                I emphasize on creating applications that not only runs efficiently, but also create an intuitive user experiences. Learning new and better ways to create modern user experiences with clean, efficient and scalable code. I consider working as a progressive step in learning, and I'm up for grab to work with those who are experienced and also willing to share their knowledge & experience with me.
                            </motion.p>
                            <motion.p
                                variants={children}> 
                                At the end of the day,<span className="specialChar"> my primary goal is live, learn and level up </span>with newest knowledge to create something unique.I have created several <a href="#Recent Projects" className="specialChar">projects</a>
                            </motion.p>
                        </motion.div>
                    </motion.aside>
                    <motion.aside 
                        variants={aside}
                        initial="hidden"
                        animate="visible"
                        className="pictureCtnr"
                        transition={{duration:0.5, delay:0.25}}>
                        <motion.div 
                            variants={children}
                            className="imgCtnr">
                            <img src={ProfilePic} alt="Profile Picture" />
                        </motion.div>
                    </motion.aside>
                </>}>
        </AnimateComponent>
    )
}
