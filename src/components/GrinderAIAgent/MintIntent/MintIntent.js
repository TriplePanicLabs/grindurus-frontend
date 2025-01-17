import React, { useState } from 'react';
import './MintIntent.css';

function MintIntent() {
  const [intentPeriod, setIntentPeriod] = useState(6); // Значение по умолчанию
  const [receiver, setReceiver] = useState('');
  const [price, setPrice] = useState(0.1); // Значение цены по умолчанию

  const handleMint = () => {
    alert(`Minting intent with period: ${intentPeriod} months\nReceiver: ${receiver}\nPrice: ${price} ETH`);
  };

  return (
    <div className="mint-intent-container">
      <h2 className="mint-intent-title">Mint Intent</h2>

      <div className="form-group">
        <label className="label">Intent Period</label>
        <input
          type="range"
          min="1"
          max="12"
          value={intentPeriod}
          onChange={(e) => setIntentPeriod(e.target.value)}
          className="slider"
        />
        <div className="slider-value">{intentPeriod} months</div>
      </div>

      <div className="form-group">
        <label className="label">Receiver</label>
        <input
          type="text"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
          placeholder="Enter receiver address"
          className="input"
        />
      </div>

      <div className="price-container">
        <span className="price-label">Price:</span> <span className="price-value">{price} ETH</span>
      </div>

      <button onClick={handleMint} className="mint-button">
        Mint
      </button>
    </div>
  );
}

export default MintIntent;