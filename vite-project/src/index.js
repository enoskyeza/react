// import React from 'react'
// import ReactDOM from 'react-dom'

import Header from '../../Header'
import MainContent from '../../MainContent'
import  Footer from '../../Footer'


function Page() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
ReactDOM.render(
    <Page />,
    document.getElementById("root"))










// import { createRoot } from 'react-dom/client'



// Render your React component instead
// const root = createRoot(document.getElementById('app'));
// root.render(<h1>Hello, world</h1>);





/* Challenge 1:

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now

 */

/*

const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(navbar, document.getElementById("root"))

*/


/*
Challenge 2: Starting from scratch, build and render the
HTML for our section project. Check the Google slide for
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

/*

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

*/


/**
Challenge 3:

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */




