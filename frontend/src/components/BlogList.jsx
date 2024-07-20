import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import Pagination from './Pagination';
import './BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    fetch(`http://localhost:5000/api/blogs?page=${currentPage}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      })
      .catch(error => console.error('Error fetching blogs:', error));
  }, [currentPage]);

  return (
    <div className="blog-list">
      {blogs.length > 0 ? (
        <div className="blog-posts-container">
          {blogs.map(blog => (
            <BlogPost key={blog._id} blog={blog} />
          ))}
        </div>
      ) : (
        <p>No blogs available.</p>
      )}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default BlogList;


