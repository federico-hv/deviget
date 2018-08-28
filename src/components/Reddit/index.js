import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as redditActions from '../../actions/reddit'; 

class Reddit extends Component {

	componentDidMount() {
		this.props.fetchPosts();
	}	

	render() {
		const { posts, dismissPost, dismissAll } = this.props;
		
		return (
			<div>
				<div>
					<div>Reddit Posts</div>
					<div>
						<ul>
							{
								posts.map((el, i) => (
									<li key={i}>
										<div>
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
  }, [])
});


export default connect(
  mapStateToProps,
  redditActions
)(Reddit);

