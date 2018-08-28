import React, { Component } from 'react';


export default class Post extends Component {
	
	render() {

		const { data } = this.props;

		return (
			// <li onClick={()=>checkRedditPost(data.id)} style={{border: '1px solid purple'}}>
			<li style={{border: '1px solid purple'}}>
				<div>
					<div>
						<div>{data.author}</div>
						<div>{data.created_utc}</div>
					</div>
					<div>
						<img src={data.thumbnail} alt=""/>
						<div>{data.title}</div>
					</div>
					<div>
						{/* <button onClick={()=>dismissPost(data.id)}>Dismiss Post</button> */}
						<button>Dismiss Post</button>
						<div>Comments {data.num_comments}</div>
					</div>
				</div>
			</li>
		)
	}
}

