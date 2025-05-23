import React from 'react';
import '../styles/Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <h2>Blog</h2>
      <div className="blog-post">
        <h3>Why I Chose Full Stack Development</h3>
        <p>Sharing my journey from curiosity to crafting full-fledged applications.</p>
      </div>
      <div className="blog-post">
        <h3>Top 5 UI Tips for Beginner Developers</h3>
        <p>Discover key design principles that elevate your frontend game.</p>
      </div>
    </div>
  );
};

export default Blog;