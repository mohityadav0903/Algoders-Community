import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css'

function Post({ post }) {
   return <div className='post card'>
        {post.photo && <img className='postImg card-img-top img-fluid' src={post.photo} alt=""/>}
        <div className="postInfo card-body">
            <div className="postcats">
                {post.categories.map((cat) => <span key={cat} className="postcat">{cat}</span>)}
            </div>
            <Link to={`/post/${post._id}`} className='link'><span className="postTitle card-title">{post.title}</span></Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className='postDesc card-text'>{post.desc}</p>
        </div>
  </div>;
}

export default Post;
