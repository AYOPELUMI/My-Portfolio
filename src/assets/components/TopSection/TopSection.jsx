import {useEffect, useState} from 'react'
import "./TopSection.scss"
import anime from "animejs"
import { SideMenu } from '../SideMenu/SideMenu'

 export const TopSection = () => {
    const [startIconAnim, setStartIconAnim] = useState(false)
    const animate = () =>{
        anime({
            targets: ".line",
            width:600,
            duration: 4000,
            delay: 400,
            easing: "easeInBack",
            complete: () => animateLetters()
        })

    }
    const animateLetters = () => {
        anime({
            targets: '.name',
            keyframes: [

                {top: 390},
                {top: 423},
            ],
            duration:2000,
            delay:200,
            easing: "easeInBack",
        })

        anime({
            targets: ".position",
            keyframes:[
                {top: 130},
                {top: 103}
            ],
            duration: 2000,
            delay:200,
            easing: "easeInBack",
            complete: () => {setStartIconAnim(true)}

        })
    }
    useEffect(()=>{
        animate()
    },[])
    return (
        <div className="topSection">
            <div className='nameCtnr'>
                <h2 className="name">Ogundeji Oluwapelumi</h2>
            </div>
            <hr className='line'/>
            <div className='positionCtnr'>
                <p className="position">FRONT END DEVELOPER</p>
            </div>
            <SideMenu  startIconAnim={startIconAnim}/>
        </div>
    )
}


