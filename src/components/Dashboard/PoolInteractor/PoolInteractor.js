import React, { useEffect, useState } from 'react';
import {ethers} from 'ethers';
import config from '../../../config';
import './PoolInteractor.css';

function PoolInteractor({ poolId, networkConfig }) {
  const [activeTab, setActiveTab] = useState('interaction');

  const [inputDeposit, setInputDeposit] = useState(0);
  const [inputWithdraw, setInputWithdraw] = useState(0);
  const [royaltyPrice, setRoyaltyPrice] = useState('');
  const [royaltyPriceToShow, setRoyaltyPriceToShow] = useState('');

  const [longNumberMax, setLongNumberMax] = useState(4);
  const [hedgeNumberMax, setHedgeNumberMax] = useState(4);
  const [extraCoef, setExtraCoef] = useState('');
  const [priceVolatilityPercent, setPriceVolatilityPercent] = useState(1);
  const [initHedgeSellPercent, setInitHedgeSellPercent] = useState(1);

  const [selectedOpReturnPercent, setSelectedOpReturnPercent] = useState('1');
  const [inputReturnPercent, setInputReturnPercent] = useState('')
  const [returnPercentLongSell, setReturnPercentLongSell] = useState(0.5);
  const [returnPercentHedgeSell, setReturnPercentHedgeSell] = useState(0.5);
  const [returnPercentHedgeRebuy, setReturnPercentHedgeRebuy] = useState(0.5);
  
  const [selectedOpFeeCoef, setSelectedOpFeeCoef] = useState('1');
  const [inputFeeCoef, setInputFeeCoef] = useState('');
  const [feeCoefLongSell, setFeeCoefLongSell] = useState(1.0);
  const [feeCoefHedgeSell, setFeeCoefHedgeSell] = useState(1.0);
  const [feeCoefHedgeRebuy, setFeeCoefHedgeRebuy] = useState(1.0);

  const fetchConfig = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function getConfig(uint256 poolId) external view returns (uint8, uint8, uint256, uint256, uint256, uint256, uint256, uint256)",
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );
      // console.log(poolId)
      // console.log(poolAddress)
      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          "function getConfig() external view returns (uint8, uint8, uint256, uint256, uint256, uint256, uint256, uint256)",
          "function feeConfig() external view returns (uint256, uint256, uint256)",
        ],
        signer
      )

      const poolConfig = await pool.getConfig()    
      const feeConfig = await pool.feeConfig()

      const poolFeeConfigLongSell = feeConfig[0]
      const poolFeeConfigHedgeSell = feeConfig[1]
      const poolFeeConfigHedgeRebuy = feeConfig[2]
      setFeeCoefLongSell(poolFeeConfigLongSell)
      setFeeCoefHedgeSell(poolFeeConfigHedgeSell)
      setFeeCoefHedgeRebuy(poolFeeConfigHedgeRebuy)
    
      // console.log(poolConfig)

      const poolLongNumberMax = poolConfig[0];
      const poolHedgeNumberMax = poolConfig[1];
      const poolExtraCoef = parseFloat(poolConfig[4]) / 100;
      const poolPriceVolatilityPercent = parseFloat(poolConfig[2]) / 100;
      const poolInitHedgeSellPercent = parseFloat(poolConfig[3]) / 100;
      const poolReturnPercentLongSell = poolConfig[5];
      const poolReturnPercentHedgeSell = poolConfig[6];
      const poolReturnPercentHedgeRebuy = poolConfig[7];
      setLongNumberMax(poolLongNumberMax);
      setHedgeNumberMax(poolHedgeNumberMax);
      setExtraCoef(poolExtraCoef.toFixed(2));
      setPriceVolatilityPercent(poolPriceVolatilityPercent.toFixed(2));
      setInitHedgeSellPercent(poolInitHedgeSellPercent.toFixed(2));
      setReturnPercentLongSell(poolReturnPercentLongSell);
      setReturnPercentHedgeSell(poolReturnPercentHedgeSell);
      setReturnPercentHedgeRebuy(poolReturnPercentHedgeRebuy);
    } catch {
      console.log("Failed to fetch config");
    }
  }

  const fetchRoyaltyPrice = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function royaltyPrice(uint256 poolId) external view returns (uint256)",
        ],
        signer
      );
      const royaltyPriceRaw = await poolsNFT.royaltyPrice(poolId); // amount ETH
      const royaltyPriceFormatted = ethers.formatUnits(royaltyPriceRaw, 18);
      setRoyaltyPrice(royaltyPriceRaw)
      const royaltyPriceRounded = Number(royaltyPriceFormatted);
      setRoyaltyPriceToShow(royaltyPriceRounded)
    } catch {
      console.log("Failed to fetch royalty price");
    }

  }

  useEffect(() => {
    fetchRoyaltyPrice()
  }, []); // called only once

  const handleDeposit = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function deposit(uint256 poolId,uint256 quoteTokenAmount) external returns (uint256 deposited)",
        ],
        signer
      );

      const quoteTokenAmountRaw = ethers.parseUnits()
      const tx = await poolsNFT.deposit(poolId, quoteTokenAmountRaw)
      await tx.wait()
    } catch {
      console.log("failed to set long number max")
    }

  }

  const handleWithdraw = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function deposit(uint256 poolId,uint256 quoteTokenAmount) external returns (uint256 deposited)",
        ],
        signer
      );

      const quoteTokenAmountRaw = ethers.parseUnits()
      const tx = await poolsNFT.deposit(poolId, quoteTokenAmountRaw)
      await tx.wait()
    } catch {
      console.log("failed to set long number max")
    }
  }

  const handleExit = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function exit(uint256 poolId) external returns (uint256 quoteTokenAmount, uint256 baseTokenAmount)",
        ],
        signer
      );

      const tx = await poolsNFT.exit(poolId)
      await tx.wait()
    } catch {
      console.log("failed to set long number max")
    }
  }

  const handleBuyRoyalty = async () => {

  }

  const handleSetLongNumberMax = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );

      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          " function setLongNumberMax(uint8 longNumberMax) external",
        ],
        signer
      );

      const tx = await pool.setLongNumberMax(longNumberMax)
      await tx.wait()
    } catch {
      console.log("failed to set long number max")
    }

  }

  const handleSetHedgeNumberMax = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );

      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          "function setHedgeNumberMax(uint8 hedgeNumberMax) external",
        ],
        signer
      );

      const tx = await pool.setHedgeNumberMax(hedgeNumberMax)
      await tx.wait()
    } catch {
      console.log("failed to set hedge number max")
    }

  }

  const handleSetExtraCoef = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );

      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          "function setExtraCoef(uint256 extraCoef) external",
        ],
        signer
      );

      const extraCoefRaw = extraCoef * 100
      const tx = await pool.setExtraCoef(extraCoefRaw)
      await tx.wait()
    } catch {
      console.log("failed to set extra coef")
    }

  }

  const handleSetPriceVolatilityPercent = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );

      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          "function setPriceVolatilityPercent(uint256 priceVolatilityPercent) external",
        ],
        signer
      );

      const priceVolatilityPercentRaw = priceVolatilityPercent * 100
      const tx = await pool.setPriceVolatilityPercent(priceVolatilityPercentRaw)
      await tx.wait()
    } catch {
      console.log("failed to set long number max")
    }
  }

  const handleSetInitHedgeSellPercent = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );

      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          "function setInitHedgeSellPercent(uint256 initHedgeSellPercent) external",
        ],
        signer
      );
      const initHedgeSellPercentRaw = initHedgeSellPercent * 100
      // console.log(initHedgeSellPercentRaw)
      const tx = await pool.setInitHedgeSellPercent(initHedgeSellPercentRaw)
      await tx.wait()
    } catch {
      console.log("failed to set init hedge sell percent")
    }
  }

  const handleSetReturnPercent = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );

      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          "function setOpReturnPercent(StrategyOp op, uint256 returnPercent) external",
        ],
        signer
      );
      let op = selectedOpReturnPercent;
      let returnPercent = inputReturnPercent * 100;
      const tx = await pool.setOpReturnPercent(op, returnPercent)
      await tx.wait()
    } catch {
      console.log("failed to set return percent")
    }
  }

  const handleSetFeeCoef = async () => {
    try{ 
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        [
          "function pools(uint256 poolId) external view returns (address)"
        ],
        signer
      );

      const poolAddress = await poolsNFT.pools(poolId)
      const pool = new ethers.Contract(
        poolAddress,
        [
          "function setOpFeeCoef(uint8 op, uint256 _feeCoef) external",
        ],
        signer
      );
      let op = selectedOpFeeCoef;
      let feeCoef = inputFeeCoef * 100;
      const tx = await pool.setOpFeeCoef(op, feeCoef)
      await tx.wait()
    } catch {
      console.log("failed to set fee coef")
    }
  }


  return (
    <div className="pool-interactor">
      <div className="tabs">
        <div className="tab-buttons">
          <button
            onClick={() => {
                setActiveTab('interaction')
                fetchRoyaltyPrice()
              }
            }
            className={activeTab === 'interaction' ? 'active' : ''}
          >
            Interaction
          </button>
          <button
            onClick={() => {
                setActiveTab('config')
                fetchConfig()
              }
            }
            className={activeTab === 'config' ? 'active' : ''}
          >
            Configuration
          </button>
          <div 
            className="tab-indicator"
            style={{
              left: activeTab === 'interaction' ? '0' : '50%',
            }}
          />
        </div>
      </div>

      {activeTab === 'interaction' ? (
        <div className="deposit-withdraw">
          <div className="amount-section">
            <div className='amount-section'>
              Deposit Amount
            </div>
            <div className="input-group">
              <input
                type="number"
                placeholder="Enter deposit amount"
                onChange={(e) => setInputDeposit(e.target.value)}
              />
              <button className="action-button">
                Deposit
              </button>
            </div>
          </div>

          <div className="amount-section">
            <div className='amount-section'>
              Withdraw Amount
            </div>
            <div className="input-group">
              <input
                placeholder="Enter withdraw amount"
                onChange={(e) => setInputWithdraw(e.target.value)}
              />
              <button className="action-button">
                Withdraw
              </button>
            </div>
          </div>

          <button 
            className="exit-button"
            onClick={() => handleExit()}
          >
            Exit
          </button>

          <div className="exit-description">
            Exit: emergency withdraw distribution of funds and ownership of strategy pool will be moved to royalty receiver.
          </div>

          <button 
            className="royalty-button"
            onClick={() => handleBuyRoyalty()}  
          >
            Buy Royalty<br/> 
            {royaltyPriceToShow} ETH
          </button>
        </div>
      ) : (
        <div className="configuration">
          <div className="config-field">
            <div>Long Number Max (Current value: {longNumberMax.toString()})</div>
            <div className="input-group">
              <input
                className="input-field"
                placeholder='Long number max example: 2'
                onChange={(e) => setLongNumberMax(e.target.value)}
              />
              <button 
                className="set-button"
                onClick={() => handleSetLongNumberMax()}  
              >
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Hedge Number Max (Current value: {hedgeNumberMax.toString()})</div>
            <div className="input-group">
              <input
                className="input-field"
                placeholder='Hedge number max example: 4'
                onChange={(e) => setHedgeNumberMax(e.target.value)}
              />
              <button 
                className="set-button"
                onClick={() => handleSetHedgeNumberMax()}  
              >
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Extra Coefficient (Current value: {extraCoef.toString()})</div>
            <div className="input-group">
              <input
                className="input-field"
                placeholder='Extra coef example: 2.00'
                onChange={(e) => setExtraCoef(parseFloat(e.target.value))}
              />
              <button 
                className="set-button"
                onClick={() => handleSetExtraCoef()}
              >
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Price Volatility Percent (Current value: {priceVolatilityPercent.toString()}%)</div>
            <div className="input-group">
              <input
                className="input-field"
                placeholder='Price volatility percent example: 1.4%'
                onChange={(e) => setPriceVolatilityPercent(parseFloat(e.target.value))}
              />
              <button 
                className="set-button"
                onClick={() => handleSetPriceVolatilityPercent()}
              >
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Init Hedge Sell Percent (Current value: {initHedgeSellPercent.toString()}%)</div>
            <div className="input-group">
              <input
                className="input-field"
                placeholder='Init Hedge Sell Percent example: 2.6%'
                onChange={(e) => setInitHedgeSellPercent(parseFloat(e.target.value))}
              />
              <button 
                className="set-button"
                onClick={() => handleSetInitHedgeSellPercent()}
              >
                Set
              </button>
            </div>
          </div>

          <div className="operation-row">
            <div className="operation-select">
              <div className="operation-label">Operation</div>
              <select 
                className="input-field"
                value={selectedOpReturnPercent}
                onChange={(e) => setSelectedOpReturnPercent(e.target.value)}  
              >
                <option value="1">long sell</option>
                <option value="2">hedge sell</option>
                <option value="3">hedge buy</option>
              </select>
            </div>
            <div className="input-coef">
              <div className="field-label">Return Percent</div>
              <input
                placeholder='Return percent example: 1.0'
                className="input-field"
                onChange={(e) => setInputReturnPercent(parseFloat(e.target.value))}
              />
            </div>
            <button 
              className="set-button-coef"
              onClick={() => handleSetReturnPercent()}  
            >
              Set
            </button>
          </div>
          
          <div className="operation-row">
            <div className="operation-select">
              <div className="operation-label">Operation</div>
              <select 
                className="input-field"
                value={selectedOpFeeCoef}
                onChange={(e) => setSelectedOpFeeCoef(e.target.value)}
              >
                <option value="1">long sell</option>
                <option value="2">hedge sell</option>
                <option value="3">hedge rebuy</option>
              </select>
            </div>
            <div className="input-coef">
              <div className="field-label">Fee Coefficient</div>
              <input
                placeholder='Fee coef example: 1.0'
                className="input-field"
                onChange={(e) => setInputFeeCoef(parseFloat(e.target.value))}
              />
            </div>
            <button
              className="set-button-coef"
              onClick={() => handleSetFeeCoef()}
            >
              Set
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default PoolInteractor;