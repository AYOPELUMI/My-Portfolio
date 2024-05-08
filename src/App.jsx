import { useState, useEffect } from 'react'
import {ThemeContextWrapper} from "./assets/ThemeContextWrapper"
import { Header } from './assets/components/Header/Header'
import { FirstSection } from './assets/components/FirstSection/FirstSection'
import { SecondSection } from './assets/components/SecondSection/SecondSection'
import { ThirdSection } from './assets/components/ThirdSection/ThirdSection'
import { FourthSection } from './assets/components/FourthSection/FourthSection'
import { Footer } from './assets/components/Footer/Footer'
import {TopSection} from "./assets/components/TopSection/TopSection"
import {SideMenu} from "./assets/components/SideMenu/SideMenu"
import { MyResume } from './assets/components/MyResume/MyResume'
import './App.css'
import "./fonts.css"
import "./theme.css"
import "./App.scss"



function App() {
  const [height,setHeight] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [nameCtnrHeight, setNameCtnrHeight] = useState("ab")
  const [nameHeight, setNameHeight] = useState("")
  console.log({nameCtnrHeight})

  function updateHeight(args){
    console.log({args})
      setHeight(true)
  }

  function updateToggle(args){
    setToggle(args)
  }
  useEffect(() => {
    setNameCtnrHeight(document.querySelector(".nameCtnr").clientHeight)
    setNameHeight(document.querySelector(".name").offsetHeight)
    const handleResize = () => {
      // Perform actions on window resize
      console.log("i am here")
      setNameCtnrHeight(document.querySelector(".nameCtnr").clientHeight)
      console.log(document.querySelector(".nameCtnr").clientHeight)
      setNameHeight(document.querySelector(".name").offsetHeight)
    };


    window.addEventListener('resize',()=>{console.log("in the resize"); handleResize()});
    window.addEventListener("load",()=>{console.log("in the load"); handleResize()});
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load',handleResize)
    };
  }, [])

  return (
    <ThemeContextWrapper>
      <div className={toggle == true? "root" : "noscroll"}>
          
          <Header  updateToggle={updateToggle}/>
          <TopSection updateHeight={updateHeight} nameHeight={nameHeight} nameCtnrHeight={nameCtnrHeight}/>
          <FirstSection />
          <FourthSection />
          <ThirdSection />
          <SecondSection />
          <MyResume />
          <SideMenu startIconAnim={height} />
          <Footer />

      </div>
    </ThemeContextWrapper>
  )
}

export default App
