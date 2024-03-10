import { useState } from 'react'

import {ThemeContextWrapper} from "./assets/ThemeContextWrapper"
import { Header } from './assets/components/Header/Header'
import { FirstSection } from './assets/components/FirstSection/FirstSection'
import { SecondSection } from './assets/components/SecondSection/SecondSection'
import { ThirdSection } from './assets/components/ThirdSection/ThirdSection'
import './App.css'
import "./fonts.css"
import { FourthSection } from './assets/components/FourthSection/FourthSection'
import { Footer } from './assets/components/Footer/Footer'

function App() {
  const [count, setCount] = useState(0)


  return (
    <ThemeContextWrapper>
        <Header />
        <FirstSection />
        <FourthSection />
        <ThirdSection />
        <SecondSection />
        <Footer />
    </ThemeContextWrapper>
  )
}

export default App
