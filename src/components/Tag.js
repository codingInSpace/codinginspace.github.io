import React, { Component } from 'react';

class Tag extends Component {
	state = {
		bgcolor: "#000"
	}

	constructor(props) {
		super();
		let color = '';
			switch (props.text) {
				case 'Web':
					color = "#8764aa";
					break;
				case "C++":
					color = "#85aad0";
					break;
				case "OpenGL":
					color = "#eeaacc";
					break;
				case "WebGL":
					color = "#907ea1";
					break;
				case "App":
					color = "#a96161";
					break;
				case "Android":
					color = "#a85050";
					break;
				case "Unity":
					color = "#5e9b8d";
					break;
				case "VR":
					color = "#5a8dad";
					break;
				default:
					color = "#4d4d4d";
					break;
			}

			this.state = {
				bgcolor: color
			}
	}

	render() {
		const colorStyle = {
			backgroundColor: this.state.bgcolor 
		}

		return (
			<span className="project-tag" style={colorStyle}>{this.props.text}</span>
		)
	}
}

export default Tag
