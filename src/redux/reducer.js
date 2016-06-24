export default function reducer(state = {}, action) {
	switch (action.type) {
    //case 'LOAD_PROJECTS':
			//return {
				//projects: action.projects
			//}
		case 'UPDATE_ACTIVE':
			return {
				projects: state.projects,
				activeClass: action.className
			}
				
		default:
			return state;
	}
}
