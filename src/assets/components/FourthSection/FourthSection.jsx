import React from 'react'
import { FaCheck } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { VscTools } from "react-icons/vsc";
import { AnimateComponent } from '../AnimateComponent/AnimateComponent';
import "./FourthSection.scss"
import "./Reponsive.scss"
const skillList=["HTML","CSS","JAVASCRIPT","SASS","TAILWIND CSS","REACT","NEXTJS","TYPESCRIPT","NodeJs","REDUX","FLUTTER"]

export const FourthSection = () => {
  return (
    <AnimateComponent className='fourthSection' id='Skills'
    component={
      <>
        <div className="sticky">Skills</div>
        <aside>
          <div className="topHeading">
              <h3> <IoSettingsOutline />Skills</h3>
              <p>As a front end developer, I like to code things from scratch, and enjoy bringing ideas to life in any digital medium.</p>
          </div>
          <div className='skillSection'>
              <h1>Core Technologies</h1>
              <ul >
                  {skillList.map((item, index) =>{
                    return <li key={`key-${index}`}>
                          <h4>{item}</h4>
                      </li>
                  })}
              </ul>
          </div>
        </aside>
        <aside>
          <div className='tools'>
              <h4> <VscTools /> Dev Tools</h4>
              <p> <FaCheck/>Bootstrap</p>
              <p><FaCheck/>Git + Github</p>
              <p><FaCheck/>Command Line</p>
              <p><FaCheck/>Netlify</p>
              <p><FaCheck/>Chrome DevTools</p>
              <p><FaCheck/>VSCode</p>
          </div>
        </aside>
      </>}>
    </AnimateComponent>
  )
}

