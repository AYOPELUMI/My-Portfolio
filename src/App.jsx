import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {ThemeContextWrapper} from "./assets/ThemeContextWrapper"
import { Header } from './assets/components/Header/Header'
import { FirstSection } from './assets/components/FirstSection/FirstSection'
import './App.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <ThemeContextWrapper>
        <Header />
        <FirstSection />
    </ThemeContextWrapper>
  )
}

export default App
