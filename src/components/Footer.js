import React, { Component } from 'react';
import { Col } from 'react-bootstrap';

class Footer extends Component {
  render() {
		return (
			<footer>
				<Col sm={6} smOffset={3}>
					<p>Some boring stuff goes here</p>
				</Col>
			</footer>
		);
	}
}

export default Footer 
