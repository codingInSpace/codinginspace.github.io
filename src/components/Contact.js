import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';

import Scroll from 'react-scroll';
var Element = Scroll.Element;

class Contact extends Component {
  render() {
		return (
			<Element name="contact">
				<footer>
					<Col sm={6} smOffset={3}>
						<p>Some important stuff goes here</p>
						<p>Oh god how did this get here im not gud with computar</p>
					</Col>
					<br/>
				</footer>
			</Element>
		);
	}
}

export default Contact
