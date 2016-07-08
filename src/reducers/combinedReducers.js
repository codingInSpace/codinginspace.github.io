import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer'
import classReducer from './classReducer'
import dialogReducer from './dialogReducer'
import scrollReducer from './scrollReducer'

const combinedReducers = combineReducers({
	projects: projectsReducer,
	activeClass: classReducer,
	aDialogVisible: dialogReducer,
	gotoComponent: scrollReducer
})	

export default combinedReducers
