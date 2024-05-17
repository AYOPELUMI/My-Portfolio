import {useEffect, useState} from 'react'
import "./TopSection.scss"
import "./Responsive.scss"
import anime from "animejs"
 export const TopSection = (Props) => {
    const{
        updateHeight,
        nameCtnrHeight,
        nameHeight
    }= Props

    const animate = () =>{
        anime({
            targets: ".hrLine",
            width:"50%",
            duration: 1500,
            delay: 200,
            easing: "easeInBack",
            complete:  () => {updateHeight(true)}
        })

    }
    useEffect(()=>{
        if(Number(nameCtnrHeight)){
            animate()
        }    
    },[nameCtnrHeight, nameHeight])
    
    return (
        <section className="topSection">
            <div className='nameCtnr'>
                <h2 className="name">Ayodeji Ogundeji </h2>
            </div>
            <hr className='hrLine'/>
            <div className='positionCtnr'>
                <p className="position">FRONT END DEVELOPER</p>
            </div>
        </section>
    )
}


