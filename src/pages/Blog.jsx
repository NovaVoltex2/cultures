import React from 'react'
import {LeftColumn, RightColumn} from "../components/All"
import "./css/Blog.css"


const Blog = () => {
  return (
    <div>
      <div className="row-blog">
        <LeftColumn />
        <RightColumn />
      </div>
    </div>
  );
    };


export default Blog