import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar';
import Default from './components/Default';
import Mainpage from './components/Mainpage';

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<br />
			<br />
			<Switch>
				<Route exact path="/" component={Mainpage} />
				<Route component={Default} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
