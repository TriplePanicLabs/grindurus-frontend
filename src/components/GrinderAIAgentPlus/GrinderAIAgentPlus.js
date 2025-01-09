import React from 'react';
import './GrinderAIAgentPlus.css';

function GrinderAIAgentPlus() {
  return (
    <div className="product-card">
      <div className="product-content">
        <h2 className="product-title">Grinder AI Agent Plus</h2>
        <div className="product-description">Advanced features for passive investors</div>
        <div className="feature-list">
          <div className="feature-item"> + Automatic Grind</div>
          <div className="feature-item"> + Automatic Rebalance</div>
          <div className="feature-item"> + Automatic Configuration</div>
          <div className="feature-item"> + Gives financial advice and analytics based on your position</div>
        </div>
      </div>
      <div className="product-footer">
        <span className="product-price">Price: $100 / month</span>
        <button className="button button-outline">Choose Plan</button>
      </div>
    </div>
  );
}

export default GrinderAIAgentPlus;