import { combineReducers } from 'redux';
import projectsReducer from './projectsReducer'
import classReducer from './classReducer'
import dialogReducer from './dialogReducer'

const rootReducer = combineReducers({
	projects: projectsReducer,
	activeClass: classReducer,
	aDialogVisible: dialogReducer
})	

export default rootReducer
