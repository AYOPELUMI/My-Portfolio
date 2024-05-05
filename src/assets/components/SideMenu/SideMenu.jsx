import React from 'react'
import {TbBrandGithubFilled} from "react-icons/tb"
import{RiLinkedinFill } from "react-icons/ri"
import "./SideMenu.scss"
import anime from "animejs"
export const SideMenu = (props) => {
    const{
        // eslint-disable-next-line no-unused-vars, react/prop-types
        startIconAnim
    } = props
    console.log({startIconAnim})
    if (startIconAnim == true){
        anime({
            targets: '.target',
              translateX: 0,
              duration: 4000,
              delay: anime.stagger(1000, {easing: 'easeOutElastic(1, .6)'}),
          });
    }

    return (
        <div className='sideMenu'>
            <a  className='icon target' href="https://github.com/AYOPELUMI" target="_blank"><TbBrandGithubFilled /> </a>
            < a className='icon target' href="https://github.com/AYOPELUMI" target="_blank"><RiLinkedinFill /></a>
            <hr className="target" />
        </div>
    )
}

