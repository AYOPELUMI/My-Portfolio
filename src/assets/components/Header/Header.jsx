import {useState, useEffect}from 'react'
import { ThemeComponent } from '../ThemeComponent/ThemeComponent'
import {IoMdMenu} from "react-icons/io"
import anime from "animejs"
import "./Header.scss"
import "./Reponsive.scss"

export const Header = (props) => {
  const {
    updateToggle
  } = props
    const [toggleMenu, setToggleMenu] = useState(false)
    const [section2, setSection2] = useState("")
    const [collapse, setCollapse] = useState(false)
    const [lastScrollPosition, setLastScrollPosition] = useState(0)
    const links =["About Me","Skills","Recent Projects","Services"]

  const handleEvent = () => {
    console.log("i am here")
    animateOnScroll(section2)
    setLastScrollPosition(window.scrollY)
    if (lastScrollPosition < window.scrollY){
      setCollapse(true)
    }
    else{
      setCollapse(false)
    }

  };
   useEffect(()=>{ 
        setSection2(document.querySelector(".firstSection"))
          window.addEventListener("scroll", handleEvent);
          window.addEventListener("load", handleEvent);
          return () => {
            window.removeEventListener('scroll', handleEvent);
            window.removeEventListener('load', handleEvent);

          };
    },[section2,collapse,lastScrollPosition])
  // Animate on scroll
  const animateOnScroll = function (div) {
    if (window.scrollY >= div.offsetTop){
      anime({
        targets: ".header",
        opacity:1,
        visibility:"visible",
        duration:100,

      });
    }
    else{
      anime({
        targets: ".header",
        opacity:0,
        visibility:"hidden",
        duration:100,

      })
    }

  }

    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
        updateToggle(!toggleMenu)
    }
    if(toggleMenu){
    // let body=  document.getElementsByTagName("body")[0]
    document.body.className = "noscroll"
      
    }
    else{
      // let body=  document.getElementsByTagName("body")[0]
      document.body.className = ""
    }
    return (
      <>
      {collapse ? null :
      <div id="toggle" onClick={handleToggle} className= {toggleMenu ?"container active" : "container"}>
          <span className="line top"></span>
          <span className="line middle"></span>
          <span className="line bottom"></span>
      </div>
}
      <div className={toggleMenu ? "overlay open" : "overlay" }>
      <div className="logo">
              Ayodeji<br /> Pelumi
      </div>
        <nav className='overlayMenu'>
        <ul className= "menuCtnr">
              {links.map((value, index) => {
                  return <li key={`link ${index}`} className="menuItem">
                  <a href={`#${value}`}>
                  {value}
                  </a>
                  </li>
              })
              }
              
              <a href="#footer"className="menuBtn mobile menuItem">Hire Me</a>
              </ul>
        </nav>
      </div>
      {
        collapse? null :
      
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
              <div id="toggle" onClick={handleToggle} className= {toggleMenu ?"container active" : "container"}> 
                <span className="line top"></span>
                <span className="line middle"></span>
                <span className="line bottom"></span>
              </div>
              <div className='menuDiv'>
                  <a className='headerBtn' href='#footer'>Hire Me</a>            
              </div>
              
          </header>
    }
      </>
    )
}

