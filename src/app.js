import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import {deepOrange500} from 'material-ui/styles/colors';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Message from './components/message';
import AppBarHeader from './components/header';
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

class App extends React.Component {
	render() {
		return (
			<MuiThemeProvider muiTheme={muiTheme}>
				<div>
					<AppBarHeader/>
					<Message/>
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

