import React from 'react';
import Message from './components/message';
import { render } from 'react-dom';
import { createStore } from 'redux';
import reducer from './redux/reducer';
import { Provider } from 'react-redux';
import "!style!css!sass!./stylesheets/main.scss";

const store = createStore(reducer);

render(
  	<Provider store={store}>
  		<Message/>
		</Provider>,
  document.getElementById('app')
);

