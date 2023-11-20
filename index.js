// import React from 'react'
// import ReactDOM from 'react-dom'
// import { createRoot } from 'react-dom/client'



// Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);





/* Challenge:

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now

 */

const navbar = (
    <div>
        <img src='./react-logo.png' width={ 40 }></img>
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released inn 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100k starts on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
    </div>
)

ReactDOM.render(navbar, document.getElementById("root"))