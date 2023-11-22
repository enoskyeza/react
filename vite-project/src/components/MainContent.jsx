import React from 'react'
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
            </div>
            <div className='digital-card-footer'></div>
        </div>
    )
}

export default Main