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

