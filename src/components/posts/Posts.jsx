import React from "react";
import Post from "../post/Post";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";
import { Puff } from "react-loader-spinner";
import { Link } from 'react-router-dom';
const Posts = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [exec, setExec] = useState(false);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://algoders-backend.vercel.app/api/posts" + search
    );
    console.log(response);
    setPosts(response.data);
    setExec(true);
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);
  return (
    <div>
      <div className="posts">
        {exec ? (
          posts.map((post) => <Post key={post._id} post={post} />)
        ) : (
          <div className="puffLoader">
            <Puff color="#2D81F7" height={100} width={100} className="loader" />
          </div>
        )}
      </div>
      <div>
        {/* http://localhost:3000/blogs */}
        {window.location.href !== "https://www.algoderscommunity.tech/blogs" ? (
          <div className="AllBlog">
            <Link to="/blogs"><button className="Blog-But"><span className="Arrow">&#11176;</span>All the Blogs</button></Link>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div >
  );
};

export default Posts;
