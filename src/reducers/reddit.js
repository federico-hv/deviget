
import uniq from 'lodash/uniq';
import { RECEIVE_POSTS, DISMISS_POST } from '../config/constants';
  
const initialState = {
	allIds: [],
	byId: {},
	removedIds: []
};
  
  
const reddit = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_POSTS:
			return {
				...state,
				allIds: uniq(state.allIds.concat(action.allIds)),
				byId: { ...state.byId, ...action.byId },
			}
		case DISMISS_POST:
      return {
        ...state,
        removedIds: state.removedIds.concat(action.id)
      };
		default:
		return state;
	}
};

  export default reddit;