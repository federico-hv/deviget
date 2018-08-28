import { serviceFetchPosts } from '../services/reddit';
import { normalize } from '../utils/normalize';
import { RECEIVE_POSTS, DISMISS_POST, DISMISS_ALL, CHECK_POST } from '../config/constants';



const receivePosts = ({allIds, byId}) => ({
  type: RECEIVE_POSTS,
  allIds,
  byId
});

export const dismissAll = () => ({
  type: DISMISS_ALL
});

export const dismissPost = (id) => {
	console.log(id)
	return {
		type: DISMISS_POST,
		id
	};
}

export const checkRedditPost = (id) => ({
  type: CHECK_POST,
  id
});

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
      const res = await serviceFetchPosts();
      const normalizedPosts = normalize(res.data);
      dispatch(receivePosts(normalizedPosts));
    }catch(err){
      throw new Error(err);
    }
  }
};
