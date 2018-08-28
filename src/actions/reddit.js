import { serviceFetchPosts } from '../services/reddit';
import { normalize } from '../utils/normalize';
import { RECEIVE_POSTS } from '../config/constants';

const receivePosts = ({allIds, byId}) => ({
  type: RECEIVE_POSTS,
  allIds,
  byId
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
