import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import * as axios from 'axios';

import {deepPurple500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import ProjectsGallery from './containers/ProjectsGallery';
import Footer from './components/Footer';

import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";
import projects from './data/projects.js';

import { Grid, Row, Col } from 'react-bootstrap';

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
					<Row>
						<Col smOffset={1}>
							<ProjectsGallery projects={store.getState()}/>
						</Col>
					</Row>
				</Grid>
				<Footer/>
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

