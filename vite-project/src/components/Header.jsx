import React from 'react'
import ReactLogo from '../assets/react-logo.png'
// import ReactDOM from 'react-dom'


export default function Header() {
    return (
            <nav className="nav">
                <div className='nav-left'>
                    <img src= {ReactLogo}></img>
                    <p>ReactFacts</p>
                </div>
                <div className='nav-right'>
                    <p>React Course - Project 1</p>
                </div>
            </nav>
    )
}