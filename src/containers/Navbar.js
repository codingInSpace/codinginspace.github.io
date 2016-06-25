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
					<ul>
						<Link to={{ to: "/", hash: "#top" }}> 
							<li className={topClass}>Top</li> 
						</Link>
						<Link to={{ to: "/", hash: "#projects" }}> 
							<li className={projectsClass}>Projects </li>
						</Link>
						<Link to={{ to: "/", hash: "#contact" }}> 
							<li className={contactClass}> Contact </li>
						</Link>
					</ul>
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
