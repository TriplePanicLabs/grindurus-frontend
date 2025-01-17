import React, { useState } from 'react';
import {ethers} from 'ethers';
import './MintPoolNFT.css';
import logoUSDT from '../../../assets/images/logoUSDT.png';
import logoUSDC from '../../../assets/images/logoUSDC.png';
import logoWETH from '../../../assets/images/logoWETH.png';
import logoWBTC from '../../../assets/images/logoWETH.png';


function MintPoolNFT() {
  const [strategiesId, setStrategiesId] = useState(0);
  const [quoteTokenId, setQuoteTokenId] = useState(0);
  const [baseTokenId, setBaseTokenId] = useState(0);
  const [quoteTokenAmount, setQuoteTokenAmount] = useState('');

  const arbitrum = {
    poolsNFT: '',
    strategies: [
      {
        strategyId: 1,
        network: 'arbitrum',
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
            iconURL: '', 
            oracleQuoteTokenPerFeeToken: ''
          }
        ]
      },
      { 
        symbol: 'USDC', 
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 
        decimals: 18, 
        iconURL: logoUSDC,
        baseTokens: []
      },
    ],
  
  };

  const handleMaxDepositQuoteToken = () => {
    setQuoteTokenAmount(100500)
  }

  const handleApprove = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const quoteToken = arbitrum.quoteTokens[quoteTokenId];

      const tokenContract = new ethers.Contract(
        quoteToken.address,
        [
          "function approve(address spender, uint256 amount) public returns (bool)", // ABI метода approve
        ],
        signer
      );

      // Задаём адрес получателя апрува (например, адрес пула)
      const spenderAddress = "0xC185CDED750dc34D1b289355Fe62d10e86BEDDee"; // Укажите адрес контракта

      const amount = ethers.parseUnits(quoteTokenAmount, quoteToken.decimals);

      // Вызываем транзакцию approve
      const tx = await tokenContract.approve(spenderAddress, amount);

      // console.log("Approve transaction sent:", tx.hash);

      // Ожидаем подтверждение транзакции
      await tx.wait();

      alert("Approve successful!");
    } catch (error) {
      console.error("Error during approve:", error);
      alert("Failed to approve tokens.");
    }

  };

  const handleMint = async () => {
    if (!window.ethereum) {
      alert("MetaMask is not installed.");
      return;
    }
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const grindURUSPoolsNFTAddress = arbitrum.grindURUSPoolsNFT
      const strategyId = arbitrum.strategies[strategiesId].strategyId
      const quoteToken = arbitrum.quoteTokens[quoteTokenId];
      const baseToken = quoteToken.baseTokens[baseTokenId];

      const grindURUSPoolsNFTContract = new ethers.Contract(
        grindURUSPoolsNFTAddress,
        [
          "function mint(uint16 strategyId,address quoteToken,address baseToken,uint256 quoteTokenAmount)", // ABI метода mint
        ],
        signer
      );
      const amount = ethers.parseUnits(quoteTokenAmount, quoteToken.decimals)
      // console.log(amount)
      console.log(strategyId)
      const tx = await grindURUSPoolsNFTContract.mint(
        strategyId,
        quoteToken.address,
        baseToken.address,
        amount
      );

      console.log("Approve transaction sent:", tx.hash);

      await tx.wait();

      alert("Approve successful!");
    } catch (error) {
      console.error("Error during approve:", error);
      // alert("Failed to approve tokens.");
    }
  };

  return (
    <div className="mint-nft-pool">
      <div className='mint-nft-label'>Mint Pool NFT</div>
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
        <button className="mint-button" onClick={handleMint}>
          Mint Pool
        </button>
      </div>
    </div>
  );
}

export default MintPoolNFT;