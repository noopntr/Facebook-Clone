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
					<ReactBootstrap.Row className="mainPageRow">
						<ReactBootstrap.Col xs={4}>
							<div>
								<Leftsidemenu />
							</div>
						</ReactBootstrap.Col>
						<ReactBootstrap.Col xs={4}>
							<div>
								<br />
								<Centerrow />
							</div>
						</ReactBootstrap.Col>
					</ReactBootstrap.Row>
				</ReactBootstrap.Container>
			</div>
		);
	}
}
