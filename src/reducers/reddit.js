import {
  DISMISS_POST,
  RECEIVE_POSTS,
  CHECK_POST,
  DISMISS_ALL
} from '../config/constants';
import uniq from 'lodash/uniq';


const initialState = {
  allIds: [],
  removedIds: [],
  readPosts: [],
  byId: {},
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
        removedIds: state.removedIds.concat(action.id),
        // visiblePost: state.visiblePost.id === action.id ? null : state.visiblePost.id 
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
        visiblePost: state.byId[action.id],
        readPosts: state.readPosts.concat([action.id])
      }
    default:
      return state;
  }
};

export default reddit;