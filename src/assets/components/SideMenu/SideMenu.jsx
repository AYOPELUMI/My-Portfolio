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
    if (startIconAnim == true){
        anime({
            targets: '.target',
            translateY: -10,
            direction: 'linear',
            loop: false,
            delay: function(target, i, l=3) {
              return i * 100;
            },
            endDelay: function(target, i, l=3) {
              return (l - i) * 100;
            }
          });
    }


    return (
        <div className='sideMenu'>
            <TbBrandGithubFilled className='icon target'/>
            <RiLinkedinFill className='icon target'/>
            <hr className="target" />
        </div>
    )
}

