import React, { Component } from 'react';
import { Link } from "react-router";
import { connect } from 'react-redux';

class Navbar extends Component {
  render() {
  	let activeClass = this.props.activeClass;
  	const contactClass = activeClass === "contact" ? "active" : "";
  	const projectsClass = activeClass === "projects" ? "active" : "";
  	const topClass = activeClass === "top" ? "active" : "";
		return (
			<div className="router-navbar">
				<span className={contactClass}>
					<Link to={{ to: "/", hash: "#contact" }}> Contact </Link>
				</span>
				<span className={projectsClass}>
					<Link to={{ to: "/", hash: "#projects" }}> Projects </Link>
				</span>
				<span className={topClass}>
					<Link to={{ to: "/", hash: "#top" }}> Top </Link>
				</span>
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
