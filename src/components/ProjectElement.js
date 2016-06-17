import React from 'react';
import uid from '../utils/uniqueIdHack';

class ProjectElement extends React.Component {
	render() {
		const elem = this.props.elem;
		const tags = elem.tags.map((tag) => {

			let bgcolor = '';
			switch (tag) {
				case 'Web':
					bgcolor = "#8764aa";
					break;
				case "C++":
					bgcolor = "#85aad0";
					break;
				case "OpenGL":
					bgcolor = "#eeaacc";
					break;
				default:
					bgcolor = "#4d4d4d";
					break;
			}

			const colorStyle = {
				backgroundColor: bgcolor
			}

			return (
				<span className="tag" style={colorStyle} key={uid()}>{tag}</span>
			);
		});

		return (
			<li className="project-element">
				<img src={elem.src}/>
				<div className="title">
					<p>{elem.title}</p>
					{tags}
				</div>
			</li>
		);
	}
}

export default ProjectElement
