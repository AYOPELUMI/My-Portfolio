import React, { useState } from 'react'
import {ThemeContext, themes} from "../../ThemeContext.js"
import { BsCircleHalf } from "react-icons/bs";

export const ThemeComponent = () => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <ThemeContext.Consumer>
        {({changeTheme}) =>(
            <i onClick={() => {
                setDarkMode(!darkMode)
                changeTheme(darkMode ? themes.light : themes.dark)
            }}
            ><BsCircleHalf className="themeIcon" />
        </i>
        )}
    </ThemeContext.Consumer> 
    )
}

