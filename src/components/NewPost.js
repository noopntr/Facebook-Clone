import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './Newpost.css';

import { AiFillVideoCamera } from 'react-icons/ai';
import { FaUserCircle } from 'react-icons/fa';
import { MdPhotoLibrary } from 'react-icons/md';
import { GoSmiley } from 'react-icons/go';

export default class NewPost extends Component {
	render() {
		return (
			<div className="newpost">
				<ReactBootstrap.Container fluid>
					<ReactBootstrap.Row className="justify-content-md-center mr-n4 firstRow">
						<FaUserCircle className="userIcon" color="white" size={37} />
						<ReactBootstrap.Col xs={10}>
							<ReactBootstrap.Form>
								<ReactBootstrap.Form.Group>
									<ReactBootstrap.Form.Control type="text" placeholder="What's On Your Mine, User?" />
								</ReactBootstrap.Form.Group>
							</ReactBootstrap.Form>
						</ReactBootstrap.Col>
					</ReactBootstrap.Row>
					<hr />
					<ReactBootstrap.Row>
						<ReactBootstrap.Col xs lg="4">
							<button className="postbtn">
								<AiFillVideoCamera size={28} color={'#e93864'} />
								<span className="liveVideo">Live Video</span>
							</button>
						</ReactBootstrap.Col>
						<ReactBootstrap.Col xs lg="4">
							<button className="postbtn">
								<MdPhotoLibrary size={28} color={'green'} />
								<span className="liveVideo">Photo/Video</span>
							</button>
						</ReactBootstrap.Col>
						<ReactBootstrap.Col xs lg="4">
							<button className="postbtn">
								<GoSmiley size={28} color={'yellow'} />
								<span className="liveVideo">Feeling/Activity</span>
							</button>
						</ReactBootstrap.Col>
					</ReactBootstrap.Row>
				</ReactBootstrap.Container>
			</div>
		);
	}
}
