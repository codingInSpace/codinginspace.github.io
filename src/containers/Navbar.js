import React, { Component } from 'react';
import { Link } from "react-router";
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import classNames from 'classnames';

class Navbar extends Component {
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
					<span className={contactClass}>
						<Link to={{ to: "/", hash: "#contact" }}> Contact </Link>
					</span>
					<span className={projectsClass}>
						<Link to={{ to: "/", hash: "#projects" }}> Projects </Link>
					</span>
					<span className={topClass}>
						<Link to={{ to: "/", hash: "#top" }}> Top </Link>
					</span>
				</Grid>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass 
	};
}


export default connect(mapStateToProps, null)(Navbar)
