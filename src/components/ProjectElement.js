import React from 'react';
import uid from '../data/uniqueIdHack';

class ProjectElement extends React.Component {
	render() {
		const elem = this.props.elem;
		const tags = elem.tags.map((tag) => {
			return (
				<span className="tag" key={uid()}>{tag}</span>
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
