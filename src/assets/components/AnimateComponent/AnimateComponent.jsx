import React , {useEffect, useRef, useState} from 'react'
import {motion, useInView, useAnimation} from "framer-motion"

export const AnimateComponent = (props) => {
    const {
        component,
        className,
        id,
        overflow
    } = props
    const width = "fit-content"
    const ref= useRef(null)
    const isInView = useInView(ref, {once:"true"})


    const controlAnimation = useAnimation();

    useEffect(()=>{
        if(isInView){
            controlAnimation.start("visible")
        }
    },[isInView])
    return (
        <div ref={ref} style={{position: "relative", width}}>
            <motion.section
            variants={{
                hidden: {opacity:0,y:75},
                visible: {opacity:1, y:0}
            }}
            initial="hidden"
            animate={controlAnimation}
            transition={{duration:0.5, delay:0.25}}
            className={className}
            id={id}>
                {component}
            </motion.section>  
        </div>
    )
}

