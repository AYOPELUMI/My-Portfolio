import {useState}from 'react'
import { ThemeComponent } from '../ThemeComponent/ThemeComponent'
import {IoMdMenu} from "react-icons/io"
import "./Header.scss"
import "./Reponsive.scss"

export const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const links =["About Me","Skills","Recent Projects","Services"]

    const handleToggle = () =>{
        setToggleMenu(!toggleMenu)
    }

    return (
        <header>
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
            <div className='menuDiv'>
                <ThemeComponent />
                <IoMdMenu  className= "menuIcon" onClick={handleToggle}/>
                <a className='headerBtn' href='#footer'>Hire Me</a>            
            </div>
            
        </header>
    )
}

