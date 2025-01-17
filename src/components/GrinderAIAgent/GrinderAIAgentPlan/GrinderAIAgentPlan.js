import React from 'react';
import './GrinderAIAgentPlan.css';

function GrinderAIAgentPlan() {
  return (
    <div className="product-card product-card-featured">
      <div className="product-content">
        <h2 className="product-title">Grinder AI Agent</h2>
        <div className="product-description">Automated management for passive inverstors</div>
        <div className="feature-list">
          <div className="feature-item"> + Automatic Grind</div>
          <div className="feature-item"> + Automatic Rebalance</div>
          <div className="feature-item"> + Automatic Configuration</div>
        </div>
      </div>
      <div className="product-footer">
        <span className="product-price">Price: $10 / month</span>
        <button className="button button-primary">Choose Plan</button>
      </div>
    </div>
  );
}

export default GrinderAIAgentPlan;