import React,{useEffect,useState} from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = () => {
    const location=useLocation();
    const path = location.pathname.split("/")[2];
    const [post,setPost] = useState({});
    const getPost = async () => {
        const response = await axios.get(`http://localhost:5000/api/posts/${path}`);
        console.log(response);
        setPost(response.data);
    }
    useEffect(() => {
        getPost();
   },[path]);              
    return <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && <img className='singlepostImg' src={post.photo} alt=""/>}
           <h1 className="singlePostTitle">
                {post.title}
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon fas fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <Link to={`/?user=${post.username}`} className='link'>
                   <span className='singlePostAuthor'>Author : <b>{post.username}</b> </span>
                   </Link>
              
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
                <p className='singlePostDesc'>{post.desc}</p>
            
      </div>
  </div>;
};

export default SinglePost;
