import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import Icon from '@grove/react-font-awesome';
import Waypoint from 'react-waypoint';
import { connect } from 'react-redux';
import { updateActive, wentToComponent } from '../redux/actions.js';

class Header extends Component {

	componentDidUpdate() {
		if (!this.props.gotoComponent.done && this.props.gotoComponent.component === "top") {
			ReactDOM.findDOMNode(this).scrollIntoView();
			this.props.completeGotoComponent();
		}
	}

  onEnter() {
		if (this.props.activeClass !== "top") {
			this.props.updateClass("top");
		}

	}

  onLeave() {
		if (this.props.activeClass !== "projects") {
			this.props.updateClass("projects");
		}
	}
	
  render() {
		return (
			<header id="top" ref="top">
				<Grid>
					<Row>
						<Col xs={8} xsOffset={2} sm={4} smOffset={4} >
							<Image src="public/jonathan.png" circle responsive/><br></br>
						</Col>
					</Row>
					<Waypoint
						onEnter={this.onEnter.bind(this)}
						onLeave={this.onLeave.bind(this)}
					/>
					<Row>
						<Col sm={6} smOffset={3}>
							<p className="header-title">Jonathan Grangien</p>
							<p>I am a MSc. student of Computer Science in Media Technology at Linköping University, Sweden. I like programming, mainly websites, applications and graphics.</p>
						</Col>
					</Row>
				</Grid>

				<Icon className="header-arrow" name="chevron-down"/>
			</header>
		);
	}
}

Header.propTypes = {
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

		completeGotoComponent: () => {
			dispatch(wentToComponent(null))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
