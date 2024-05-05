import {useEffect} from 'react'
import "./TopSection.scss"
import anime from "animejs"
 export const TopSection = (Props) => {
    const{
        updateHeight,
        nameCtnrHeight
    }= Props

    console.log(nameCtnrHeight)

    const animate = () =>{
        anime({
            targets: ".line",
            width:"50%",
            duration: 4000,
            delay: 400,
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
                    {top: nameCtnrHeight-79},
                ],
                duration:2000,
                delay:200,
                easing: "easeInBack",
            })
    
            anime({
                targets: ".position",
                keyframes:[
                    {top: 145},
                    {top: 123}
                ],
                duration: 2000,
                delay:200,
                easing: "easeInBack",
                endDelay:400,
                complete: () => {updateHeight(true)}
    
            })
        }

    }
    useEffect(()=>{
        if(Number(nameCtnrHeight)){
            animate()
        }    

    },[nameCtnrHeight])
    
    return (
        <div className="topSection">
            <div className='nameCtnr'>
                <h2 className="name">Ogundeji Oluwapelumi</h2>
            </div>
            <hr className='line'/>
            <div className='positionCtnr'>
                <p className="position">FRONT END DEVELOPER</p>
            </div>
        </div>
    )
}


