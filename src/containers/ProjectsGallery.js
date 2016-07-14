import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import { updateActive, scrolledToNode } from '../actions.js';
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
	}

	componentDidUpdate() {
		if (!this.props.gotoComponent.done && this.props.gotoComponent.component === "projects") {
			ReactDOM.findDOMNode(this).scrollIntoView();
			this.props.completeGotoComponent();
		}
	}

	handleScroll = (props) => {
		// Jump from Top via button
		if (props.previousPosition === "below" && props.currentPosition === "inside") {
			this.props.updateClass("projects")
		}
	}

	render() {
		var childElements = this.props.projects.map(function(elem){
			return (
				<ProjectElement elem={elem} key={elem.id} />
			);
		});

		return (
			<div>
				<Waypoint onEnter={this.handleScroll} />
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
			</div>
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
		updateClass: (newClass) => {
			dispatch(updateActive(newClass))
		},

		completeGotoComponent: () => {
			dispatch(scrolledToNode(null))
		}
	}

}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsGallery);

