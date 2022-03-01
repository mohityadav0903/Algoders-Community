import React from "react";
import Post from "../post/Post";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "./Posts.css";
import { Puff } from "react-loader-spinner";

const Posts = () => {
  const { search } = useLocation();
  const [posts, setPosts] = useState([]);
  const [exec, setExec] = useState(false);

  const fetchPosts = async () => {
    const response = await axios.get(
      "https://algo-backend.herokuapp.com/api/posts" + search
    );
    console.log(response);
    setPosts(response.data);
  };
  useEffect(() => {
    fetchPosts();
  }, [search]);
  return (
    <div className="posts">
      {exec ? (
        posts.map((post) => <Post key={post._id} post={post} />)
      ) : (
        <div className="puffLoader">
          <Puff color="#2D81F7" height={75} width={75} className="loader" />
        </div>
      )}
    </div>
  );
};

export default Posts;
