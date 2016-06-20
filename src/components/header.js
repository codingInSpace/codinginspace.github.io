import React, { Component } from 'react';
import { Grid, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
		return (
			<header>
				<Col sm={6} smOffset={3}>
					<p>Hej jag heter jonathan :D</p>
				</Col>
			</header>
		);
	}
}

export default Header
