import React from 'react';
import SideBar from '../../components/sidebar/SideBar';
import SinglePost from '../../components/singlepost/SinglePost';
import './singlepostpage.css';

const SinglePostPage = () => {
  return <div className='single'>
      <SinglePost/>
     {/* <SideBar/> */}
  </div>;
};

export default SinglePostPage;
