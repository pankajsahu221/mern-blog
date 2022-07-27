import React from "react";
import { Link } from "react-router-dom";
import "./Post.css";

const Post = () => {
  return (
    <Link to="/post/:postId" className="link">
      <div className="post">
        <img
          className="postImg"
          src="https://static.scientificamerican.com/sciam/cache/file/4E0744CD-793A-4EF8-B550B54F7F2C4406_source.jpg"
          alt=""
        />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Music</span>
            <span className="postCat">Life</span>
          </div>
          <span className="postTitle">Lorem ipsum doalr its not the way</span>
          <hr />
          <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
          Lorem ipsum doalr its not the way Lorem ipsum doalr its not the way
          Lorem ipsum doalr its not the wayLorem ipsum doalr its not the way
          Lorem ipsum doalr its not the way Lorem ipsum doalr its not the way
          Lorem ipsum doalr its not the wayLorem ipsum doalr its not the way
        </p>
      </div>
    </Link>
  );
};

export default Post;
