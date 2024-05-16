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
    const [showHeader, setShowHeader] = useState(false)
    const [showMiniHeader, setShowMiniHeader] = useState(false)
    const links =["About Me","Skills","Recent Projects","What I Do", "Resume"]
    const ref =useRef()
    console.log({collapse},{showHeader})

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
      console.log(true)
      setCollapse(true)

    }
    else{
      console.log(false)
      setCollapse(false)
    }

  };

  	const handleToggleMenu =() =>{
		setToggleMenu(false)
	}
	function useOutsideClick(handleClose, ref) {
    const handleClick = useCallback((event) => {
    console.log(event.target)
    console.log({event})
    console.log("inside the callback",{toggleMenu})
	  if (toggleMenu == true && ref?.current?.contains && !ref.current.contains(event.target)) {
      console.log("not in the ref")
	    handleClose();
		}
    console.log(event.target.parentNode.className)
    if(event.target.parentNode.id != "toggle" && event.target.parentNode.className !="overlayMenu" && event.target.parentNode.className != "container active"  && event.target.className != "overlay open"){
    console.log("it is true")
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
          window.addEventListener("scroll", handleEvent);
          window.addEventListener("load", handleEvent);
        return () => {
            window.removeEventListener('scroll', handleEvent);
            window.removeEventListener('load', handleEvent);
          };
    },[section2,collapse,lastScrollPosition])
  // Animate on scroll


    const handleToggle = () =>{
      console.log("i am here")
      console.log(!toggleMenu)
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
      {
        collapse ? null :
          <header className={showHeader ? showMiniHeader ? "  miniHeader transparentHeader header": " transparentHeader header" : "header"}>
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

