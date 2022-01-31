import React from 'react';
import {Link} from 'react-router-dom';
import './Post.css'

function Post({post}) {
    return <div className='post'>
        {post.photo && <img className='postImg' src={post.photo} alt=""/>}
        <div className="postInfo">
            <div className="postcats">
                {post.categories.map((cat) => <span key={cat} className="postcat">{cat}</span>)}
            </div>
            <Link to={`/post/${post._id}`} className='link'><span className="postTitle">{post.title}</span></Link>
            <hr />
            <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            <p className='postDesc'>{post.desc}</p>
        </div>
  </div>;
}

export default Post;
