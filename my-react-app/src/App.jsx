import React, { useState, useEffect } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import './App.css'; // Don't forget this import!

const App = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="page-container">
      
      {/* Background Blobs */}
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      {/* Main Capsule Container */}
      <div className={`capsule ${loaded ? 'loaded' : ''}`}>
        
        {/* Shine Overlay */}
        <div className="shine-overlay"></div>

        {/* Content */}
        <div className="capsule-content">
          
          {/* Grid Background */}
          <div className="grid-bg"></div>

          {/* Badge */}
          <div className="badge">
            <Sparkles size={16} color="#22d3ee" />
            <span className="badge-text">New Batch</span>
          </div>

          {/* Heading */}
          <h1 className="main-title">
            Learners Today, <span className="highlight-text">Leaders Tomorrow</span>
          </h1>

          {/* Paragraph */}
          <p className="description">
            With our continuous research and development, we provide you with an excellent Aptitude training using modern methodologies.
          </p>

          {/* Button */}
          <button className="cta-button">
            Get Started <ArrowRight size={16} className="arrow-icon" />
          </button>

        </div>
      </div>

    </div>
  );
};

export default App;