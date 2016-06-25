const updatePushState = mHash => {
	if (window.location.hash !== mHash) {
		if (history.pushState)
			history.pushState(null, null, mHash);
	}
}

export default updatePushState
