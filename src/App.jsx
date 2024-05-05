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



function App() {
  const [height,setHeight] = useState(false)
  const [nameCtnrHeight, setNameCtnrHeight] = useState("ab")

  function updateHeight(args){
    console.log({args})
      setHeight(true)
  }
  useEffect(() => {
    setNameCtnrHeight(document.querySelector(".nameCtnr").clientHeight)
    const handleResize = () => {
      // Perform actions on window resize
      console.log("i am here")
      setNameCtnrHeight(document.querySelector(".nameCtnr").clientHeight)
    };
    window.addEventListener('resize', handleResize);
    window.addEventListener("load", handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('load',handleResize)
    };
  }, [])

  return (
    <ThemeContextWrapper>
        <Header />
        <TopSection updateHeight={updateHeight} nameCtnrHeight={nameCtnrHeight}/>
        <FirstSection />
        <FourthSection />
        <ThirdSection />
        <SecondSection />
        <MyResume />
        <SideMenu startIconAnim={height} />
        <Footer />
    </ThemeContextWrapper>
  )
}

export default App
