import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Masonry from 'react-masonry-component';
import { connect } from 'react-redux';
import ProjectElement from './ProjectElement';
import { Grid, Row, Col } from 'react-bootstrap';

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

	render() {
		var childElements = this.props.projects.map(function(elem){
			return (
				<ProjectElement elem={elem} key={elem.id} />
			);
		});

		return (
			<Grid>
				<Row>
					<Col smOffset={1}>
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
					</Col>
				</Row>
			</Grid>
		);
	}
}

const mapStateToProps = state => {
	return { 
		projects: state.projects
	};
}

export default connect(mapStateToProps, null)(ProjectsGallery);

