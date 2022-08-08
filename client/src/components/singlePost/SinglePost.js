import React, { useEffect, useState } from "react";
import "./SinglePost.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const SinglePost = () => {
  const PF = "http://localhost:8000/images/";

  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const getData = async () => {
      const res = await axios.get(`/posts/${postId}`);
      setPost(res.data);
    };
    getData();
  }, []);

  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        {post.photo && (
          <img className="singlePostImg" src={PF + post.photo} alt="" />
        )}

        <h1 className="singlePostTitle">
          {post.title}
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author:
            <Link to={`/?user=${post.username}`} className="link">
              <b>{post.username}</b>
            </Link>
          </span>
          <span className="singlePostDate">
            {new Date(post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDesc">{post.desc}</p>
      </div>
    </div>
  );
};

export default SinglePost;
