import {useState, useEffect}from 'react'
import { ThemeComponent } from '../ThemeComponent/ThemeComponent'
import {IoMdMenu} from "react-icons/io"
import anime from "animejs"
import "./Header.scss"
import "./Reponsive.scss"

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const [section2, setSection2] = useState("")
    const links =["About Me","Skills","Recent Projects","Services"]

    // Animation
const animation = anime({
    targets: ".header",
    opacity:1,
    duration: 4000,
    autoplay: false,
  });
  
   useEffect(()=>{ 
        setSection2(document.querySelector(".firstSection"))

        const handleEvent = () => {
            // Perform actions on window resize
            console.log("i am here")

          };
          window.addEventListener("scroll", handleEvent);
          return () => {
            window.removeEventListener('scroll', handleEvent);
          };
    },[])
  // Animate on scroll
  const animateOnScroll = function (div, speed=100, offset=200) {
    const scrollPercent = (window.scrollY - div.offsetTop)*1000;
    console.log("scroll difference" +scrollPercent)
    console.log("% value is " +(scrollPercent + offset) / speed)
    return (scrollPercent + offset) / speed;

  };
  
  // Scroll listener
  window.onscroll = function () {
    animation.seek(animateOnScroll(section2, 1000, 200) * animation.duration);
  };
  // window.onload = function () {
  //   animation.seek(animateOnScroll(section2, 1000, 200) * animation.duration);
  // };

    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }

    return (
        <header className="header">
            <div className="logo">
            Ayodeji Pelumi
            </div>
            <ul className= {toggleMenu ? "active" : undefined}>
            {links.map((value, index) => {
                return <li key={`link ${index}`} className="headerMenu">
                <a href={`#${value}`}>
                {value}
                </a>
                </li>
            })
            }
            <a href="#footer"className="headerBtn mobile">Hire Me</a>
            </ul>
            <div className='menuDiv'>
                <ThemeComponent />
                <IoMdMenu  className= "menuIcon" onClick={handleToggle}/>
                <a className='headerBtn' href='#footer'>Hire Me</a>            
            </div>
            
        </header>
    )
}

