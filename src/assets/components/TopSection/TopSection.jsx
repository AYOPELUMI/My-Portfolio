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
    console.log(nameCtnrHeight)

    const animate = () =>{
        anime({
            targets: ".hrLine",
            width:"50%",
            duration: 1500,
            delay: 200,
            easing: "easeInBack",
            complete: () => animateLetters()
        })

    }
    const animateLetters = () => {
        if (Number.isInteger(nameCtnrHeight)){
            anime({
                targets: '.name',
                keyframes: [
    
                    {top: nameCtnrHeight - 110},
                    {top: nameCtnrHeight-nameHeight},
                ],
                duration:1500,
                delay:200,
                easing: "easeInBack",
            })
    
            anime({
                targets: ".position",
                keyframes:[
                    {top: 135},
                    {top: 103}
                ],
                duration: 1500,
                delay:200,
                easing: "easeInBack",
                endDelay:100,
                complete: () => {updateHeight(true)}
    
            })
        }

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


