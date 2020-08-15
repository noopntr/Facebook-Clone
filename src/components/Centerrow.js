import * as ReactBootstrap from 'react-bootstrap';
import React, { Component } from 'react';
import './Centerrow.css';
import first from './DayPics/first.jpg';
import second from './DayPics/second.jpg';
import third from './DayPics/third.jpg';
import fourth from './DayPics/fourth.jpg';

import Newpost from './NewPost';

export default class Centerrow extends Component {
	render() {
		return (
			<div className="centerrow">
				<ReactBootstrap.Container>
					<ReactBootstrap.Row className="justify-content-md-center">
						<ReactBootstrap.Col>
							<ReactBootstrap.Card style={{ width: '129px', height: '230px' }}>
								<ReactBootstrap.Card.Img variant="top" src={first} />
							</ReactBootstrap.Card>
						</ReactBootstrap.Col>
						<ReactBootstrap.Col>
							<ReactBootstrap.Card style={{ width: '129px', height: '230px' }}>
								<ReactBootstrap.Card.Img variant="top" src={second} />
							</ReactBootstrap.Card>
						</ReactBootstrap.Col>
						<ReactBootstrap.Col>
							<ReactBootstrap.Card style={{ width: '129px', height: '230px' }}>
								<ReactBootstrap.Card.Img variant="top" src={third} />
							</ReactBootstrap.Card>
						</ReactBootstrap.Col>
						<ReactBootstrap.Col>
							<ReactBootstrap.Card style={{ width: '129px', height: '230px' }}>
								<ReactBootstrap.Card.Img variant="top" src={fourth} />
							</ReactBootstrap.Card>
						</ReactBootstrap.Col>
					</ReactBootstrap.Row>
					<br />
					<Newpost />
				</ReactBootstrap.Container>
			</div>
		);
	}
}
