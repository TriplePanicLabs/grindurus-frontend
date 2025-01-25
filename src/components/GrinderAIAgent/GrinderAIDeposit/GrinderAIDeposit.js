import React, { useState } from 'react';
import './GrinderAIDeposit.css';
import logoUSDT from '../../../assets/images/logoUSDT.png';
import logoUSDC from '../../../assets/images/logoUSDC.png';
import logoWETH from '../../../assets/images/logoWETH.png';
import logoWBTC from '../../../assets/images/logoWBTC.png';

function GrinderAIDeposit() {

  const [strategiesId, setStrategiesId] = useState(0);
  const [quoteTokenId, setQuoteTokenId] = useState(0);
  const [baseTokenId, setBaseTokenId] = useState(0);
  const [quoteTokenAmount, setQuoteTokenAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const arbitrum = {
    poolsNFT: '',
    strategies: [
      {
        strategyId: 0,
        description: 'UniswapV3'
      },
      {
        strategyId: 1,
        description: 'AAVEv3 + UniswapV3',
      },
    ],
    quoteTokens:[
      { 
        symbol: 'USDT', 
        address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
        decimals: 6, 
        iconURL: logoUSDT, 
        baseTokens: [
          { 
            symbol: 'WETH',
            quoteToken: 'USDT', // dependency
            address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
            decimals: 18, 
            iconURL: logoWETH, 
            oracleQuoteTokenPerBaseToken: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612', // chainlink oracleWethUsdArbitrum
          },
          {
            symbol: 'WBTC', 
            address: '', // WBTC
            decimals: 6, 
            iconURL: logoWBTC, 
            oracleQuoteTokenPerFeeToken: ''
          }
        ]
      },
      { 
        symbol: 'USDC', 
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 
        decimals: 18, 
        iconURL: logoUSDC,
        baseTokens: [
          {
            symbol: 'WBTC', 
            address: '', // WBTC
            decimals: 6, 
            iconURL: logoWBTC, 
            oracleQuoteTokenPerFeeToken: ''
          }
        ]
      },
    ],
  
  };

  const handleAutofill = () => {
    setIsLoading(true); // Установить состояние загрузки
    setTimeout(() => {
      // Эмуляция задержки заполнения
      setStrategiesId(0);
      setQuoteTokenId(0);
      setBaseTokenId(0);
      setQuoteTokenAmount('1000'); // Автозаполненное значение
      setIsLoading(false); // Завершить загрузку
    }, 2000); // 2 секунды задержки
  };

  const handleApprove = async () => {}

  const handleDeposit = async () => {}
  
  const handleMaxDepositQuoteToken = async () => {}

  return (
    <div className="grinderai-deposit-container">
      <div className='grinderai-label'>
        Deposit via Grinder AI Agent
      </div>
      <div>
        <button className='grinderai-fill' onClick={handleAutofill} disabled={isLoading}>
          {isLoading && <span className="spinner"></span>}
          {isLoading ? 'Asking GrinderAI Agent...' : 'Autofill fields via Grinder AI Agent'}
        </button>
        <div>
          {/** add here loading, if button is clicked */}
        </div>
      </div>
      <div className="form-group">
        <div className="label-container">
            Strategy
        </div>
        <div className="select-with-icon">
          <select 
            value={strategiesId} 
            onChange={(e) => setStrategiesId(e.target.value)}>
              {arbitrum.strategies.map((strategyInfo, index) => (
              <option key={index} value={index}>
                {strategyInfo.strategyId}) {strategyInfo.description}
              </option>
              ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="label-container">
          Quote Token
        </div>
        <div className="select-with-icon">
          <img
            src={arbitrum.quoteTokens[quoteTokenId].iconURL}
            alt={arbitrum.quoteTokens[quoteTokenId].symbol}
            className="token-icon"
          />
          <select
            value={quoteTokenId}
            onChange={(e) => setQuoteTokenId(e.target.value)}
          >
            {arbitrum.quoteTokens.map((tokenInfo, index) => (
              <option key={index} value={index}>
                {tokenInfo.symbol}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="form-group">
        <div className="label-container">
          Base Token
        </div>
        <div className="select-with-icon">
        <img
          src={arbitrum.quoteTokens[quoteTokenId].baseTokens[baseTokenId]?.iconURL}
          alt={arbitrum.quoteTokens[quoteTokenId].baseTokens[baseTokenId]?.symbol}
          className="token-icon"
        />
        <select
          value={baseTokenId}
          onChange={(e) => setBaseTokenId(e.target.value)}
        >
          {arbitrum.quoteTokens[quoteTokenId].baseTokens.map((tokenInfo, index) => (
            <option key={index} value={index}>
              {tokenInfo.symbol}
            </option>
          ))}
        </select>
      </div>
      </div>
      <div className="form-group">
        <div className="label-container">
          Deposit Quote Token
        </div>
        <div className="input-with-max">
          <img
            src={arbitrum.quoteTokens[quoteTokenId].iconURL}
            alt={arbitrum.quoteTokens[quoteTokenId].symbol}
            className="token-icon"
          />
          <input
            value={quoteTokenAmount}
            onChange={(e) => setQuoteTokenAmount(e.target.value)}
            placeholder="100500"
            className="input-field"
          />
          <button
            type="button"
            className="max-button"
            onClick={() => handleMaxDepositQuoteToken('100500')}
          >
            MAX
          </button>
        </div>
      </div>
      <div className="button-group">
        <button className="approve-button" onClick={handleApprove}>
          Approve Quote Token
        </button>
        <button className="mint-button" onClick={handleDeposit}>
          Deposit
        </button>
      </div>
    </div>
  );
}

export default GrinderAIDeposit;