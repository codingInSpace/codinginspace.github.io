import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateActive } from '../actions.js';
import { Grid, Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import MotionLine from '../components/MotionLine';

class Contact extends Component {
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
	
  render() {
		return (
			<footer>
				<Grid>
					<MotionLine/>
					<div className="contact-content">
						<Col sm={4} smOffset={3}>
							<h2>Info</h2>	
							<p>mail me pls</p>
						</Col>
						<Col sm={4}>
							<h2>Follow</h2>
							<p>check my lnikedin</p>
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
