import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './Leftsidemenu.css';
import covid from './leftMenu/covid.png';
import events from './leftMenu/events.png';
import friends from './leftMenu/friends.png';
import groups from './leftMenu/groups.png';
import messenger from './leftMenu/messenger.png';
import pages from './leftMenu/pages.png';
import videos from './leftMenu/videos.png';

// Icon(s)
import { FaUserCircle } from 'react-icons/fa';

export default class Leftsidemenu extends Component {
	render() {
		return (
			<ReactBootstrap.ButtonGroup vertical>
				<ReactBootstrap.Button className="profileBtn">
					<FaUserCircle size={30} /> Profile
				</ReactBootstrap.Button>
				<ReactBootstrap.Button>
					<img src={covid} /> COVID-19 Information Center
				</ReactBootstrap.Button>
				<ReactBootstrap.Button>
					<img src={friends} /> Friends
				</ReactBootstrap.Button>
				<ReactBootstrap.Button>
					<img src={messenger} /> Messenger
				</ReactBootstrap.Button>
				<ReactBootstrap.Button>
					<img src={pages} />Pages
				</ReactBootstrap.Button>
				<ReactBootstrap.Button>
					<img src={events} />Events
				</ReactBootstrap.Button>
				<ReactBootstrap.Button>
					<img src={videos} />Videos
				</ReactBootstrap.Button>
				<ReactBootstrap.Button>
					<img src={groups} />Groups
				</ReactBootstrap.Button>
			</ReactBootstrap.ButtonGroup>
		);
	}
}
