import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as redditActions from '../../actions/reddit'; 
import includes from 'lodash/includes';
import './styles.css';

class Post extends Component {
	
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

		const {data, checkRedditPost, readPost } = this.props;
    return(
      <li onClick={()=>checkRedditPost(data.id)}>
        <div className={this.state.dismissed ? 'post dismissed' : 'post'}>
          <div className="line-one">
            <div className={readPost ? 'old-post' : 'new-post'}></div>
            <div className="author">{data.author}</div>
            <div>{data.created_utc}</div>
          </div>
          <div className="line-two">
           <img src={data.thumbnail} alt=""/>
           <div className="title">{data.title}</div>
          </div>
          <div className="line-three">
            {/* <IoIosCloseCircleOutline color="#8c5230" size="1.5em"/> */}
            <div className="dismiss-btn" onClick={(e)=>{
              e.stopPropagation();
              this.dismiss(data.id);
            }}>Dismiss Post</div>
            <div>Comments {data.num_comments}</div>
          </div>
        </div>
      </li>
    );
	}
}

const mapStateToProps = (state, ownProps) => { 
  return {
    readPost: includes(state.reddit.readPosts, ownProps.data.id)
  }
};


export default connect(mapStateToProps, redditActions)(Post);

