import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDialogView } from '../actions.js';

import { Image, Row, Col } from 'react-bootstrap';
import { Card, CardMedia, CardTitle, CardText  } from 'react-toolbox/lib/card';
import { Button } from 'react-toolbox/lib/button';
import RightSliderButton from '../components/RightSliderButton';
import LeftSliderButton from '../components/LeftSliderButton';

import Dialog from 'react-toolbox/lib/dialog';
import Slider from 'react-slick';
import uid from '../utils/uniqueIdHack';

class ProjectElement extends Component {
	state = {
    dialogActive: false
  };

	toggleDialog = () => {
		this.state = { 
			dialogActive: !this.state.dialogActive
		};

		// When dialog opened, check if several images
		// are loaded in a slider, and force an update.
		// This is because the initial image fails to load completely
		if (this.state.dialogActive) {
			if (this.props.elem.images.length > 1) {
				var self = this;
				setTimeout(function(){
					self.forceUpdate();
				}, 500);
			}
		}

		this.props.toggleDialogView(this.state.dialogActive)
  }

	actions = [
    { label: "Close", onClick: this.toggleDialog }
  ];

	render() {
		const elem = this.props.elem;

		const sliderSettings = {
			dots: true,
			arrows: true,
			prevArrow: <LeftSliderButton/>,
			nextArrow: <RightSliderButton/>,
      infinite: true,
			draggable: true,
			swipe: true,
			adaptiveHeight: true,
			centerMode: false,
      speed: 500,
      slidesToShow: 1,
			slidesToScroll: 1
		}

		let projectImages;
		if (elem.images.length > 1) {
			const images = elem.images.map((src) =>
				<Image src={src} key={uid()} responsive/>
			)

			projectImages = (
				<Slider {...sliderSettings}>
					{images}
				</Slider>
			)

		} else {
      projectImages = (
				<Image src={elem.images[0]} responsive/>
			)
		}

		const GithubIcon = () => (
			<svg viewBox="0 0 284 277">
				<g><path d="M141.888675,0.0234927555 C63.5359948,0.0234927555 0,63.5477395 0,141.912168 C0,204.6023 40.6554239,257.788232 97.0321356,276.549924 C104.12328,277.86336 106.726656,273.471926 106.726656,269.724287 C106.726656,266.340838 106.595077,255.16371 106.533987,243.307542 C67.0604204,251.890693 58.7310279,226.56652 58.7310279,226.56652 C52.2766299,210.166193 42.9768456,205.805304 42.9768456,205.805304 C30.1032937,196.998939 43.9472374,197.17986 43.9472374,197.17986 C58.1953153,198.180797 65.6976425,211.801527 65.6976425,211.801527 C78.35268,233.493192 98.8906827,227.222064 106.987463,223.596605 C108.260955,214.426049 111.938106,208.166669 115.995895,204.623447 C84.4804813,201.035582 51.3508808,188.869264 51.3508808,134.501475 C51.3508808,119.01045 56.8936274,106.353063 65.9701981,96.4165325 C64.4969882,92.842765 59.6403297,78.411417 67.3447241,58.8673023 C67.3447241,58.8673023 79.2596322,55.0538738 106.374213,73.4114319 C117.692318,70.2676443 129.83044,68.6910512 141.888675,68.63701 C153.94691,68.6910512 166.09443,70.2676443 177.433682,73.4114319 C204.515368,55.0538738 216.413829,58.8673023 216.413829,58.8673023 C224.13702,78.411417 219.278012,92.842765 217.804802,96.4165325 C226.902519,106.353063 232.407672,119.01045 232.407672,134.501475 C232.407672,188.998493 199.214632,200.997988 167.619331,204.510665 C172.708602,208.913848 177.243363,217.54869 177.243363,230.786433 C177.243363,249.771339 177.078889,265.050898 177.078889,269.724287 C177.078889,273.500121 179.632923,277.92445 186.825101,276.531127 C243.171268,257.748288 283.775,204.581154 283.775,141.912168 C283.775,63.5477395 220.248404,0.0234927555 141.888675,0.0234927555" /></g>
			</svg>
		);

		let sourceButton;
		if (elem.source !== "") {
			sourceButton = (
				<Button href={elem.source} target='_blank' raised>
					<GithubIcon /> Source
				</Button>
			)
		} else {
			sourceButton = null
		}

		let linkButton;
		if (elem.link !== "") {
			linkButton = (<Button icon='launch' href={elem.link} target='_blank' label={elem.linkLabel} raised primary />)
		} else {
			linkButton = null
		}

		const tags = elem.tags.map((tag) => {
			let bgcolor = '';
			switch (tag) {
				case 'Web':
					bgcolor = "#8764aa";
					break;
				case "C++":
					bgcolor = "#85aad0";
					break;
				case "OpenGL":
					bgcolor = "#eeaacc";
					break;
				case "WebGL":
					bgcolor = "#907ea1";
					break;
				case "App":
					bgcolor = "#a96161";
					break;
				case "Android":
					bgcolor = "#a85050";
					break;
				case "Unity":
					bgcolor = "#5e9b8d";
					break;
				case "VR":
					bgcolor = "#5a8dad";
					break;
				default:
					bgcolor = "#4d4d4d";
					break;
			}

			const colorStyle = {
				backgroundColor: bgcolor
			}

			return (
				<span className="project-tag" style={colorStyle} key={uid()}>{tag}</span>
			);
		});

		return (
			<div>
				<div className="project-element">
					<Card style={{width: '100%'}} onClick={this.toggleDialog}>
						<img src={elem.images[ elem.coverIndex ]}/>
						<CardTitle title={elem.title} />
						<CardText> {tags} </CardText>
					</Card>
				</div>

				<Dialog className="project-dialog"
          actions={this.actions}
          active={this.state.dialogActive}
          type="normal"
          onEscKeyDown={this.toggleDialog}
          onOverlayClick={this.toggleDialog}
          title={elem.title}
        >
        	<Row>
        		<Col xs={10}>
							<p>{elem.descShort}</p>
						</Col>
						<Col xs={2}>
							{tags}
						</Col>
					</Row>

					{projectImages}

					<Row>
						<Col sm={9} md={8}>
							<p className="project-desclong">{elem.descLong}</p>
						</Col>

						<Col sm={3} md={4}>
							<div className="project-buttons">
								{linkButton}
								{sourceButton}
							</div>
						</Col>
					</Row>
        </Dialog>
			</div>
		);
	}
}

ProjectElement.propTypes = {
	toggleDialogView: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
	return { 
		aDialogVisible: state.aDialogVisible
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		toggleDialogView: (data) => {
			dispatch(toggleDialogView(data))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectElement)
