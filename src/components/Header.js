import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Icon from '@grove/react-font-awesome';
import Waypoint from 'react-waypoint';

class Header extends Component {
	onEnter() {
		console.log("entered header")
	}

	onLeave() {
		console.log("left header")
	}

  render() {
		return (
			<header id="top">
				<Grid>
					<Row>
						<Col xs={8} xsOffset={2} sm={4} smOffset={4} >
							<Image src="public/jonathan.png" circle responsive/><br></br>
						</Col>
					</Row>
					<Waypoint
						onEnter={this.onEnter}
						onLeave={this.onLeave}
					/>
					<Row>
						<Col sm={6} smOffset={3}>
							<p className="header-title">Jonathan Grangien</p>
							<p>I am a MSc. student of Computer Science in Media Technology at Linköping University, Sweden. I like programming, mainly websites, applications and graphics.</p>
						</Col>
					</Row>
				</Grid>

				<Icon className="header-arrow" name="chevron-down"/>
			</header>
		);
	}
}

export default Header
