import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Button } from "../subcomponents";
import "./blog.css";
import "../layout.css";

const Blog = (props) => {
  const sampleData = [
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },

    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },

    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
    {
      title: "post title 1",
      description: "post 1 description",
    },
  ];

  const history = useHistory();
  const redirectTo = (path) => {
    history.push(path);
  };

  const [posts, setPosts] = useState([]);
  const { userId, email, userType } = useSelector((store) => store.user);
  useEffect(() => {
    setPosts(sampleData);
  }, []);

  return (
    <div className="hundredhundred flex-row-space-around-center flex-wrap">
      {userId && (
        <div className="flex-row-center-center add-post-button-container">
          <Button
            onClick={() => redirectTo("/blog/editor")}
            value="Add Post"
            type="primary"
            size="regular"
          />
        </div>
      )}
      {posts.map((post, i) => (
        <div key={i} className="flex-column-center-center post-container">
          <div>{post.title}</div>
          <div>{post.description}</div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
