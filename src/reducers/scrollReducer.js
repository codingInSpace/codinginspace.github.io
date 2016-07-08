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

export default scrollReducer
