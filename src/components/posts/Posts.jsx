import React from 'react';
import Post from '../post/Post';
import { useLocation} from 'react-router-dom';
import { useEffect,useState } from 'react';
import axios from 'axios';
import './Posts.css';

const Posts = () => {
    const {search} = useLocation();
    const [posts, setPosts] = useState([]);
  
      const fetchPosts = async () => {
         const response = await axios.get('https://algo-backend.herokuapp.com/api/posts'+search);
        console.log(response);
        setPosts(response.data);
    }
      useEffect(() => {
          fetchPosts();
      },[search]);
    return <div className='posts'>
        {posts.map((post) => <Post key={post._id} post={post}/>)} 
</div>;
};

export default Posts;
