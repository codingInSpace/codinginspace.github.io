import projects from './projects.js';

const initialState = {
	projects,
	activeClass: "top",
	aDialogVisible: false,
	gotoComponent: {
		done: true,
		component: null
	}
};

export default initialState
