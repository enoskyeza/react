import React from 'react'
import { FaSquareGithub } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
// import ReactDOM from 'react-dom'

// export default function MainContent() {
//     return (
//         <div className='main-content'>
//             <h1>Fun facts about React</h1>
//             <ul className='custom-list'>
//                 <li>Was first released inn 2013</li>
//                 <li>Was originally created by Jordan Walke</li>
//                 <li>Has well over 100k starts on Github</li>
//                 <li>Is maintained by Facebook</li>
//                 <li>Powers thousands of enterprise apps, including mobile apps</li>
//             </ul>
//         </div>
//     )
// }

const Main = () => {
    return (
        <div className='digital-card-container'>
            <div className='digital-card-img'></div>
            <div className='digital-card-content'>
                <div className='bio-info'>
                    <h2>Enos Kyeza</h2>
                    <p>Front End Developer</p>
                    <p>dev-enos.netifly.app</p>
                    <div className='btn-container'>
                        <button className='dc-btn dc-btn-light'>Email</button>
                        <button className='dc-btn dc-btn-blue'>LinkedIn</button>
                    </div>
                </div>
                <div className='about-info'>
                    <h4>About</h4>
                    <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and amm always looking for new things to learn.</p>
                    <h4>Interests</h4>
                    <p>Food expert. Music. Reader. Internnet fanatic. Bacon buff. Travel geek. Pop culture ninja. Coffee fanatic.</p>
                </div>
            </div>
            <div className='digital-card-footer'>
                <a href="#" target='_blank'><FaSquareGithub /></a>
                <a href="#" target='_blank'><FaLinkedin /></a>
            </div>
        </div>
    )
}

export default Main