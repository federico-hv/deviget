
import uniq from 'lodash/uniq';
import { RECEIVE_POSTS } from '../config/constants';
  
const initialState = {
	allIds: [],
	byId: {}
};
  
  
const reddit = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_POSTS:
			return {
				...state,
				allIds: uniq(state.allIds.concat(action.allIds)),
				byId: { ...state.byId, ...action.byId },
			}
		default:
		return state;
	}
};

  export default reddit;