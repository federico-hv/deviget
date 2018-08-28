import React from 'react';


const PostList = ({posts}) => (
	<div>
		<ul>
			{
				posts.map((el, i) => (
					// <li key={i} onClick={()=>checkRedditPost(el.id)} style={{border: '1px solid purple'}}>
					<li key={i} style={{border: '1px solid purple'}}>
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
								{/* <button onClick={()=>dismissPost(el.id)}>Dismiss Post</button> */}
								<button>Dismiss Post</button>
								<div>Comments {el.num_comments}</div>
							</div>
						</div>
					</li>
				))
			}
		</ul>
	</div>
);

export default PostList;