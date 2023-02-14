import About from 'components/About'
import Education from 'components/Education'
import Languages from 'components/Languages'
import Navigation from 'components/Navigation'
import Projects from 'components/Projects'
import Skills from 'components/Skills'
import Work from 'components/Work'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <div className='container mx-auto px-4 bg-base-100'>
        <Navigation></Navigation>
        <About id="about"></About>
        <Education id="education"></Education>
        <Work id="work"></Work>
        <Projects id="projects"></Projects>
        <Skills id="skills"></Skills>
        <Languages id="languages"></Languages>
      </div>
    </>
  )
}
