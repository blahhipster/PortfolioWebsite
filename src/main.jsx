import { createRoot } from 'react-dom/client'
import './App.css'
import Nav from './Nav.jsx'
import Homes from './Home.jsx'
import ExperienceSection from './Experience.jsx'
import Contact from './Contact.jsx'

createRoot(document.getElementById('root')).render(
    <>
        <Nav />
        <div className='hr'></div>
        <div id="homes"><Homes/></div>
        <div className='hr'></div>
        <div id="experience"><ExperienceSection/></div>
        <div id="contact"><Contact/></div>
    </>
)
