/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'

import {
  faAws,
  faDocker,
  faGitAlt,
  faGolang,
  faJsSquare,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'react-loaders'

import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const About = () => {
  const aboutArray = 'About Me'.split('')

  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I’m a passionate and results-driven Full Stack Developer with over 2+ years of experience in building user-friendly, scalable web applications. I have extensive hands-on experience with Python, Flask, React, HTML, and CSS, along with a solid understanding of modern frameworks, databases, and cloud technologies. I specialize in creating dynamic, high-performance websites and web applications that not only meet the technical requirements but also focus on providing seamless user experiences. In addition to my development skills, I am also proficient in SEO, digital marketing, and UI/UX design, blending creativity with technical problem-solving to develop comprehensive solutions.
          </p>
          <p>
           My passion for technology extends into the AI and Machine Learning space, where I’ve worked on projects like Emotion Detection and AI-driven chatbots to solve complex human-computer interaction challenges. I am also experienced in branding, having designed logos and visual identities for businesses to help them stand out in competitive markets. Here’s a summary of my skill set:<p> 1. Full Stack Development: Python, React, Flask, HTML, CSS <br /> 2. UI/UX Design: Prototyping, wireframing, and interactive design <br /> 3. SEO & Digital Marketing: Strategy, content optimization, and analytics<br /> 4. AI & ML: Emotion recognition models, data analysis, and predictive modeling <br /> 5. Branding & Logo Design: Creating visual identities for businesses</p>


          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faPython} color="#4B8BBE" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faAws} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faDocker} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faGolang} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
