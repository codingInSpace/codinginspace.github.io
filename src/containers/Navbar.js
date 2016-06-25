import React, { Component } from 'react';
import { Link } from "react-router";
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';

class Navbar extends Component {
  render() {
  	let activeClass = this.props.activeClass;
  	const contactClass = activeClass === "contact" ? "active" : "inactive";
  	const projectsClass = activeClass === "projects" ? "active" : "inactive";
  	const topClass = activeClass === "top" ? "active" : "inactive";
		return (
			<div className="router-navbar">
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
