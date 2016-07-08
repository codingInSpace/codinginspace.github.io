import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import * as axios from 'axios';

import Navbar from './containers/Navbar';
import Header from './containers/Header';
import ProjectsGallery from './containers/ProjectsGallery';
import Footer from './containers/Footer';

import { createStore } from 'redux';
import reducers from './redux/reducers';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";
import projects from './data/projects.js';

import { Grid, Row, Col } from 'react-bootstrap';

const initialState = {
	projects,
	activeClass: "top",
	aDialogVisible: false,
	gotoComponent: {
		done: true,
		component: null
	}
};

const store = createStore(reducers, initialState,
	window.devToolsExtension && window.devToolsExtension()
);

class App extends React.Component {
	render() {
		return (
  	<Provider store={store}>
			<div>
				<Navbar/>
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
		</Provider>
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

ReactDOM.render(<App/>, document.getElementById('app'));

