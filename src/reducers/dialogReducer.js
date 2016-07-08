const dialogReducer = (state = false, action) => {
	switch(action.type) {
		case 'TOGGLE_DIALOG_VIEW':
			state = action.payload
			break;
	}

	return state;
}

export default dialogReducer
