import React, { Component } from 'react';
import Waypoint from 'react-waypoint';
import { Motion, spring } from 'react-motion';

class MotionLine extends Component {
	state = {
		lineWillAnimate: false
	}

	lineInView = (props) => {
		console.log(props)
		if (props.currentPosition === "inside" && !this.state.lineWillAnimate) {
			this.state = {
				lineWillAnimate: true
			}
		}
	}

	lineGoesOutOfView = (props) => {
		if (this.state.lineWillAnimate) {
			this.state = {
				lineWillAnimate: false 
			}
		}
	}

	render() {
		return (
			<Motion defaultStyle={{x: 0}} style={{x: this.state.lineWillAnimate ? spring(50, [30, 30]) : 0}}>
				{({x}) => 
					<div>
						<div style={{
							borderRadius: '50px',
							backgroundColor: 'rgba(0, 150, 136, 0.7)',
							position: 'absolute',
							left: (50 - x/2) + '%',
							width: x + '%',
							height: '3px'
						}} />
						<Waypoint
							onEnter={this.lineInView}
							onLeave={this.lineGoesOutOfView}
						/>
					</div>
				}
			</Motion>
		)
	}
}

export default MotionLine

