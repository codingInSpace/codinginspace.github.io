import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import * as axios from 'axios';

import Navbar from './containers/Navbar';
import Top from './components/Top';
import ProjectsGallery from './containers/ProjectsGallery';
import Contact from './components/Contact';

import { createStore } from 'redux';
import combinedReducers from './reducers/combinedReducers';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";
import initialState from './data/initialState.js';

const store = createStore(combinedReducers, initialState,
	window.devToolsExtension && window.devToolsExtension()
);

class App extends React.Component {
	render() {
		return (
  	<Provider store={store}>
			<div>
				<Navbar/>
				<Top/>
				<ProjectsGallery projects={store.getState().projects}/>
				<Contact/>
			</div>
		</Provider>
		);
	}
}

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(<App/>, document.getElementById('app'));

