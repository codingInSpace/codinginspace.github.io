import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import classNames from 'classnames';
import { setNodeForScroll, updateActive } from '../actions.js';
import Ripple from 'react-toolbox/lib/ripple';

class Navbar extends Component {
	clickHandler(event, idToView) {
		event.preventDefault();
		this.props.updateClass(idToView)
		this.props.setGotoComponent(idToView)
	}

  render() {
  	const activeClass = this.props.activeClass;
  	const contactClass = activeClass === "contact" ? "active" : "inactive";
  	const projectsClass = activeClass === "projects" ? "active" : "inactive";
  	const topClass = activeClass === "top" ? "active" : "inactive";

		const Link = (props) => (
			<a {...props} style={{position: 'relative'}}> 
				{props.children}
			</a>
		);

		const RippleLink = Ripple({spread: 2})(Link)

  	let navClasses = classNames({
  		"custom-navbar": true,
  		"navtop": activeClass === "top"
		});

		return (
			<div 
				className={navClasses} 
				style={ this.props.aDialogVisible ? { opacity: '0' } : null }
			>
				<Grid>
					<ul>
						<RippleLink onClick={(e) => this.clickHandler(e, "top")}>
							<li className={topClass}>Top</li> 
						</RippleLink>
						<RippleLink onClick={(e) => this.clickHandler(e, "projects")}> 
							<li className={projectsClass}>Projects </li>
						</RippleLink>
						<RippleLink onClick={(e) => this.clickHandler(e, "contact")}> 
							<li className={contactClass}> Contact </li>
						</RippleLink>
					</ul>
				</Grid>
			</div>
		);
	}
}

Navbar.propTypes = {
	setGotoComponent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass,
		aDialogVisible: state.aDialogVisible
	};
}

const mapDispatchToProps = (dispatch) => {
	return { 
		setGotoComponent: (comp) => {
			dispatch(setNodeForScroll(comp))
		},

		updateClass: (newClass) => {
			dispatch(updateActive(newClass))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
