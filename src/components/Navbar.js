import React, { Component } from 'react';
import { Link } from "react-router";

class Navbar extends Component {
  render() {
		return (
			<div className="router-navbar">
				<span><Link to={{ to: "/", hash: "#contact" }}>Contact</Link></span>
				<span><Link to={{ to: "/", hash: "#projects" }}>Projects</Link></span>
				<span><Link to={{ to: "/", hash: "#top" }}>Top</Link></span>
			</div>
		);
	}
}

export default Navbar 
