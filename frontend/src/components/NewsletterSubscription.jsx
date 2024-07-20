import React from 'react';
import './NewsletterSubscription.css';

const NewsletterSubscription = () => {
  return (
    <div className="page-container">
      <div className="newsletter-subscription">
        <img src="sub.png" alt="Newsletter" className="subscription-image" />
        <div className="subscription-content">
          <h2>Subscribe to our newsletter to get the latest updates and news</h2>
          <div className="input-container">
            <input type="email" placeholder="Enter your email" className="newsletter-input" />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSubscription;




