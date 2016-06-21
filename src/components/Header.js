import React, { Component } from 'react';
import { Grid, Col, Image } from 'react-bootstrap';

class Header extends Component {
  render() {
		return (
			<header>
				<Col xs={8} xsOffset={2} sm={4} smOffset={4}>
					<Image src="public/jonathan.png" circle responsive/>
				</Col>
			</header>
		);
	}
}

export default Header
