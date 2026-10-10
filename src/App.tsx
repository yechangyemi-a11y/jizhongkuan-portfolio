import { About } from './components/About'
import { Capabilities } from './components/Capabilities'
import { Contact } from './components/Contact'
import { Hero } from './components/Hero'
import { ProjectGrid } from './components/ProjectGrid'
import { QinghongChef } from './components/QinghongChef'
import { Services } from './components/Services'

export function App() {
  return (
    <main id="top">
      <Hero />
      <About />
      <Services />
      <ProjectGrid />
      <QinghongChef />
      <Capabilities />
      <Contact />
    </main>
  )
}
