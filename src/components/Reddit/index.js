import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as redditActions from '../../actions/reddit'; 

class Reddit extends Component {

	componentDidMount() {
		const { dispatch, fetchPosts } = this.props;
		dispatch(fetchPosts());
	}	

	render() {
		const { posts } = this.props;

		return (
			<div>
				<div>
					<div>Reddit Posts</div>
					<div>
						<ul>
							{
								posts.map((el, i) => (
									<li>
										<div>
											<div>
												<img src={el.thumbnail} alt=""/>
												<div>{el.title}</div>
											</div>
											<div>
												<div>Dismiss Post</div>
												<div>Comments {el.num_comments}</div>
											</div>
										</div>
									</li>
								))
							}
						</ul>
					</div>
					<div>Dismiss all</div>
				</div>
			</div>
		);
	}

}


const mapStateToProps = (state) => ({
  posts: Object.keys(state.reddit.byId).map(key => state.reddit.byId[key])
});

const mapDispatchToProps = (dispatch) => Object.assign({}, redditActions, { dispatch });

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Reddit);

