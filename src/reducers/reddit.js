
  
  
const initialState = {
	allIds: [],
	byId: {}
};
  
  
const reddit = (state = initialState, action) => {
	switch (action.type) {
		case 'RECEIVE_POSTS':
			return {
				byId: action.data
			}
		default:
		return state;
	}
};

  export default reddit;