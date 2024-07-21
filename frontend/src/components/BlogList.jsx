import React, { useState, useEffect } from 'react';
import BlogPost from './BlogPost';
import Pagination from './Pagination';
import './BlogList.css';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 9; 

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/blogs?page=${currentPage}&limit=${limit}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchBlogs();
  }, [currentPage, limit]); 

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

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
        onPageChange={handlePageChange} 
      />
    </div>
  );
};

export default BlogList;


