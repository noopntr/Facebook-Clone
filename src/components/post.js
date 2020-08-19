import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { BsThreeDots } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';
import { GoComment } from 'react-icons/go';
import { RiShareForwardLine } from 'react-icons/ri';
import './Post.css';

export default class post extends Component {
	render() {
		return (
			<div className="PostInCenter">
				<ReactBootstrap.Container fluid style={{ width: '700px' }}>
					<ReactBootstrap.Row className="justify-content-md-center mr-n4 ">
						<ReactBootstrap.Col lg={13}>
							<ReactBootstrap.Card
								style={{
									background: '#242526',
									borderRadius: '10px'
								}}
							>
								<ReactBootstrap.Col>
									<div className="cardTopSide">
										<FaUserCircle
											className="userIcon"
											color="white"
											size={45}
											style={{ margin: '10px', paddingRight: '10px' }}
										/>
										<span className="userName" style={{ paddingTop: '20px' }}>
											Username
										</span>
										<span className="threeDots" style={{ paddingTop: '20px', paddingLeft: '30px' }}>
											<BsThreeDots />
										</span>
									</div>
								</ReactBootstrap.Col>

								<ReactBootstrap.Card.Img
									style={{ height: 'auto', maxHeight: '550px' }}
									variant="top"
									src="https://images.unsplash.com/photo-1496284045406-d3e0b918d7ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
								/>

								<ReactBootstrap.Card.Body>
									<ReactBootstrap.Card.Title>Post Title</ReactBootstrap.Card.Title>
									<ReactBootstrap.Card.Text>
										Some quick example text to build on the post title and make up the bulk of the
										post's content.
										<hr />
									</ReactBootstrap.Card.Text>
									<div className="bottomCard">
										<ReactBootstrap.Row>
											<ReactBootstrap.Col xs lg="4">
												<ReactBootstrap.Button className="postbtn" variant="primary">
													<AiOutlineLike size={20} style={{ marginTop: '7px' }} />
													<span className="iconBtn">Like</span>
												</ReactBootstrap.Button>
											</ReactBootstrap.Col>
											<ReactBootstrap.Col xs lg="4">
												<ReactBootstrap.Button className="postbtn" variant="primary">
													<GoComment size={20} style={{ marginTop: '7px' }} />
													<span className="iconBtn">Comment</span>
												</ReactBootstrap.Button>
											</ReactBootstrap.Col>
											<ReactBootstrap.Col xs lg="4">
												<ReactBootstrap.Button className="postbtn" variant="primary">
													<RiShareForwardLine size={20} style={{ marginTop: '7px' }} />
													<span className="iconBtn">Share</span>
												</ReactBootstrap.Button>
											</ReactBootstrap.Col>
										</ReactBootstrap.Row>
									</div>
								</ReactBootstrap.Card.Body>
							</ReactBootstrap.Card>
						</ReactBootstrap.Col>
					</ReactBootstrap.Row>
				</ReactBootstrap.Container>
			</div>
		);
	}
}
