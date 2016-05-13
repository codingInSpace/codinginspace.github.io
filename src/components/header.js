import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class AppBarHeader extends Component {
  render() {
		return (
			<header>
				<AppBar
					title="Jonathan Grangien"
					iconClassNameRight="muidocs-icon-navigation-expand-more"
				/>
			</header>
		);
	}
}

//export default AppBarHeader;
