import React, { Component } from 'react';
import Leftsidemenu from './Leftsidemenu';
import './Mainpage.css';

export default class Mainpage extends Component {
	render() {
		return (
			<div className="mainpage">
				<Leftsidemenu />
			</div>
		);
	}
}
