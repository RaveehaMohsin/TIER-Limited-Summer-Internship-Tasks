import React from 'react';
import './displayblog.css';

export default function DisplayBlog({ title, authorname, datepublished, FeaturedImage, content, Categories }) {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <img src={FeaturedImage} alt="Featured" className="blog-image" />
        <h1 className="blog-title">{title}</h1>
        <div className="blog-info">
          <p className="blog-author">By {authorname}</p>
          <p className="blog-date">Published on {new Date(datepublished).toDateString()}</p>
        </div>
      </div>
      <div className="blog-content">
        <p>{content}</p>
      </div>
      <div className="blog-categories">
        {Categories.map((category, index) => (
          <span key={index} className="blog-category">{category}</span>
        ))}
      </div>
    </div>
  )
}
