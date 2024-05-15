import React ,{useState}from 'react'
import { PiDevicesFill } from "react-icons/pi";
import { RiPencilRuler2Fill } from "react-icons/ri";
import { AnimateComponent } from '../AnimateComponent/AnimateComponent';
import "./SecondSection.scss"
import "./Responsive.scss"
import image from "../../Images/UI-Research.png"

export const SecondSection = () => {
    const [accordionState, setAcordionState] = useState([false,false,false])
    const handleClick = (event) => {
        event.preventDefault()
        console.log({event})
        console.log(event.target.dataset.attribute)
        let attribute = event.target.dataset.attribute != undefined? event.target.dataset.attribute : event.target.parentNode.dataset.attribute != undefined ? event.target.parentNode.dataset.attribute : event.target.parentNode.parentNode.dataset.attribute != undefined ? event.target.parentNode.parentNode.dataset.attribute : event.target.parentNode.parentNode.parentNode.dataset.attribute;
        let accordionClone = [...accordionState]
        console.log({attribute})
        let element = [...document.querySelectorAll('.accordion')].findIndex((value) => {return value.dataset.attribute == attribute})

        console.log(element)
        if (accordionState[element] == true){
            accordionClone[element] = false
            setAcordionState(accordionClone)
        }
        else{
            accordionClone[element] = true
            setAcordionState(accordionClone)
        }
        

      console.log(event.target)
    }
    console.log(accordionState)
    

    return (
        <AnimateComponent id="Services" className='secondSection'
            component={
                <>
                    <div className="sticky"> What I Do</div>
                    <div className='serviceHeading'>
                        <h1>What I Do</h1>
                        <p>I design web apps, breathing life into ideas with frameworks.My passion lies in optimizing codes, good UI&UX experience From idea to launch, i cultivate all ideas into reality</p>
                    </div>
                    <ul className='list'>
                            <li className="accordion" data-attribute={`data-accordion-1`} onClick={handleClick}> 
                                <div className="accordionHeader" >
                                    <div className="icon">
                                        <PiDevicesFill />
                                    </div>
                                    <h4>
                                        WEB DEVELOPMENT 
                                    </h4> 
                                    <div className= {accordionState[0]? " active iconPlus": "iconPlus"}>
                                        <span></span>
                                        <span></span>
                                    </div> 

                                </div>
                                <p className= {accordionState[0]? " openHeight accordionContent" : "accordionContent"}> 
                                    Building apps using HTML, CSS, and JavaScript with pre-processors, Geting the desired functionalities to work on websites
                                    and apps has been my drive while maintaining a semantic, modular code base.
                                </p>
                            </li>
                            <li className="accordion" data-attribute={`data-accordion-2`} onClick={handleClick}> 
                                <div className="accordionHeader">
                                <div className="icon">
                                    <RiPencilRuler2Fill />
                                </div>
                                    <h4>
                                        UI/VISUAL DESIGN 
                                    </h4>
                                <div  className= {accordionState[1]? " active iconPlus": "iconPlus"}>
                                        <span></span>
                                        <span></span>
                                    </div> 
                                </div>
                                <p className={accordionState[1]? " openHeight accordionContent" : "accordionContent"}>
                                    I have a passion to develop and implement responsive and pleasing interfaces 
                                    for websites and apps that adapt to any type of device, platform, or browser in use.
                                </p>
                            </li>
                            <li className="accordion" data-attribute={`data-accordion-3`} onClick={handleClick}> 
                                <div className="accordionHeader">
                                    <div className='icon'>
                                    
                                    </div>
                                    <h4> 
                                        UX DESIGN/RESEARCH
                                    </h4>
                                    <div  className= {accordionState[2]? " active iconPlus": "iconPlus"}>
                                        <span></span>
                                        <span></span>
                                    </div> 

                                </div>
                                <p className={accordionState[2]? " openHeight accordionContent" : "accordionContent"}>
                                    Design isn't just what a product looks.Design covers 
                                    the functionality of a product and the user experience.
                                    I love to design interfaces and experiences that people can enjoy on all digital medium.                        </p>
                            </li>
                    </ul>
                </>}
            >
        </AnimateComponent>
    )
}

