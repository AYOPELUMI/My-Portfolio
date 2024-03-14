import { useState } from 'react'
import {ThemeContext, themes} from "../../ThemeContext.js"
import { BsCircleHalf } from "react-icons/bs";
let localTheme = localStorage.getItem("theme")=="true" ? localStorage.getItem("theme") : false
export const ThemeComponent = () => {

    const [darkMode, setDarkMode] = useState(localTheme)

    console.log({localTheme})
    console.log({darkMode})
    return (
        <ThemeContext.Consumer>
        {({changeTheme}) =>(
            <i><BsCircleHalf className="themeIcon" onClick={() => {
                setDarkMode(!darkMode)
                localStorage.setItem("theme",!darkMode)
                changeTheme(!darkMode ? themes.light : themes.dark)
            }}/>
        </i>
        )}
    </ThemeContext.Consumer> 
    )
}

