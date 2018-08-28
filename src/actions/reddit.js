import { serviceFetchPosts } from '../services/reddit';

const receivePosts = (res) => ({
  type: 'RECEIVE_POSTS',
  data: res.data.children.map(el => el.data)
});

export const fetchPosts = () => {
  return async (dispatch, getState) => {
    try {
			const res = await serviceFetchPosts();
			console.log('RESP: ', res.data.children);
      dispatch(receivePosts(res));
    }catch(err){
      throw new Error(err);
    }
  }
};
