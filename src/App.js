import React, { Component } from 'react';
import './App.css';
import { Main } from './Main';

class App extends Component {

	render() {
		return (
			<React.Fragment>
				<Main hello="hi frank"></Main>
			</React.Fragment>
		);
	}
}

export default App;
