# Code Tutorial for React

## Use this to concrete your understanding of what is going on in the src files! Start with **index.js.**

---

### 1. Pre-reqs:
* Basic understanding of JavaScript, HTML, CSS
* Node.js, downloaded from nodejs.org, verify using ```node --version```
* Create-react-app (installed using ```npm install create-react-app -g```)
* JavaSript IDE

### 2. Use the files I've pre-made with comments
* Once you have cloned the repo down, install all of the dependencies using ```npm install`` inside the exmaple folder

### **OR**

### 2. To create a basic React app
* ```create-react-app app-name```
* ```cd app-name```, to navigate into the directory
* ```npm start```
* This will set up a localhost on 3000 that will have hot loading for your React project

### 3.	React Basics
* React is composed of multiple reusable components that are combined when the app is transpiled (basically compiled from JS to HTML, CSS, and JavaScript
* Each component can be in its own file, or multiple can be exported from one, more later on
* It is possible to write JSX (JavaScript XML), which allows for HTML-like code to be written in a Javascript file
* A React project cannot be opened without this transpiling, that’s why we use npm start

### 4.	Fundamentals:
* Props: properties passed down from a parent component, are immutable
* State: exist only in a component, and can be changed (asynchronously)
* Component lifecycle: each React component has a lifecycle that is triggered by state-changes, which means it will be re-rendered, with updated state values. If it's a little confusing don't worry, it'll be explained later!

### 5.	Props:
*	Flow of information is downward in React, like a waterfall
*	Pretty much anything can be passed as a prop, including functions
*	These are very useful because you can bind “this” to act in the realm of the parent, meaning you can change the state of the parent from the child (more on this later)
*	These are passed in like attributes to an HTML tag, some words are reserved, but most can be used

### 6. State:
* Values that exists within the realm of a component and are used to alter its UI and content
* Can be changed using ```this.setState({ key: value })```, this is set asynchronously, meaning it will not take affect right away (but in a couple milliseconds), this is called “lifting up the state”
* This fact is important to keep track of because you need to wait until the React component lifecycle is over to use the updated value
* When state is changed, a React component is re-rendered, and the new state values are represented in the app, more on this below

### 7.	Component lifecycle:
*	Every component has a lifecycle, from prepping being mounted, to all loaded, and then unloaded when the component is not being used
*	Each of the stages have a default function that is called when it undergoes that stage
*	i.e, when component is being prepped to mount, it will call componentWillMount, but don’t use this one, its deprecated
* Best examples are componentDidMount (1) and componentWillUnmount (2)
1. The component is fully mounted, and now you can make some calls, preferable place to do API calls, since you can update the state of the component once the response is received (asynchronously)
2. Component is about to unmount, this is useful when you have active listeners for the component and you need to end their listening, otherwise memory leaks could occur since you’re trying to update components that aren’t mounted
* Big idea: when the state is changed, the component will re-render and the new values will be applied automatically to the app
* Also passes in the new props, which will change the content of the children components

### 8. Designing React Apps:
* It’s very easy to jump right in to making an app without considering how the information is passed to components, and considering which component will contain different states
* It’s best to pseudo-code the flow and identify whether states will be updated

### 9. Deploying:
*	Apps can be deployed to github pages using npm run deploy
*	More below, from https://info340.github.io/ and my homework.

Because Create React App uses a build system (webpack (Links to an external site.)Links to an external site.) to compile, bundle, and run your application (to convert the React JSX into JavaScript any browser can run), you need to perform a couple of extra steps to put your website online. In particular, you need to tell the Create React App build system to create a "production" build (one that works outside of the development server you've been running), and then use the React Scripts to automatically deploy your production version to a gh-pages branch
For complete details on this process, see the Create React App documentation (Links to an external site.)Links to an external site.. A summary of steps is provided below for your convenience:

1.	Add a new "homepage" key to the package.json file with the format (replacing react-projectname with your repo name):
 "homepage": "https://github-name.github.io/reponame/",
2.	Following the instructions (Links to an external site.)Links to an external site., use npm to install the gh-pages module (```npm install gh-pages -g```), and add the required entries to the "scripts" value in the package.json (the ones with the + symbol next to them)
3.	 ```"predeploy": "npm run build",```
 ```"deploy": "gh-pages -d build", ```   
4.	Use the script you defined to build and deploy the page!
 npm run deploy
This should make your app available at https://github-name.github.io/reponame/, running in production mode. You don't even need to push to the gh-pages branch on your own; the library and script do that for you!

More info: https://info340.github.io/ 
