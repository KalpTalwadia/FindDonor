import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './navbar.css'
import {Close, Menu} from '@material-ui/icons';
export default function Navbar() {
    const [click,setClick] = useState(false)

    const handleClick = ()=> setClick(!click)
    const closeMobileMenu = ()=> setClick(false);

  
    return (
        <div className="navbar">
        <div className="navbar-container container">
            <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            {/* <MdFingerprint class="nav-icon" /> */}
                Find Donor
            </Link>
            <div className="menu-icon" onClick={handleClick}>
                {click ? <Close/> : <Menu/>}
            </div>
            <ul className={click ? 'nav-menu active': 'nav-menu'}>
            <li className="nav-item">
                <Link to="/" className="nav-links"  onClick={closeMobileMenu}>
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/register" className="nav-links"  onClick={closeMobileMenu}> 
                    Register
                </Link>
            </li>
            <li className="nav-item">
                <Link to="/products" className="nav-links"  onClick={closeMobileMenu}>
                    About Us
                </Link>
            </li>
            </ul>
        </div>
    </div>
    )
}
