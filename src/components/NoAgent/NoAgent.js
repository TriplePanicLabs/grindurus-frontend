import React from 'react';
import './NoAgent.css';

function NoAgent() {
  return (
    <div className="product-card">
      <div className="product-content">
        <h2 className="product-title">No Agent</h2>
        <div className="product-description">Basic features</div>
        <div className="feature-list">
          <div className="feature-item"> + Manual Grind</div>
          <div className="feature-item"> + Manual Rebalance</div>
          <div className="feature-item"> + Manual Configuratuon</div>
        </div>
      </div>
      <div className="product-footer">
        <span className="product-price">Price: Free</span>
        <button className="button button-outline">Choose Plan</button>
      </div>
    </div>
  );
}

export default NoAgent;