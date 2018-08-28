
import React from 'react';
import Post from '../Post';
import v4 from 'uuid';
import './styles.css';


const PostList = ({posts,className}) => (
  <div className={className}>
    <ul>
      {
        posts.map((el, i) => <Post key={v4()} post={el} />)
      }
    </ul>
  </div>
);

export default PostList;