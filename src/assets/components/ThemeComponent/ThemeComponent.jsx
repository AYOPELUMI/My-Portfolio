import React, { useState } from 'react'
import {ThemeContext, themes} from "../../ThemeContext.js"
import {RiMoonFill,RiSunFill} from "react-icons/ri"

export const ThemeComponent = () => {
    const [darkMode, setDarkMode] = useState(true)
    return (
        <ThemeContext.Consumer>
        {({changeTheme}) =>(
            <i onClick={() => {
                setDarkMode(!darkMode)
                changeTheme(darkMode ? themes.light : themes.dark)
            }}
            >{darkMode ? <RiSunFill className="themeIcon"> </RiSunFill> : <RiMoonFill className="themeIcon"></RiMoonFill>}
        </i>
        )}
    </ThemeContext.Consumer> 
    )
}

