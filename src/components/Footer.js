import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint';

class Footer extends Component {
	onEnter() {
		console.log("entered footer")
	}

	onLeave() {
		console.log("left footer")
	}

  render() {
		return (
			<footer id="contact">
				<Col sm={6} smOffset={3}>
					<p>Some boring stuff goes here</p>
				</Col>
				<Waypoint
					onEnter={this.onEnter}
					onLeave={this.onLeave}
				/>
			</footer>
		);
	}
}

export default Footer 
