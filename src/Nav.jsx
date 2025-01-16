import './App.css'

function Nav() {
    return (
        <nav>
            <div className="logo">
                <p>YASH.DEV</p>
            </div>
            <div className="menu">
                <ul><a href="#homes">Home</a></ul>
                <ul><a href="#projects">Projects</a></ul>
                <ul><a href="#experience">Experience</a></ul>
                <ul><a href="#contact">Contact</a></ul>
            </div>
        </nav>
    )    
}

export default Nav
