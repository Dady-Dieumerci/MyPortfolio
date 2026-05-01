import './index.css'
/* 
import {Navbar} from './components/navbar/nav' */
import { About } from './assets/components/about'
import { HeroSection } from './assets/components/navbar/heroSection'
import { Projects } from './assets/components/projects'
import { Contact } from './assets/components/contact'
import {Footer } from './assets/components/footer'

function App() {
 

  return (
    <div>
     
      <HeroSection/>
      <About />
      <Projects/>
      <Contact />
      <Footer />
    </div>
  )
}

export default App

