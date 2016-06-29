export default function reducer(state = {}, action) {
	switch (action.type) {
    //case 'LOAD_PROJECTS':
			//return {
				//projects: action.projects
			//}
		case 'UPDATE_ACTIVE':
			return {
				projects: state.projects,
				activeClass: action.className,
				gotoComponent: state.gotoComponent
			}

		case 'NEW_GOTO_COMPONENT':
			return {
				projects: state.projects,
				activeClass: state.actveClass,
				gotoComponent: {
					done: false,
					component: action.payload
				}
			}

		case 'WENT_TO_COMPONENT':
			return {
				projects: state.projects,
				activeClass: state.activeClass,
				gotoComponent: {
					done: true,
					component: null 
				}
			}
				
		default:
			return state;
	}
}
