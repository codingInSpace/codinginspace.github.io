import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Grid } from 'react-bootstrap';
import classNames from 'classnames';
import { Button } from 'react-toolbox/lib/button';

import Scroll from 'react-scroll';
var scroller = Scroll.scroller; 
var Events = Scroll.Events;
var Link = Scroll.Link;
var activeClass = null;

class Navbar extends Component {
  render() {
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
					<Link 
						to="top" 
						activeClass="active" 
						spy={true} 
						smooth={true} 
						duration={500}
					>
							<Button 
								label="Top" 
								flat 
							/>
						</Link>
						<Link 
							to="projects" 
							activeClass="active" 
							spy={true} 
							smooth={true} 
							duration={500}
						>
							<Button 
								label="Projects" 
								flat 
							/>
						</Link>
						<Link
							to="contact"
							activeClass="active"
							spy={true}
							smooth={true}
							duration={500}
						>
							<Button 
								label="Contact" 
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
	setGotoComponent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass,
		aDialogVisible: state.aDialogVisible
	};
}

export default connect(mapStateToProps, null)(Navbar)
