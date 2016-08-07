import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateActive } from '../actions.js';
import { Grid, Col } from 'react-bootstrap';

import Waypoint from 'react-waypoint';
import { Motion, spring } from 'react-motion';

class Contact extends Component {
	state = {
		lineWillAnimate: false
	}

	handleWaypointEnter = (props) => {
		if (props.event && props.event.type === "scroll" && this.props.activeClass !== "contact") {
			this.props.updateActiveClass("contact")
		}
	}

	handleWaypointLeave = (props) => {
		if (props.event && props.event.type === "scroll" && this.props.activeClass !== "projects") {
			this.props.updateActiveClass("projects")
		}
	}
	
	lineInView = (props) => {
		if (props.event && props.event.type === "scroll" && !this.state.lineAnimated) {
			console.log("animating")
			this.state = {
				lineWillAnimate: true
			}
		}
	}

  render() {
		return (
			<footer>
				<Grid>
					<Motion defaultStyle={{x: 0}} style={{x: this.state.lineWillAnimate ? spring(50, [30, 30]) : 0}}>
						{({x}) => 
							<div>
							<div style={{
								borderRadius: '50px',
								backgroundColor: 'rgba(0, 150, 136, 0.7)',
								position: 'absolute',
								left: (50 - x/2) + '%',
								width: x + '%',
								height: '3px'
							}} />
							<Waypoint
								onEnter={this.lineInView}
							/>
							</div>
						}
					</Motion>


					<div className="contact-content">
						<Col sm={4} smOffset={3}>
							<h2>Info</h2>	
							<p>mail me</p>
						</Col>
						<Col sm={4}>
							<h2>Follow</h2>
							<p>check my fb</p>
						</Col>
					</div>
					<div className="waypoint-container">
						<Waypoint
							onEnter={this.handleWaypointEnter}
							onLeave={this.handleWaypointLeave}
						/>
					</div>
				</Grid>
			</footer>
		);
	}
}

Contact.propTypes = {
	updateActiveClass: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass
	};
}

const mapDispatchToProps = (dispatch) => {
	return { 
		updateActiveClass: (newClass) => {
			dispatch(updateActive(newClass))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Contact)
