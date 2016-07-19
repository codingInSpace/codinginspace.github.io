import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import * as axios from 'axios';

import Navbar from './containers/Navbar';
import Top from './components/Top';
import ProjectsGallery from './containers/ProjectsGallery';
import Contact from './components/Contact';

import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";
import initialState from './data/initialState.js';

import Scroll from 'react-scroll';
var Element = Scroll.Element;

const store = createStore(rootReducer, initialState,
	window.devToolsExtension && window.devToolsExtension()
);

class App extends React.Component {
	render() {
		return (
  	<Provider store={store}>
			<div>
				<Navbar/>
				<Element name="top">
					<Top/>
				</Element>
				<Element name="projects">
					<ProjectsGallery projects={store.getState().projects}/>
				</Element>
				<Element name="contact">
					<Contact/>
				</Element>
			</div>
		</Provider>
		);
	}
}

store.subscribe(() =>
  console.log(store.getState())
)

ReactDOM.render(<App/>, document.getElementById('app'));

