import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as redditActions from '../../actions/reddit'; 

class Reddit extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}	

	render() {
		const { posts, visiblePost, dismissPost, dismissAll, checkRedditPost } = this.props;

		return (
			<div style={{display: 'flex'}}>
				<div style={{ flex: 1 }}>
					<div>Reddit Posts</div>
					<div>
						<ul>
							{
								posts.map((el, i) => (
									<li key={i} onClick={()=>checkRedditPost(el.id)} style={{border: '1px solid purple'}}>
										<div>
											<div>
												<div>{el.author}</div>
												<div>{el.created_utc}</div>
											</div>
											<div>
												<img src={el.thumbnail} alt=""/>
												<div>{el.title}</div>
											</div>
											<div>
												<button onClick={()=>dismissPost(el.id)}>Dismiss Post</button>
												<div>Comments {el.num_comments}</div>
											</div>
										</div>
									</li>
								))
							}
						</ul>
					</div>
					<button onClick={dismissAll}>Dismiss all</button>
				</div>
				<div style={{ flex: 10 }}>
					<div>{visiblePost ? visiblePost.author : null}</div>
					<div>{visiblePost ? <img src={visiblePost.thumbnail} alt=""/> : null	}</div>
					<div>{visiblePost ? visiblePost.title : null}</div>
				</div>
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

