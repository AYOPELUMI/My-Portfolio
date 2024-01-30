import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ThemeContextWrapper} from "./assets/ThemeContextWrapper"
import { Header } from './assets/components/Header/Header'
import { FirstSection } from './assets/components/FirstSection/FirstSection'
import { SecondSection } from './assets/components/SecondSection/SecondSection'
import './App.css'
import "./fonts.css"

function App() {
  const [count, setCount] = useState(0)


  return (
    <ThemeContextWrapper>
        <Header />
        <FirstSection />
        <SecondSection />
    </ThemeContextWrapper>
  )
}

export default App
