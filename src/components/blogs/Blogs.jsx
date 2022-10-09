import React from 'react';
import Posts from '../posts/Posts';
import './Blogs.css'
import { useEffect } from 'react';


const Blogs = ({bool,somefunc}) => {
  return (
    <div className="blogs ">
      <Posts />
    </div>
  );
};

export default Blogs;
