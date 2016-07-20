import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateActive } from '../actions.js';
import Waypoint from 'react-waypoint';

class Contact extends Component {
	handleWaypoint = () => {
		if (this.props.activeClass !== "contact") {
			this.props.updateActiveClass("contact")
		}
	}

  render() {
		return (
			<footer>
				<p>Some important stuff goes here</p>
				<div className="bottom-element">
					<Waypoint onEnter={this.handleWaypoint}/>
					<p>Oh god how did this get here im not gud with computar</p>
				</div>
				<br/>
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
