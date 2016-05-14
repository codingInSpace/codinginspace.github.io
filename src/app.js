import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBarHeader from './components/header';
import ProjectsGallery from './components/projectsgallery';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";

const muiTheme = getMuiTheme({
  palette: {
    primary1Color: deepOrange500,
  },
});

var projects = [
	{
		id: 1,
		src: "public/cat1.jpg"
	},
	{
		id: 2,
		src: "public/cat2.jpg"
	}
];

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
			<div>
				<AppBarHeader/>
				<ProjectsGallery projects={projects}/>
			</div>
			</MuiThemeProvider>
		);
	}
}

const store = createStore(reducer);

injectTapEventPlugin();
ReactDOM.render(
  	<Provider store={store}>
			<App/>
		</Provider>,
  document.getElementById('app')
);

