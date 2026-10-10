import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { ProjectGrid } from './components/ProjectGrid'
import { QinghongChef } from './components/QinghongChef'
import { Services } from './components/Services'

export function App() {
  const [paused, setPaused] = useState(false)
  return (
    <main id="top" data-motion={paused ? 'paused' : 'running'}>
      <PageMotion paused={paused} />
      <Hero onMotionChange={setPaused} />
      <About />
      <Services />
      <ProjectGrid />
      <QinghongChef />
      <Capabilities />
      <Contact />
    </main>
  )
}
import { useState } from 'react'
import { PageMotion } from './components/PageMotion'
