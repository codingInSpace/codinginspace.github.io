import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import classNames from 'classnames';
import { setNodeForScroll, updateActive } from '../actions.js';
import { Button } from 'react-toolbox/lib/button';

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

  	let navClasses = classNames({
  		"custom-navbar": true,
  		"navtop": activeClass === "top"
		});

		return (
			<div 
				className={navClasses} 
				style={ this.props.aDialogVisible ? { opacity: '0' } : null }
			>
				<Grid id="navitem-container">
					<ul>
						<Button 
							label="Top" 
							className={topClass} 
							onClick={(e) => this.clickHandler(e, "top")}
							flat 
						/>
						<Button 
							label="Projects" 
							className={projectsClass} 
							onClick={(e) => this.clickHandler(e, "projects")}
							flat 
						/>
						<Button 
							label="Contact" 
							className={contactClass} 
							onClick={(e) => this.clickHandler(e, "contact")}
							flat 
						/>
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
