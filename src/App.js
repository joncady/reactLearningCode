// same import, but Component is added in {}
// this means we are importing a specific class that is specified
import React, { Component } from 'react';
// here we are importing a specific class from Main.js, not just saving Main.js as Main
import { Main } from './Main';

// here we are extending the Component class to App, which gives it properties of a Component
// which we override below
class App extends Component {

	/*
		--- Main body of App ---
	*/	

	// - every Compoment has a render method!
	// - we override it here and tell it what we want to render
	// - we return JSX! Which is then transpile to be interpreted as HTML
	// - Instead of using standard HTML tags, we are building a page from our own components
	// - Each component eventually has plain HTML tags in it (see Main.js!), but files are not required
	//	 as long as they reference other components that actually return HTML
	render() {
		return (
			// - JSX returns expect there to be only one parent element returned
			// - we trick it to letting us do multiple using React.Fragment
			// - we could also use a <div>, but that would mean we would have
			// 	 a random div; React.Fragment does not leave any HTML elements
			// - if you ever get the error of not having one parent, just toss it in
			// 	 a React.Fragment, you can look up more if you want!
			<React.Fragment>
				{/* this component (Main) has a prop with the value 'hi frank' 
					we are passing that value down to main, which can then use it */}
				<Main hello="hi frank"></Main>
			</React.Fragment>
		);
	}
}

/*
	--- App is done! Head over to Main.js ---
*/

// if export like this, we import using the default name space
// import App from App.js
export default App;
