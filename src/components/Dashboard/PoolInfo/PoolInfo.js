import React, { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import config from '../../../config';
import './PoolInfo.css';

function PoolInfo({ poolId, networkConfig }) {

  const [poolOwner, setPoolOwner] = useState('')
  const [royaltyReceiver, setRoyaltyReceiver] = useState('')
  const [quoteToken, setQuoteToken] = useState('')
  const [baseToken, setBaseToken] = useState('')

  useEffect(() => {
    fetchPoolData();
  }, [poolId, networkConfig]);

  const fetchPoolData = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        config.poolsNFTAbi,
        signer
      );
      const ownerOf = await poolsNFT.ownerOf(poolId);
      setPoolOwner(ownerOf)
      const royaltyReceiver = await poolsNFT.royaltyReceiver(poolId)
      setRoyaltyReceiver(royaltyReceiver)
      const poolNFTInfos = await poolsNFT.getPoolNFTInfos(poolId, poolId)
      let poolNFTInfo = poolNFTInfos[0]
      const quoteToken = await poolNFTInfo.quoteToken
      setQuoteToken(quoteToken)
      const baseToken = await poolNFTInfo.baseToken
      setBaseToken(baseToken)
    } catch {
      console.log('failed to fetch pool info data')
    }
  };


  return (
    <div className="pool-info-container">
      <div className="pool-info-content">
        <h2 className="pool-info-title">Pool Info</h2>
        <div className="pool-info-list">
          <p><strong>Pool ID:</strong> {poolId}</p>
          <p><strong>Pool Owner:</strong> {poolOwner}</p>
          <p><strong>Royalty Receiver:</strong> {royaltyReceiver}</p>
          <p><strong>QuoteToken:</strong> {quoteToken}</p>
          <p><strong>BaseToken:</strong> {baseToken}</p>
        </div>
      </div>
    </div>
  );
}

export default PoolInfo;