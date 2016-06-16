import React from 'react';

class ProjectElement extends React.Component {
	render() {
		return (
			<li className="project-element">
				<img src={this.props.elem.src}/>
			</li>
		);
	}
}

export default ProjectElement
