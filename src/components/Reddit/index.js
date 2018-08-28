import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as redditActions from '../../actions/reddit'; 
import PostList from '../PostList';
import VisiblePost from '../VisiblePost';
import './styles.css';

class Reddit extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}	

	render() {
		const { posts, visiblePost, dismissAll, checkRedditPost } = this.props;

		return (
			<div className="reddit-app">
				<div className={"list-container"}>
					<div className="list-title">Reddit Posts</div>
					<PostList posts={posts} className={"thumbnail-list"} />
					<div className="dismiss-all" onClick={dismissAll}>Dismiss all</div>
				</div>
				<VisiblePost post={visiblePost}  />
			</div>
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

