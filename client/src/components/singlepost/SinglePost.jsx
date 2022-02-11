import React,{useEffect,useState,useContext} from 'react';
import { useLocation } from 'react-router';
import axios from 'axios';
import { Context } from '../../context/Context';
import parse from 'html-react-parser';
import { Link } from 'react-router-dom';
import './SinglePost.css'

const SinglePost = () => {
  const { user } = useContext(Context);
  console.log(user);
  const location = useLocation();
  
    const path = location.pathname.split("/")[2];
    const [post, setPost] = useState({});
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [updateMode, setUpdateMode] = useState(false);
    const getPost = async () => {
        const response = await axios.get(`https://algo-backend.herokuapp.com/api/posts/${path}`);
        console.log(response);
        setPost(response.data);
        setTitle(response.data.title);
        setDesc(response.data.desc);
    }
  console.log(post);
 useEffect(() => {
        getPost();
    }, [path]); 
  
  const handleDelete = async () => {
     try {
            await axios.delete(`https://algo-backend.herokuapp.com/api/posts/` + path,{data:{ username: user.username }} );
            window.location.replace('/');
        } catch (error) {
        }
    }
    const handleUpdate = async () => {
        try {
            await axios.put(`https://algo-backend.herokuapp.com/api/posts/` + path,{ username: user.username,title,desc });
            setUpdateMode(false);
        } catch (error) {
        }
    }
    return <div className='singlePost container-fluid flex justify-content-center'>
        <div className="singlePostWrapper ">
            {post.photo && <img className='singlepostImg' src={post.photo} alt=""/>}
            {updateMode ? <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="singlePostTitleInput form-control" autoFocus/>:(<h1 className="singlePostTitle">
                {title}
                {post.username === user?.username && <div className="singlePostEdit">
              <span onClick={() => setUpdateMode(true)}>
            <i className="singlePostIcon far fa-edit" ></i>
             </span> 
             <span onClick={handleDelete} >
            <i className="singlePostIcon fas fa-trash" ></i>
            </span>
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
            className="singlePostDescInput form-control"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <p className="singlePostDesc">{parse(desc)}</p>
            )}
            {updateMode&& <button className="singlePostButton" onClick={handleUpdate}>Update</button>}
          </div>
  </div>;
};

export default SinglePost;