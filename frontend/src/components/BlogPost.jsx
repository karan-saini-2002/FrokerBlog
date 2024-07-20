import React from 'react';
import './BlogPost.css';

const BlogPost = ({ blog }) => {
  return (
    <div className="blog-post">
      <img src={blog.image || '/placeholder.jpg'} alt={blog.title} className="blog-post-image" />
      <div className="blog-post-content">
        <p className="blog-post-date">by {blog.author} - {new Date(blog.date).toLocaleDateString()}</p>
        <h2 className="blog-post-title">{blog.title}</h2>
        <p className="blog-post-introduction">{blog.introduction}</p>
        <a href="#" className="read-more">Read More...</a>
      </div>
    </div>
  );
};

export default BlogPost;




