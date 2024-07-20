// App.js
import React from 'react';
import BlogList from './components/BlogList';
import NewsletterSubscription from './components/NewsletterSubscription';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="header">
        <img src="logo.png" alt="Froker Blogs" className="logo" />
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#blogs">Blogs</a>
          <a href="#discover">Discover Froker</a>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h3>
            <span className="orange-text">FROKER </span> 
            <span className="black-text">BLOG</span>
          </h3>
          <p>Articles covering the most recent updates and advancements</p>
        </section>
        <section className="shana">
        <p>Recent Posts</p>
        </section>
        <section id="blogs" className="blog-section">
         
          <BlogList />
        </section>
        <section className="newsletter-section">
          <NewsletterSubscription />
        </section>
      </main>
      <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="logo.png" alt="Company Logo" />
        </div>
        <div className="footer-links">
          <div className="footer-quicklinks">
            
            <ul>
            <h4>Quick Links</h4>
              <li> <a href="#home">Home</a></li>
              <li> <a href="#about">About Us</a></li>
              <li> <a href="#privacy">Privacy Policy</a></li>
              <li> <a href="#terms">Terms & Conditions</a></li>
              <li> <a href="#contacts">Contacts</a></li>
            </ul>
          </div>
          <div className="footer-contact">
            <h4>Contact Us</h4>
            <p>Whitefield, Bengaluru, 560066</p>
            <p>Email: <a href="mailto:support@froker.in">support@froker.in</a></p>
            </div>
            <div className="footer-scan">
              <h4>Scan To Download</h4>
              <img src="qr.jpg" alt="QR Code" />
            
          </div>
        </div>
      </div>
      <p>&copy; 2024 Froker Blogs. All rights reserved.</p>
    </footer>
    </div>
  );
}

export default App;
