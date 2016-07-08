import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import { scrolledToNode } from '../actions.js';
import ProjectElement from './ProjectElement';

var masonryOptions = {
    transitionDuration: 150,
		gutter: 20,
		//columnWidth: 300,
    //fitWidth: true,
    itemSelector: ".project-element"
};

class ProjectsGallery extends Component {
	constructor(props) {
		super(props);
		
		// Log received props
		//console.log(this.props.projects);
	}

	componentDidUpdate() {
		if (!this.props.gotoComponent.done && this.props.gotoComponent.component === "projects") {
			ReactDOM.findDOMNode(this).scrollIntoView();
			this.props.completeGotoComponent();
		}
	}
	
	render() {
		var childElements = this.props.projects.map(function(elem){
			return (
				<ProjectElement elem={elem} key={elem.id} />
			);
		});

		return (
			<Masonry
				id="projects"
				ref="projects"
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

ProjectsGallery.propTypes = {
	completeGotoComponent: PropTypes.func.isRequired
}

const mapStateToProps = state => {
	return { 
		projects: state.projects,
		gotoComponent: state.gotoComponent
	};
}

const mapDispatchToProps = dispatch => {
	return {
		completeGotoComponent: () => {
			dispatch(scrolledToNode(null))
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsGallery);

