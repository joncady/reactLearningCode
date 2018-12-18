/*
    --- Intro ---
    React projects begin in an index.js file, and everything is built from here! 
    The first thing we do is import the files we need for this particular file
    React and ReactDOM are imported just so we can render the page and add a component to it
    The App component is loaded from App.js, so let's head there next

    The syntax might look a little unfamiliar, but it's really easy!
    import React from 'react' means you are importing the React namespace from 'react'
    I say namespace here because it could be a function, class, or even variable
    Class is most common for Components
    More about this here: https://info340.github.io/es6.html
*/

/* 
    --- Import statements are all done first! ---
*/

// imported so we can use React stuff!
// Since there is no './' we are looking in the node_modules folder for a package that is called 'react'
import React from 'react';
// imported so we can render all of the elements and attach them to the 
// index.html file in the public folder
import ReactDOM from 'react-dom';
// Allows us to add style to the page, all CSS files will combine into one at the end, and might override
// './' means that we are looking in the directory that this file exists in!
import './index.css';
// imports the app component from App[.js], with the .js omitted since it expects it
import App from './App';
// provided by create-react-app
import * as serviceWorker from './serviceWorker';

/*
    --- Content of Our React App ---
*/

// the App component is connected to the 'root' element, and rendered on the page
// eveything stems from this! Now let's move into App.js!
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
