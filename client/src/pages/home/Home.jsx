import React, { useState } from 'react';
import axios from 'axios';
import Posts from '../../components/posts/Posts';
// import SideBar from '../../components/sidebar/SideBar';
// import Header from '../../components/topbar/header/Header';
import AlgodersHome from '../../components/algoders/AlgodersHome';

import './Home.css';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import SideBar from '../../components/sidebar/SideBar';

const Home = () => {
    const {search} = useLocation();
    // console.log(location);
    const [posts, setPosts] = useState([]);

    const fetchPosts = async () => {
       const response = await axios.get('https://algo-backend.herokuapp.com/api/posts'+search);
      console.log(response);
      setPosts(response.data);
  }
    useEffect(() => {
        fetchPosts();
    },[search]);
   
    return <>
        {/* <Header /> */}
        <AlgodersHome />
        <div className='home'>
            <Posts posts={posts}/>
            <SideBar/>
          </div>
       </>;
};

export default Home;
