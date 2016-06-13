import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
import * as axios from 'axios';

import {deepPurple500} from 'material-ui/styles/colors';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AppBarHeader from './components/header';
import ProjectsGallery from './components/projectsgallery';

import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";
//import * as projects from './components/projects';

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepPurple500,
  },
});

//var projects = [
	//{
		//id: 1,
		//src: "public/cat1.jpg"
	//},
	//{
		//id: 2,
		//src: "public/cat2.jpg"
	//}
//];

const store = createStore(reducer);

class App extends React.Component {
	constructor() {
		super();
		this.state = { data: [{id: 1, src: "public/cat1.jpg"}] };
	}

	loadProjects() {
		let that = this;
		
		axios.get('src/data/projects.json')
			.then(function (response) {
				console.log("got " + response);
				var newData = that.state.data.concat([response.data]); 
				that.setState({ data: newData })
				console.log("new state:" + that.state.data);
			});
			//.catch(function (response) {
				//console.log("caught " + response);
		//});
			
	}

	componentDidMount() {
		console.log("loading projects");
		this.loadProjects();
	}

	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
			<div>
				<AppBarHeader/>
				<ProjectsGallery projects={this.state.data}/>
			</div>
			</MuiThemeProvider>
		);
	}
}

injectTapEventPlugin();
ReactDOM.render(
  	<Provider store={store}>
			<App/>
		</Provider>,
  document.getElementById('app')
);

