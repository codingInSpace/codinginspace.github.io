// Action creators
//export function loadProjects(data) {
  //return {
    //type: 'LOAD_PROJECTS',
    //data
  //}
//}

export function updateActive(className) {
	return {
		type: 'UPDATE_ACTIVE',
		className
	}
}

export function newGotoComponent(payload) {
	return {
		type: 'NEW_GOTO_COMPONENT',
		payload
	}
}

export function wentToComponent(payload) {
	return {
		type: 'WENT_TO_COMPONENT',
		payload
	}
}
