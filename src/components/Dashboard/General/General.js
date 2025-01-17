import React from "react";
import "./General.css";

function General() {

  const getTotalMintedNFTs = () => {
    return 1;
  }

  const getTotalDeposited = () => {
    return 100;
  }

  return (
    <div className="general">
      <h2>GrindURUS Pools NFTs</h2>
      <div className="statistics">
        <h3>Total Minted Pools NFTs: <span className="stat-value">{getTotalMintedNFTs()}</span></h3>
        <h3>Total Deposited: <span className="stat-value">{getTotalDeposited()}</span></h3>
      </div>
      {/* <div className="pool-item">
        <p>
          Buy random royalty and earn <br />
          10% from yield and trade profits
        </p>
        <span className="arrow">→</span>
        <button className="random-buy-button">Random Buy Royalty</button>
      </div>
      <div className="pool-item">
        <p>
          Execute strategy on random <br />
          pool and get grETH
        </p>
        <span className="arrow">→</span>
        <button className="random-grind-button">Random GRIND</button>
      </div> */}
    </div>
  );
}

export default General;