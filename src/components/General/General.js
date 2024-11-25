import React from "react";
import "./General.css";

function General() {
  return (
    <div className="general">
      <h2>GrindURUS Pools NFTs</h2>
      <div className="statistics">
        <h3>Total Minted Pools NFTs: <span className="stat-value">0</span></h3>
        <h3>TVL: <span className="stat-value">$0.00</span></h3>
      </div>
      <div className="pool-item">
        <p>
          buy random royalty and earn <br />
          10% from yield and trade profits
        </p>
        <span className="arrow">→</span>
        <button className="random-buy-button">Random Buy Royalty</button>
      </div>
      <div className="pool-item">
        <p>
          execute strategy on random <br />
          pool and get GRIND token
        </p>
        <span className="arrow">→</span>
        <button className="random-grind-button">Random GRIND</button>
      </div>
    </div>
  );
}

export default General;