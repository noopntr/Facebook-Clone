import React, { Component } from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import './Navbar.css';
import DropdownMenu from './DropDownMenu';

// Icons
import fblogo from './icons/fblogo144px.svg';
import { RiCodeSSlashLine } from 'react-icons/ri';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserFriends } from 'react-icons/fa';
import { RiTvLine } from 'react-icons/ri';

export default class Navbar extends Component {
	render() {
		return (
			<div className="navbar-dark">
				<ReactBootstrap.Navbar variant="light" className="NavbarColor">
					<ReactBootstrap.Container fluid className="containerPadd">
						<ReactBootstrap.Row>
							<ReactBootstrap.Navbar.Brand href="/">
								<img
									src={fblogo}
									width="45"
									height="45"
									className="d-inline-block align-top"
									alt="React Bootstrap logo"
								/>
							</ReactBootstrap.Navbar.Brand>
							<ReactBootstrap.Nav className="ml-auto">
								<ReactBootstrap.Nav.Link className="justify-content-sm-center" href="#home" />
							</ReactBootstrap.Nav>
							<ReactBootstrap.Form inline className="formcontrolForIcon">
								<ReactBootstrap.FormControl
									type="text"
									placeholder="Search Facebook Clone"
									className="mr-sm-2 searchInput"
								/>
							</ReactBootstrap.Form>
						</ReactBootstrap.Row>
						<ReactBootstrap.Row className="justify-content-md-center">
							<ReactBootstrap.Col>
								<button>
									<AiOutlineHome size={30} color={'white'} />
								</button>
							</ReactBootstrap.Col>
							<ReactBootstrap.Col>
								<button>
									<FaUserFriends size={30} color={'white'} />
								</button>
							</ReactBootstrap.Col>
							<ReactBootstrap.Col>
								<button>
									<RiTvLine size={30} color={'white'} />
								</button>
							</ReactBootstrap.Col>
							<ReactBootstrap.Col>
								<button>
									<RiCodeSSlashLine size={30} color={'white'} />
								</button>
							</ReactBootstrap.Col>
						</ReactBootstrap.Row>
						<DropdownMenu />
					</ReactBootstrap.Container>
				</ReactBootstrap.Navbar>
			</div>
		);
	}
}
