import React,{useEffect,useState,useContext} from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import {Context} from '../../context/Context';
import { Link } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = () => {
    const {user}=useContext(Context);
    const location=useLocation();
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    const getPost = async () => {
        const response = await axios.get(`http://localhost:5000/api/posts/${path}`);
        console.log(response);
        setPost(response.data);
        setTitle(response.data.title);
        setDesc(response.data.desc);
    }
    useEffect(() => {
        getPost();
      }, [path]);  
    const PF = 'http://localhost:5000/images/'; 
    const handleDelete=async ()=>{
        try {
            await axios.delete(`http://localhost:5000/api/posts/` + path,{data:{ username: user.username }} );
            window.location.replace('/');
        } catch (error) {
        }
    }
    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/api/posts/` + path,{ username: user.username,title,desc });
            setUpdateMode(false);
        } catch (error) {
        }
    }
    return <div className='singlePost'>
        <div className="singlePostWrapper">
            {post.photo && <img className='singlepostImg' src={PF + post.photo} alt=""/>}
            {updateMode ? <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="singlePostTitleInput" autoFocus/>:(<h1 className="singlePostTitle">
                {title}
                {post.username === user?.username && <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit" onClick={()=>setUpdateMode(true)}></i>
                    <i className="singlePostIcon fas fa-trash" onClick={handleDelete}></i>
                </div>}

            </h1>)}
           
            <div className="singlePostInfo">
                <Link to={`/?user=${post.username}`} className='link'>
                   <span className='singlePostAuthor'>Author : <b>{post.username}</b> </span>
                   </Link>
              
            <span className='singlePostDate'>{new Date(post.createdAt).toDateString()}</span>
            </div>
            {updateMode ? (
          <textarea
            className="singlePostDescInput"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{desc}</p>
            )}
            {updateMode&& <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
          </div>
  </div>;
};

export default SinglePost;
