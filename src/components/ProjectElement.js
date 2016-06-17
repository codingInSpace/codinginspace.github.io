import React from 'react';

class ProjectElement extends React.Component {
	render() {
		const tags = this.props.elem.tags.map(function (tag) {
			return (
				<span className="tag">{tag}</span>
			);
		});

		return (
			<li className="project-element">
				<img src={this.props.elem.src}/>
				<div className="title">
					<p>{this.props.elem.title}</p>
					{tags}
				</div>
			</li>
		);
	}
}

export default ProjectElement
