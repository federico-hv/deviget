import React from 'react';
import Post from '../Post';

const PostList = ({posts}) => (
	<div>
		<ul>
			{
				posts.map((el, i) => <Post key={i} data={el} />)
			}
		</ul>
	</div>
);

export default PostList;