import React from 'react';
import uid from '../utils/uniqueIdHack';
import { Card, CardMedia, CardTitle, CardText  } from 'react-toolbox/lib/card';
import Dialog from 'react-toolbox/lib/dialog';

class ProjectElement extends React.Component {
	state = {
    dialogActive: false
  };

	toggleDialog = () => {
    this.setState({dialogActive: !this.state.dialogActive});
  }

	actions = [
    { label: "Close", onClick: this.toggleDialog }
  ];

	render() {
		const elem = this.props.elem;
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
				<span className="tag" style={colorStyle} key={uid()}>{tag}</span>
			);
		});

		return (
			<div>
				<div className="project-element">
					<Card style={{width: '100%'}} onClidk={this.toggleDialog}>
						<img src={elem.imgSrc}/>
						<CardTitle title={elem.title} />
						<CardText> {tags} </CardText>
					</Card>
				</div>

				<Dialog
          actions={this.actions}
          active={this.state.dialogActive}
          onEscKeyDown={this.toggleDialog}
          onOverlayClick={this.toggleDialog}
          title='My awesome dialog'
        >
        	<h2>title</h2>
          <p>Here you can add arbitrary content. Components like Pickers are using dialogs now.</p>
        </Dialog>
			</div>
		);
	}
}

export default ProjectElement
