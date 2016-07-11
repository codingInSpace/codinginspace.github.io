import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import { updateActive, scrolledToNode } from '../actions.js';

class Footer extends Component {

	componentDidUpdate() {
		if (!this.props.gotoComponent.done && this.props.gotoComponent.component === "contact") {
			ReactDOM.findDOMNode(this).scrollIntoView();
			this.props.completeGotoComponent();
		}
	}

	handleScroll = (props) => {
		if (props.event && props.event.type === "scroll") {
			if (props.currentPosition === "inside") {
				this.props.updateClass("contact")
			} else if (props.currentPosition === "below") {
				this.props.updateClass("projects")
			}
		}
	}

  render() {
		return (
			<footer id="contact" ref="contact">
				<Col sm={6} smOffset={3}>
					<p>Some important stuff goes here</p>
				</Col>
				<br/>
				<Waypoint
					onEnter={this.handleScroll}
					onLeave={this.handleScroll}
				/>
			</footer>
		);
	}
}

Footer.propTypes = {
	updateClass: PropTypes.func.isRequired,
	completeGotoComponent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass,
		gotoComponent: state.gotoComponent
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateClass: (newClass) => {
			dispatch(updateActive(newClass))
		},

		completeGotoComponent: () => {
			dispatch(scrolledToNode(null))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
