import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as redditActions from '../../actions/reddit'; 
import './styles.css';

class Post extends Component {
	
	render() {

		const { data, checkRedditPost, dismissPost } = this.props;

		return (
			<li onClick={()=>checkRedditPost(data.id)} style={{border: '1px solid purple'}}>
				<div className="post">
					<div className="line-one">
						<div>{data.author}</div>
						<div>{data.created_utc}</div>
					</div>
					<div className="line-two">
						<img src={data.thumbnail} alt=""/>
						<div>{data.title}</div>
					</div>
					<div className="line-three">
						<button onClick={()=>dismissPost(data.id)}>Dismiss Post</button>
						<div>Comments {data.num_comments}</div>
					</div>
				</div>
			</li>
		)
	}
}


export default connect(null, redditActions)(Post);

