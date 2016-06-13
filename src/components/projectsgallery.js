import React from 'react';
import Masonry from 'react-masonry-component';

var masonryOptions = {
    transitionDuration: 200
};

export default class ProjectsGallery extends React.Component {
	handleClick() {
		console.log("hej")
	}

	render() {
		var childElements = this.props.projects.map(function(elem){
			return (
				<li className="project-element" key={elem.id}>
					<img src={elem.src}/>
				</li>
			);
		});

		return (
			<Masonry
				className={'my-gallery-class'} 
				elementType={'div'}
				options={masonryOptions}
				onClick={this.handleClick}
				disableImagesLoaded={false}
			>
				{childElements}
			</Masonry>
		);
	}
}
