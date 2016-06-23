import React, { PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { loadProjects } from '../redux/actions.js';
import ProjectElement from '../components/ProjectElement';

var masonryOptions = {
    transitionDuration: 150,
		gutter: 20,
		//columnWidth: 300,
    //fitWidth: true,
    itemSelector: ".project-element"
};

class ProjectsGallery extends React.Component {
	constructor(props) {
		super(props);
		
		// Log received props
		//console.log(this.props.projects);
	}

	render() {
		var childElements = this.props.projects.map(function(elem){
			return (
				<ProjectElement elem={elem} key={elem.id} />
			);
		});

		return (
				<Masonry
					className={'gallery'} 
					elementType={'div'}
					options={masonryOptions}
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

