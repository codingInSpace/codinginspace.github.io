import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import { IconButton } from 'react-toolbox/lib/button';
import { Motion, spring, presets } from 'react-motion';
import Medallion from './Medallion';

import Scroll from 'react-scroll';
let scroller = Scroll.scroller;

class Top extends Component {
	state = {
		imageWillAnimate: false
	}

	componentDidMount() {
		setInterval(() => {
			this.setState({
				imageWillAnimate: true 
			})
		}, 300)
	}

	handleButtonClick() {
		scroller.scrollTo('projects', {
			duration: 800,
			delay: 50,
			smooth: true,
		})
	}

  render() {
		return (
			<header>
				<Grid>
					<Row>
						<Col xs={8} xsOffset={2} sm={4} smOffset={4} >
							<Medallion className="medallion"/>
							<br></br>
						</Col>
					</Row>
					<Row>
						<Col sm={6} smOffset={3}>
							<p className="top-title">Jonathan Grangien</p>
							<p>I am a MSc. student of Computer Science in Media Technology at Linköping University, Sweden. I like programming, mainly websites, applications and graphics.</p>
						</Col>
					</Row>
				</Grid>

				<IconButton 
					icon="keyboard_arrow_down" 
					className="top-arrow" 
					onClick={this.handleButtonClick}
					accent
				/>
			</header>
		);
	}
}

export default Top
