import * as ReactBootstrap from 'react-bootstrap';
import React, { Component } from 'react';
import './Centerrow.css';
import first from './DayPics/first.jpg';
import second from './DayPics/second.jpg';
import third from './DayPics/third.jpg';
import fourth from './DayPics/fourth.jpg';

import Newpost from './NewPost';
import Post from './post';

export default class Centerrow extends Component {
	render() {
		return (
			<div className="centerrow">
				<ReactBootstrap.Container>
					<div style={{ width: '750px' }}>
						<ReactBootstrap.Row>
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
					</div>
					<ReactBootstrap.Row>
						<ReactBootstrap.Col md="12">
							<div className="NewpostInCenter">
								<Newpost />
							</div>
						</ReactBootstrap.Col>
						<div className="PostInCenter">
							<ReactBootstrap.Col md="12">
								<Post />
							</ReactBootstrap.Col>
						</div>
					</ReactBootstrap.Row>
				</ReactBootstrap.Container>
			</div>
		);
	}
}
