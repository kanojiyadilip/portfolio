import React from 'react'
import './Experience.css'
import { Fade } from 'react-reveal'
// import Section from '../section/Section'
import ExperienceCard from './ExperienceCard'
import experienceData from './experience.json'

const Experience = () => {
    return (
        // <div>
        //     <p style={{textAlign: "center", fontWeight: '700', fontSize: '30px'}}>Experience</p>
        // </div>

        <div>
        <div className="experience-content">
          <ul className="experience-list">
            {experienceData.experience.reverse().map((exp, key) => (
                <li key={key}>
                    <ExperienceCard experience={exp} />
                </li>
            //   <li key={`experience-${exp.company}`}>
            //     <Fade bottom duration={1000} distance="20px">
            //       <ExperienceCard experience={exp} />
            //     </Fade>
            //   </li>
            ))}
          </ul>
          <Fade bottom duration={1200} distance="20px">
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <p style={{ textAlign: 'center' }}>
                Further in-depth experience pre 2020 can be found on my{' '}
                <a
                  href="https://www.linkedin.com/in/mjigalin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    textDecoration: 'none',
                    color: '#0be779',
                    cursor: 'pointer',
                  }}
                >
                  LinkedIn
                </a>
                .
              </p>
            </div>
          </Fade>
        </div>
      </div>

    );
}

export default Experience;