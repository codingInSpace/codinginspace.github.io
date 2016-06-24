import React, { Component, PropTypes } from 'react';
import { Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import { updateActive } from '../redux/actions.js';

class Footer extends Component {
	onEnter() {
		if (this.props.activeClass !== "contact")
			this.props.updateClass("contact");
	}

  onLeave() {
		if (this.props.activeClass !== "projects")
			this.props.updateClass("projects");
	}

  render() {
		return (
			<footer id="contact">
				<Col sm={6} smOffset={3}>
					<p>Some boring stuff goes here</p>
				</Col>
				<Waypoint
					onEnter={this.onEnter.bind(this)}
					onLeave={this.onLeave.bind(this)}
				/>
			</footer>
		);
	}
}

Footer.propTypes = {
	updateClass: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass 
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateClass: (newClass) => {
			dispatch(updateActive(newClass))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
