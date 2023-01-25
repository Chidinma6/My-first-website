/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import './about.css'
import ME from '../../assets/aesthetic.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className=".container about_container">

        <div className="about_me">
          <div className="about_me_image">
          <img src={ME} alt="About image" height= "auto" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            
          <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <small>3+ Years Experience</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon'/>
              <h5>Clients</h5>
              <small>upcoming number</small>

            </article>
            <article className='about_card'>
              <VscFolderLibrary className='about_icon'/>
              <h5>Project</h5>
              <small>4 projects</small>
            </article>
          </div>

          <p>
            I am a computer science student who is aspiring to be more specialized in the field 
            of web development, application development, Artificial Intelligence and Robotics. <br />
            This might seem like a lot, but the main field I dream of being in, is Robotics and AI.
            I have made simple websites and applications using HTML, CSS, JavaScript, React, Python and C#, which was an intersting work to do.
            I aspire to make better websites and applications in the future
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
      </div>

    </section>
  )
}

export default about