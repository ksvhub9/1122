import { useEffect, useState } from 'react'

import Loader from 'react-loaders'

import WordCloud from './wordcloud'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
         <p>
    I have a solid foundation in Full Stack Development, focusing on building robust and scalable web applications. My experience includes developing dynamic websites, implementing modern frameworks, and optimizing frontend and backend performance for seamless user experiences.
</p>
<p>
    My skill set spans across Python, React, Flask, HTML, CSS, UI/UX Design, SEO, Digital Marketing, AI & Machine Learning, and Branding & Logo Design. I’m dedicated to staying ahead of the curve in technology, continually refining my abilities to create innovative solutions that solve real-world problems and drive business growth.
</p>

        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
