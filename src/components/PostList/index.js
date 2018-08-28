import React from 'react';
import Post from '../Post';
import v4 from 'uuid';
import './styles.css';

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