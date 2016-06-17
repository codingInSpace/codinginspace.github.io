import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Header extends Component {
  render() {
		return (
			<header>
				<Row>
					<Col sm={6} smOffset={3}>
						<p>Hej jag heter jonathan :D</p>
					</Col>
				</Row>
			</header>
		);
	}
}

export default Header
