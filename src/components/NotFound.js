import React, { Component } from 'react';
import './NotFound.css';
import notFound from './404page/404.jpg';

class NotFound extends Component {
	render() {
		return (
			<div className="NotFound">
				<h1>404</h1>
				<h3>Page Not Found</h3>
			</div>
		);
	}
}

export default NotFound;
