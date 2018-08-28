import React from 'react';
import imageError from '../../utils/imageError.js';
import './styles.css';

const VisiblePost = ({post, onClick}) => {
  if(post === null) return <div id="visible-post" onClick={onClick} className="visible-post"></div>

  let image;
  if(typeof post.preview !== 'undefined'){
    image = post.preview.images[0].source.url;
  }

  return (
    <div id="visible-post" onClick={onClick} className="visible-post">
      <div className="post-author">{post.author}</div>
      {image && <img className="image" src={image} alt="" onError={imageError}/>}
      <div className="post-title">{post.title}</div>
    </div>
  );
}


export default VisiblePost;