import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import * as axios from 'axios';

import Navbar from './containers/Navbar';
import Header from './containers/Header';
import ProjectsGallery from './containers/ProjectsGallery';
import Footer from './containers/Footer';

import { createStore } from 'redux';
import combinedReducers from './reducers/combinedReducers';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";
import initialState from './data/initialState.js';

import { Grid, Row, Col } from 'react-bootstrap';

const store = createStore(combinedReducers, initialState,
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
							<ProjectsGallery projects={store.getState().projects}/>
						</Col>
					</Row>
				</Grid>
				<Footer/>
			</div>
		</Provider>
		);
	}
}

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(<App/>, document.getElementById('app'));

