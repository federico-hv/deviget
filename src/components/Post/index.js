import React, { Component } from 'react';
import * as redditActions from '../../actions/reddit'; 
import { connect } from 'react-redux';
import { formatTimeToString } from '../../utils/time';
import includes from 'lodash/includes';
import './styles.css';

class Post extends Component {
  constructor(props){
    super(props);
    this.state = {
      dismissed: false
    };
  }

  dismiss = (id) => {
    this.setState({ dismissed: true }, function(){
      setTimeout(this.props.dismissPost, 500, id)
    });
  }

  render() {
    const {post, checkRedditPost, readPost } = this.props;
    return(
      <li onClick={()=>checkRedditPost(post.id)}>
        <div className={this.state.dismissed ? 'post dismissed' : 'post'}>
          <div className="line-one">
            <div className={readPost ? 'old-post' : 'new-post'}></div>
            <div className="author">{post.author}</div>
            <div>{formatTimeToString(post.created_utc)}</div>
          </div>
          <div className="line-two">
           <img src={post.thumbnail} alt=""/>
           <div className="title">{post.title}</div>
          </div>
          <div className="line-three">
            <div className="dismiss-btn" onClick={(e)=>{
              e.stopPropagation();
              this.dismiss(post.id);
            }}>Dismiss Post</div>
            <div>Comments {post.num_comments}</div>
          </div>
        </div>
      </li>
    );
  }
}

const mapStateToProps = (state, ownProps) => { 
  return {
    readPost: includes(state.reddit.readPosts, ownProps.post.id)
  }
};

export default connect(mapStateToProps, redditActions)(Post);
