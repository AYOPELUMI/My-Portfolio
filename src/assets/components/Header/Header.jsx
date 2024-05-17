/* eslint-disable no-mixed-spaces-and-tabs */
import {useState, useEffect, useRef,useCallback}from 'react'
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
    const [showHeader, setShowHeader] = useState(true)
    const [showMiniHeader, setShowMiniHeader] = useState(false)
    const links =["About Me","Skills","Recent Projects","What I Do", "Resume"]
    const ref =useRef()

  const handleEvent = () => {
    if (window.scrollY === 0) {
      setShowMiniHeader(true)
    }
    if (window.scrollY >=15) {
      setShowMiniHeader(false)
    }

    if (window.scrollY >= section2.scrollHeight){
      setShowHeader(false)
    }
    if(window.scrollY < section2.scrollHeight){
      setShowHeader(true)
    }
    setLastScrollPosition(window.scrollY)
    if (lastScrollPosition < window.scrollY){
      setCollapse(true)

    }
    else{
      setCollapse(false)
    }

  };

  	const handleToggleMenu =() =>{
		setToggleMenu(false)
	}
	function useOutsideClick(handleClose, ref) {
    const handleClick = useCallback((event) => {
	  if (toggleMenu == true && ref?.current?.contains && !ref.current.contains(event.target)) {
	    handleClose();
		}
    if(event.target.parentNode.id != "toggle" && event.target.parentNode.className !="overlayMenu" && event.target.parentNode.className != "container active"  && event.target.className != "overlay open"){
    handleClose();
    }
		},[handleClose, ref])
    useEffect(() => {
		  document.addEventListener("mouseup", handleClick)
		  return () => { document.removeEventListener("mouseup", handleClick); }
		}, [])

    }
    useOutsideClick(handleToggleMenu, ref);

   useEffect(()=>{ 
        setSection2(document.querySelector(".firstSection"))
          window.addEventListener("scroll", function (){handleEvent();});
          document.addEventListener("DOMContentLoaded", function (){console.log("this is load");handleEvent();});
        return () => {
            window.removeEventListener('scroll', handleEvent);
            document.removeEventListener('DOMContentLoaded', handleEvent);
          };
    },[section2,collapse,lastScrollPosition])
  // Animate on scroll


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
      <div id="toggle"  className= {toggleMenu ?"container active" : "container"}>
          <span onClick={handleToggle} className="line top"></span>
          <span onClick={handleToggle} className="line middle"></span>
          <span onClick={handleToggle} className="line bottom"></span>
      </div>
    {toggleMenu && (
      <div  className={toggleMenu ? "overlay open" : "overlay" }>
      <div className="logo">
              Ayodeji<br /> Pelumi
      </div>
        <nav ref={ref} className='overlayMenu'>
        <ul className= "menuCtnr">
              {links.map((value, index) => {
                  return <li key={`link ${index}`} className="menuItem">
                  <a onClick={handleToggle} href={`#${value}`}>
                  {value}
                  </a>
                  </li>
              })
              }
              
              <a href="#footer"className="menuBtn mobile menuItem">Hire Me</a>
              </ul>
        </nav>
      </div>)}
        <header className={ collapse ? "noHeader transparentHeader" : showHeader ? showMiniHeader ? "  miniHeader transparentHeader header": " transparentHeader header" : undefined}>
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
    </>
    )
}

