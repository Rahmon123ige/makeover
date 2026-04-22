import React from 'react';
import { Star } from 'lucide-react';
import './SpaStats.css';
import r1 from '../../../public/r1.png'
import r2 from '../../../public/r2.jpg'
import r3 from '../../../public/r4.jpg'     

const SpaStats = () => {
  return (
    <section className="spa-stats">
      <div className="spa-stats-container">
        {/* Top Badge */}
        <div className="spa-badge">
          <span className="spa-badge-dot"></span>
          <span className="spa-badge-text">EXPERT CARE FOR EVERY SKIN JOURNEY</span>
        </div>

        {/* Heading */}
        <h2 className="spa-heading">
          Delivering consistent, high-quality beauty and spa experiences
          our clients rely on — built on attention to detail,
          professionalism, and results.
        </h2>

        {/* Reviews */}
        <div className="spa-reviews">
          <div className="spa-avatars">
            <img src={r1} alt="client" className="spa-avatar" />
            <img src={r2} alt="client" className="spa-avatar" />
            <img src={r3} alt="client" className="spa-avatar" />
            <div className="spa-avatar spa-rating-circle">
              <span>4.9</span>
            </div>
          </div>
          <div className="spa-rating-info">
            <div className="spa-stars">
              <Star size={14} fill="#C8923C" stroke="#C8923C" />
              <Star size={14} fill="#C8923C" stroke="#C8923C" />
              <Star size={14} fill="#C8923C" stroke="#C8923C" />
              <Star size={14} fill="#C8923C" stroke="#C8923C" />
              <Star size={14} fill="#C8923C" stroke="#C8923C" />
            </div>
            <p className="spa-reviews-text">669 Google reviews from clients</p>
          </div>
        </div>

        {/* Image with stats */}
        <div className="spa-image-card">
          {/* <img
            src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=1400&q=80"
            alt="Spa facial treatment"
            className="spa-image"
          /> */}
          <video
         className="spa-image"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/face.mp4" type="video/mp4" />
      </video>
          <div className="spa-image-overlay"></div>
          <div className="spa-stats-grid">
            <div className="spa-stat-item">
              <h3 className="spa-stat-number">12+</h3>
              <p className="spa-stat-label">YEARS OF EXPERIENCE</p>
            </div>
            <div className="spa-stat-item">
              <h3 className="spa-stat-number">6K+</h3>
              <p className="spa-stat-label">CLIENTS</p>
            </div>
            <div className="spa-stat-item">
              <h3 className="spa-stat-number">98%</h3>
              <p className="spa-stat-label">RETURNING RATE</p>
            </div>
            <div className="spa-stat-item">
              <h3 className="spa-stat-number">15+</h3>
              <p className="spa-stat-label">SERVICES</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpaStats;
