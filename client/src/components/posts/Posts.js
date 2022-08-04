import React from "react";
import "./Posts.css";
import Post from "../post/Post";

const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((post, index) => (
        <Post key={index} post={post} />
      ))}
    </div>
  );
};

export default Posts;
