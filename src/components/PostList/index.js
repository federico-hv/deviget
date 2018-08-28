import React from 'react';
import Post from '../Post';
import v4 from 'uuid';

const PostList = ({posts}) => (
	<div>
		<ul>
			{
				posts.map((el, i) => <Post key={v4()} data={el} />)
			}
		</ul>
	</div>
);

export default PostList;