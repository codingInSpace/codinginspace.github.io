import React from 'react';
import Message from './components';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';
import { Provider } from 'react-redux';
//var css = require("./file.scss")
import "!style!css!sass!./stylesheets/main.scss";

const store = createStore(reducer);

render(
  	<Provider store={store}>
  		<Message/>
		</Provider>,
  document.getElementById('app')
);

