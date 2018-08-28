import React from 'react';


const VisiblePost = ({post}) => (
	<div style={{ flex: 10 }}>
		<div>{post ? post.author : null}</div>
		<div>{post ? <img src={post.thumbnail} alt=""/> : null	}</div>
		<div>{post ? post.title : null}</div>
	</div>
);

export default VisiblePost;