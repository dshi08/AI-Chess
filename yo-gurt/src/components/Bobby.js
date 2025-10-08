import React from 'react';
import './Bobby.css';

function Bobby() {
  return (
    <div className="bobby-container">
      <div className="bobby-divider left"></div>
      <div className="bobby-content">
        <p className="bobby-text">
          "<span className="bobby-quote">Chess is Life</span>" <span className="bobby-author">- Bobby Fischer</span>
        </p>
      </div>
      <div className="bobby-divider right"></div>
    </div>
  );
}

export default Bobby;
