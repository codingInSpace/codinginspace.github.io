import React, { Component } from 'react';
import { Button } from 'react-toolbox/lib/button';

class LeftSliderButton extends Component {
  render() {
		return (
			<Button {...this.props} icon='keyboard_arrow_left' className="slider-left" floating accent mini/>
		);
  }
}

export default LeftSliderButton
