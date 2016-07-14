import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';

class RightSliderButton extends Component {
  render() {
  	return (
			<Button 
				{...this.props} 
				icon='keyboard_arrow_right' 
				className="slider-right" 
				floating 
				accent 
				mini
			/>
		);
  }
}

export default RightSliderButton
