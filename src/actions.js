// Action creators
//export function loadProjects(data) {
  //return {
    //type: 'LOAD_PROJECTS',
    //data
  //}
//}

export function updateActive(payload) {
	return {
		type: 'UPDATE_ACTIVE',
		payload
	}
}

export function toggleDialogView(payload) {
	return {
		type: 'TOGGLE_DIALOG_VIEW',
		payload
	}
} 

export function setNodeForScroll(payload) {
	return {
		type: 'SET_NODE_FOR_SCROLL',
		payload
	}
}

export function scrolledToNode(payload) {
	return {
		type: 'SCROLLED_TO_NODE',
		payload
	}
}
