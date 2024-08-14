import React from 'react';
import Viewblog from './viewblog';

export default function Allblogs() {
  const blogsdata = JSON.parse(localStorage.getItem("All Blogs")) || [];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' , marginTop: "2%" }}>
      {blogsdata.map((blog, index) => (     
        <Viewblog    
          key={index}
          title={blog.title}
          authorname={blog.authorname}
          imageurl={blog.FeaturedImage}
          blogcontent={blog.content}
          Id = {blog.id}
        />
      ))}
    </div>
  )
}
