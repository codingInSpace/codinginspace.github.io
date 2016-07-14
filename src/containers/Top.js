import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import { updateActive, setNodeForScroll, scrolledToNode } from '../actions.js';
import { IconButton } from 'react-toolbox/lib/button';

class Top extends Component {
	componentDidUpdate() {
		if (!this.props.gotoComponent.done && this.props.gotoComponent.component === "top") {
			ReactDOM.findDOMNode(this).scrollIntoView();
			this.props.completeGotoComponent();
		}
	}

	handleButtonClick = () => {
		this.props.setGotoComponent("projects")
	}

  handleScroll = (props) => {
		if (props.event && props.event.type === "scroll") {
			if (props.currentPosition === "inside") {
				this.props.updateClass("top")
			} else if (props.currentPosition === "above") {
				this.props.updateClass("projects")
			}
		}
	}

  render() {
		return (
			<header id="top" ref="top">
				<Grid>
					<Row>
						<Col xs={8} xsOffset={2} sm={4} smOffset={4} >
							<Image src="public/jonathan_compressed.jpg" circle responsive/><br></br>
						</Col>
					</Row>
					<Waypoint
						onEnter={this.handleScroll}
						onLeave={this.handleScroll}
					/>
					<Row>
						<Col sm={6} smOffset={3}>
							<p className="top-title">Jonathan Grangien</p>
							<p>I am a MSc. student of Computer Science in Media Technology at Linköping University, Sweden. I like programming, mainly websites, applications and graphics.</p>
						</Col>
					</Row>
				</Grid>

				<IconButton 
					icon="keyboard_arrow_down" 
					className="top-arrow" 
					onClick={this.handleButtonClick}
					accent
				/>
			</header>
		);
	}
}

Top.propTypes = {
	updateClass: PropTypes.func.isRequired,
	completeGotoComponent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		activeClass: state.activeClass,
		gotoComponent: state.gotoComponent
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		updateClass: (newClass) => {
			dispatch(updateActive(newClass))
		},

		setGotoComponent: (comp) => {
			dispatch(setNodeForScroll(comp))
		},

		completeGotoComponent: () => {
			dispatch(scrolledToNode(null))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Top)
