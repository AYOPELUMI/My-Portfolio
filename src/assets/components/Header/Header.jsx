import React, {useState}from 'react'
import { ThemeComponent } from '../ThemeComponent/ThemeComponent'
import {Button} from "../Button/Button"
import {IoMdMenu} from "react-icons/io"
import "./Header.scss"
import "./Reponsive.scss"

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const links =["About Me","Recent Projects","Services","Skills",<Button displayWord="Hire Me" className="headerBtn"/>]

    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }

    return (
        <header>
            <div className="logoCtnr">
            Ayodeji<br />Pelumi
            </div>
            <ul className= {toggleMenu ? "active" : "headerMenuCtnr"}>
            {links.map((value, index) => {
               return  <li key={`link ${index}`} className="headerMenu">
                <a>
                {value}
                </a>
                </li>
            })}
            </ul>
            <ThemeComponent />
            <IoMdMenu  className= "menuIcon" onClick={handleToggle}/>
            <Button displayWord="Hire Me" className="headerBtn"/>
        </header>
    )
}

