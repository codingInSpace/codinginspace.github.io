import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { toggleDialogView } from '../actions.js';
import uid from '../utils/uniqueIdHack';
import { Card, CardMedia, CardTitle, CardText  } from 'react-toolbox/lib/card';
import Dialog from 'react-toolbox/lib/dialog';
import { Image } from 'react-bootstrap';
import Slider from 'react-slick';

class ProjectElement extends Component {
	state = {
    dialogActive: false
  };

	toggleDialog = () => {
		this.state = { 
			dialogActive: !this.state.dialogActive
		};

		this.props.toggleDialogView(this.state.dialogActive)
  }

	actions = [
    { label: "Close", onClick: this.toggleDialog }
  ];

	render() {
		const elem = this.props.elem;

		const sliderSettings = {
			dots: true,
      infinite: true,
			draggable: true,
			swipe: true,
			adaptiveHeight: true,
			centerMode: true,
      speed: 500,
      slidesToShow: 1,
			slidesToScroll: 1
		}

		let projectImages;
		
		if (elem.images.length > 1) {
			const images = elem.images.map((src) =>
				<div><Image src={src} key={uid()} responsive/></div>
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
						<img src={elem.images[0]}/>
						<CardTitle title={elem.title} />
						<CardText> {tags} </CardText>
					</Card>
				</div>

				<Dialog className="project-dialog"
          actions={this.actions}
          active={this.state.dialogActive}
          type="small"
          onEscKeyDown={this.toggleDialog}
          onOverlayClick={this.toggleDialog}
          title={elem.title}
        >
          <p>{elem.descShort}</p>
					{projectImages}
          <p>{elem.descLong}</p>
					{tags}
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
