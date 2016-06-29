import React, { Component, PropTypes } from 'react';
import { Link } from "react-router";
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import classNames from 'classnames';
import { newGotoComponent } from '../redux/actions.js';

class Navbar extends Component {
	clickHandler(event, idToView) {
		event.preventDefault();
		this.props.setGotoComponent(idToView)
	}

  render() {

  	const activeClass = this.props.activeClass;
  	const contactClass = activeClass === "contact" ? "active" : "inactive";
  	const projectsClass = activeClass === "projects" ? "active" : "inactive";
  	const topClass = activeClass === "top" ? "active" : "inactive";

  	let navClasses = classNames({
  		"router-navbar": true,
  		"navtop": activeClass === "top"
		});

		return (
			<div className={navClasses}>
				<Grid>
					<ul>
						<a onClick={(e) => this.clickHandler(e, "top")}> 
							<li className={topClass}>Top</li> 
						</a>
						<a onClick={(e) => this.clickHandler(e, "projects")}> 
							<li className={projectsClass}>Projects </li>
						</a>
						<a onClick={(e) => this.clickHandler(e, "contact")}> 
							<li className={contactClass}> Contact </li>
						</a>
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
		activeClass: state.activeClass 
	};
}

const mapDispatchToProps = (dispatch) => {
	return { 
		setGotoComponent: (comp) => {
			dispatch(newGotoComponent(comp))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
