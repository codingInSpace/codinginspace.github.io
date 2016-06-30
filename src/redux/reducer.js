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

		case 'SET_NODE_FOR_SCROLL':
			return {
				projects: state.projects,
				activeClass: state.actveClass,
				gotoComponent: {
					done: false,
					component: action.payload
				}
			}

		case 'SCROLLED_TO_NODE':
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
