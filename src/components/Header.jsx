import React,{useState} from 'react'
import { Link } from "react-router-dom"
import '../Style/Header.css'

const Header = () => {

const [menuOpen,setMenuOpen] = useState(false)

return (

<header className="header">

<div className="navbar">

<div className="logo">
<span className="gradient-text">Rekha Singh</span>
</div>

<ul className={menuOpen ? "nav-links active" : "nav-links"}>

<li><Link to="/">Home</Link></li>

<li><Link to="/about">About</Link></li>

<li><Link to="/resume">Resume</Link></li>

<li><Link to="/skills">Skills</Link></li>

<li><Link to="/contact">Contact</Link></li>

</ul>

<div
className="menu-toggle"
onClick={()=>setMenuOpen(!menuOpen)}
>
☰
</div>

</div>

</header>

)

}

export default Header