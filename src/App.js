import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import NavBar from './components/Navbar';
import NotFound from './components/NotFound';
import Mainpage from './components/Mainpage';

function App() {
	return (
		<React.Fragment>
			<NavBar />
			<Switch>
				<Route exact path="/" component={Mainpage} />
				<Route component={NotFound} />
			</Switch>
		</React.Fragment>
	);
}

export default App;
