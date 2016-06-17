import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import * as axios from 'axios';

import {deepPurple500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/header';
import ProjectsGallery from './containers/projectsgallery';

import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";
import projects from './data/projects.js';

import { Grid } from 'react-bootstrap';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
  },
});

const initialState = {
	projects
};

const store = createStore(reducer, initialState,
	window.devToolsExtension && window.devToolsExtension()
);

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
			<div>
				<Header/>
				<Grid>
					<ProjectsGallery projects={store.getState()}/>
				</Grid>
			</div>
			</MuiThemeProvider>
		);
	}
}

// Log the initial state
console.log(store.getState())

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
)

injectTapEventPlugin();
ReactDOM.render(
  	<Provider store={store}>
			<App/>
		</Provider>,
  document.getElementById('app')
);

