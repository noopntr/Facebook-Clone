import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import Leftsidemenu from './Leftsidemenu';
import Centerrow from './Centerrow';
import './Mainpage.css';

export default class Mainpage extends Component {
	render() {
		return (
			<div className="mainpage">
				<ReactBootstrap.Container fluid="xs">
					<ReactBootstrap.Row>
						<ReactBootstrap.Col xs={6} md={4}>
							<Leftsidemenu />
						</ReactBootstrap.Col>
						<ReactBootstrap.Col xs={6} md={4}>
							<br />
							<Centerrow />
						</ReactBootstrap.Col>
					</ReactBootstrap.Row>
				</ReactBootstrap.Container>
			</div>
		);
	}
}
