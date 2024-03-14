import React from 'react'
import { FaCode } from "react-icons/fa6";
import "./FourthSection.scss"
import "./Reponsive.scss"
const skillList=["HTML","CSS","JAVASCRIPT","SASS","TAILWIND CSS","REACT","NEXTJS","TYPESCRIPT"]

export const FourthSection = () => {
  return (
    <section className='fourthSection' id='Skills'>
      <aside>
        <div className="topHeading">
            <h3>Skills & Experience</h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex suscipit laborum optio dicta cupiditate illo, sit perspiciatis commodi ducimus nihil facere, eum corrupti dolores fugiat totam a nesciunt, consectetur cum.</p>
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
        <div className='heading'>
            <FaCode className='logo'/>
            <h3>Front End Developer</h3>
            <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
        </div>
        <h4 className='lang'><span>Languages I speak:</span><br />HTML, CSS, Sass, Git</h4>
        <div className='tools'>
            <h4>Dev Tools</h4>
            <p>Bootstrap</p>
            <p>Git</p>
            <p>Github</p>
            <p>Netlify</p>
            <p>VSCode</p>
        </div>
      </aside>
    </section>
  )
}

