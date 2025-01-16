import { createRoot } from 'react-dom/client'
import './App.css'
import Nav from './Nav.jsx'
import Homes from './Home.jsx'
import ExperienceSection from './Experience.jsx'
import Contact from './Contact.jsx'
import MyProjects from './MyProjects.jsx'
import EH from './ExperienceH.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Nav />
        <div className='hr'></div>
        <div id="homes"><Homes/></div>
        <div className='hr'></div>
        <div id="projects"><MyProjects/></div>
        <div className='hr1'></div>
        <div id="experience"><EH/></div>
        <ExperienceSection/>
        <div id="contact"><Contact/></div>
    </>
)
