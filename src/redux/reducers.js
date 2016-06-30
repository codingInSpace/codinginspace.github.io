import { combineReducers } from 'redux';

const projectsReducer = (state = [], action) => {
	return state;
}

const classReducer = (state = "", action) => {
	switch(action.type) {
		case 'UPDATE_ACTIVE':
			state = action.payload
			break;
	}

	return state;
}

const scrollReducer = (state = {}, action) => {
	switch(action.type) {
		case 'SET_NODE_FOR_SCROLL':
			state = {
				done: false,
				component: action.payload
			}
			break;

		case 'SCROLLED_TO_NODE':
			state = {
				done: true,
				component: null
			}
			break;
	}

	return state;
}

const reducers = combineReducers({
	projects: projectsReducer,
	activeClass: classReducer,
	gotoComponent: scrollReducer
})	

export default reducers
