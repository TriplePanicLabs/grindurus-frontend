import React, { useState, useEffect } from 'react';
import {ethers} from 'ethers';
import config from '../../../config';
import './PoolInfo.css';

function PoolInfo({ poolId, networkConfig }) {

  const [poolOwner, setPoolOwner] = useState('')
  const [oracleQuoteTokenPerBaseToken, setOracleQuoteTokenPerBaseToken] = useState('')
  const [oracleQuoteTokenPerFeeToken, setOracleQuoteTokenPerFeeToken] = useState('')
  const [royaltyReceiver, setRoyaltyReceiver] = useState('')
  const [quoteToken, setQuoteToken] = useState('')
  const [baseToken, setBaseToken] = useState('')

  const [long, setLong] = useState({})
  const [hedge, setHedge] = useState({})
  const [thresholds, setThresholds] = useState({})

  useEffect(() => {
    fetchPoolData();
    fetchPositions();
    fetchThresholds();
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

  const fetchPositions = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        config.poolsNFTAbi,
        signer
      );
      const positions = await poolsNFT.getPositions(poolId);
      
      const long = {
        number: positions[0][0].toString(),
        numberMax: positions[0][1].toString(),
        priceMin: ethers.formatUnits(positions[0][2], 8),
        liquidity: ethers.formatUnits(positions[0][3], 6),
        qty: ethers.formatUnits(positions[0][4], 18),
        price: ethers.formatUnits(positions[0][5],8),
        feeQty: ethers.formatUnits(positions[0][6],18),
        feePrice: ethers.formatUnits(positions[0][7], 8),
      }
      const hedge = {
          number: positions[1][0].toString(),
          numberMax: positions[1][1].toString(),
          priceMin: ethers.formatUnits(positions[1][2], 8),
          liquidity: ethers.formatUnits(positions[1][3], 6),
          qty: ethers.formatUnits(positions[1][4], 18),
          price: ethers.formatUnits(positions[1][5], 8),
          feeQty: ethers.formatUnits(positions[1][6], 18),
          feePrice: ethers.formatUnits(positions[1][7], 8)
      }
      setLong(long)
      setHedge(hedge)
    } catch {
      console.log('failed to fetch pool info data')
    }
  }

  const fetchThresholds = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        config.poolsNFTAbi,
        signer
      );
      const _thresholds = await poolsNFT.getThresholds(poolId);
      console.log(_thresholds)
      const thresholds = {
        longBuyPriceMin: thresholds[0],
        longSellQuoteTokenAmountThreshold: thresholds[1],
        longSellSwapPriceThreshold: thresholds[2],
        hedgeSellLiquidity: thresholds[3],
        hedgeSellQuoteTokenAmountThreshold: thresholds[4],
        hedgeSellTargetPrice: thresholds[5],
        hedgeSellSwapPriceThreshold: thresholds[6],
        hedgeRebuyBaseTokenAmountThreshold: thresholds[7],
        hedgeRebuySwapPriceThreshold: thresholds[8],
      }
    } catch {
      console.log('failed to fetch pool info data')
    }
  }

  return (
    <div className="pool-info-container">
      <div className="pool-info-content">
        <h2 className="pool-info-title">Pool Info (poolId={poolId})</h2>
        <div className="pool-info-list">
          <p><strong>Oracle QuoteToken/BaseToken:</strong> {poolId}</p>
          <p><strong>Oracle QuoteToken/FeeToken:</strong> {poolId}</p>
          <p><strong>Pool Owner:</strong> {poolOwner}</p>
          <p><strong>Royalty Receiver:</strong> {royaltyReceiver}</p>
          <p><strong>QuoteToken:</strong> {quoteToken}</p>
          <p><strong>BaseToken:</strong> {baseToken}</p>
        </div>
      </div>
      <div className='pool-positions'>
        <table className="positions-table">
            <thead>
              <tr>
                <th>Param</th>
                <th>Long Position</th>
                <th>Hedge Position</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(long).map((key, index) => (
                <tr key={index}>
                  <td>{key}</td>
                  <td>{long[key]}</td>
                  <td>{hedge[key]}</td>
                </tr>
              ))}
            </tbody>
          </table>
      </div>
    </div>
  );
}

export default PoolInfo;