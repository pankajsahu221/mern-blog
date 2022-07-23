import React from "react";
import "./SinglePost.css";

const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://cdn.britannica.com/49/179449-138-9F4EC401/Overview-Berlin.jpg?w=800&h=450&c=crop"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor
          sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
          ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit
          amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum
          dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit
          ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
          dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor
          sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
          ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit
          amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum
          dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit
          ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem ipsum
          dolor sit amet Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
          Lorem ipsum dolor sit ametLorem ipsum dolor sit amet Lorem ipsum dolor
          sit ametLorem ipsum dolor sit amet Lorem ipsum dolor sit ametLorem
          ipsum dolor sit amet
        </p>
      </div>
    </div>
  );
};

export default SinglePost;
