import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { loadProjects } from '../redux/actions.js';

var masonryOptions = {
    transitionDuration: 150
};

class ProjectsGallery extends React.Component {
	constructor(props) {
		super(props);
		
		// Log received props
		//console.log(this.props.projects);
	}

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

const mapStateToProps = state => {
	return { 
		projects: state.projects 
	};
}

const mapDispatchToProps = dispatch => {
	return {
		loadProjects: projects => dispatch(loadProjects(projects))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsGallery);

