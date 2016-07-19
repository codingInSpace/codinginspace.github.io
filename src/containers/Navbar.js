import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { updateActive } from '../actions.js';

import { Grid } from 'react-bootstrap';
import classNames from 'classnames';
import { Button } from 'react-toolbox/lib/button';

import Scroll from 'react-scroll';
var Link = Scroll.Link;

class Navbar extends Component {
	handleActiveClass(className) {
		this.props.updateActiveClass(className)
	}

  render() {
		const activeClass = this.props.activeClass;
		const contactClass = activeClass === "contact" ? "active" : "inactive";
  	const projectsClass = activeClass === "projects" ? "active" : "inactive";
  	const topClass = activeClass === "top" ? "active" : "inactive";

  	let navClasses = classNames({
  		"custom-navbar": true,
  		"navtop": activeClass === "top",
  		"no-shadow": activeClass === "contact"
		});

		return (
			<div 
				className={navClasses} 
				style={ this.props.aDialogVisible ? { opacity: '0' } : null }
			>
				<Grid id="navitem-container">
					<ul>
					<Link 
						to="top" 
						activeClass="test"
						onSetActive={(className) => this.handleActiveClass(className)}
						spy={true} 
						smooth={true} 
						duration={500}
					>
							<Button 
								label="Top" 
								className={topClass}
								flat 
							/>
						</Link>
						<Link 
							to="projects" 
							activeClass="test"
							onSetActive={(className) => this.handleActiveClass(className)}
							spy={true} 
							smooth={true} 
							duration={500}
						>
							<Button 
								label="Projects" 
								className={projectsClass}
								flat 
							/>
						</Link>
						<Link
							to="contact"
							activeClass="test"
							onSetActive={(className) => this.handleActiveClass(className)}
							spy={true}
							smooth={true}
							duration={500}
						>
							<Button 
								label="Contact" 
								className={contactClass}
								flat 
							/>
						</Link>
					</ul>
				</Grid>
			</div>
		);
	}
}

Navbar.propTypes = {
	updateActiveClass: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass,
		aDialogVisible: state.aDialogVisible
	};
}

const mapDispatchToProps = (dispatch) => {
	return { 
		updateActiveClass: (newClass) => {
			dispatch(updateActive(newClass))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
