import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as redditActions from '../../actions/reddit'; 
import Swipeable from 'react-swipeable'
import './styles.css';
import PostList from '../PostList';
import VisiblePost from '../VisiblePost';

class Reddit extends Component {
  state = {
    swiped: false,
    allDismissed: false
  };

  componentDidMount() {
    this.props.fetchPosts();
  }

  showSideBarMobile = () => {
    this.setState({ swiped: true });
  }

  hideSideBarMobile = () => {
    this.setState({ swiped: false });
  }

  dismissAll = () => {
    this.setState({ allDismissed: true },function(){
      setTimeout(this.props.dismissAll, 500)
    });
  }

  render() {
    const { posts } = this.props;
    return (
      <Swipeable trackMouse onSwipedRight={this.showSideBarMobile} onTap={(e)=>{
        if(e.target.id === 'visible-post') {
          setTimeout(this.hideSideBarMobile, 200);
        }
      }}>
        <div className="reddit-app">
          <div className={this.state.swiped ? "list-container show" : "list-container"}>
          <div className="list-title">Reddit Posts</div>
            <PostList posts={posts} className={this.state.allDismissed ? 'thumbnail-list all-dismissed' : 'thumbnail-list'} />
            <div className="dismiss-all" onClick={this.dismissAll}>Dismiss all</div>
          </div>
          <VisiblePost post={this.props.visiblePost}  />
        </div>
      </Swipeable>
    );
  }
}


const mapStateToProps = (state) => ({
  posts: state.reddit.allIds.filter(el => {
    if (state.reddit.removedIds.includes(el)) return false;
    return true;
  }).reduce((acc, key, ind) => {
    acc[ind] = state.reddit.byId[key];
    return acc;
  }, []),
  visiblePost: state.reddit.visiblePost
});

export default connect(
  mapStateToProps,
  redditActions
)(Reddit);