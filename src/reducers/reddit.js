
import uniq from 'lodash/uniq';
import { RECEIVE_POSTS, DISMISS_POST, DISMISS_ALL, CHECK_POST } from '../config/constants';
  
const initialState = {
	allIds: [],
	byId: {},
	removedIds: [],
	visiblePost: null
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
		case DISMISS_ALL:
      return {
        ...state,
				removedIds: state.allIds,
				visiblePost: null
			}
		case CHECK_POST: 
      return {
        ...state,
        visiblePost: state.byId[action.id]
      }
		default:
		return state;
	}
};

  export default reddit;