import React from 'react'
import logo from './react-logo.png'


const Header = () => {
    return (
        <header>
            <nav className="nav">
                <img src={ logo } width='60px'></img>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header