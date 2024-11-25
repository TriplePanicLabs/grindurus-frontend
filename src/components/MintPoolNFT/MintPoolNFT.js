import React, { useState } from 'react';
import {ethers} from 'ethers';
import './MintPoolNFT.css';
import logoUSDT from '../../assets/images/logoUSDT.png';
import logoUSDC from '../../assets/images/logoUSDC.png';
import logoWETH from '../../assets/images/logoWETH.png';


function MintPoolNFT() {
  const [strategiesId, setStrategiesId] = useState(0);
  const [quoteTokenId, setQuoteTokenId] = useState(0);
  const [baseTokenId, setBaseTokenId] = useState(0);
  const [quoteTokenAmount, setquoteTokenAmount] = useState('');

  const arbitrum = {
    grindURUSPoolsNFT: '',
    strategies: [
      {
        strategyId: 1,
        description: 'AAVEv3 + UniswapV3',
      },
      {
        strategyId: 2,
        description: 'AAVEv3 + UniswapV4',
      },
    ],
    quoteTokens:[
      { 
        symbol: 'USDT', 
        address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
        decimals: 6, 
        iconURL: logoUSDT, 
        feeToken: { 
          symbol: 'WETH',
          quoteToken: 'USDT',
          address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
          decimals: 18, 
          iconURL: logoWETH, 
          oracleQuoteTokenPerFeeToken: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612', // chainlink oracleWethUsdArbitrum
        },
        baseTokens: [
          { 
            symbol: 'WETH',
            quoteToken: 'USDT', // dependency
            address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
            decimals: 18, 
            iconURL: '', 
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
        feeToken: { 
          symbol: 'WETH',
          quoteToken: 'USDC',
          address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', // WETH
          decimals: 18, 
          iconURL: logoWETH, 
          oracleQuoteTokenPerFeeToken: '0x639Fe6ab55C921f74e7fac1ee960C0B6293ba612', // chainlink oracleWethUsdArbitrum
        },
        baseTokens: []
      },
    ],
  
  };

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

      console.log("Approve transaction sent:", tx.hash);

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
      const quoteToken = arbitrum.quoteTokens[quoteTokenId];
      const baseToken = quoteToken.baseTokens[baseTokenId];
      const feeToken = quoteToken.feeToken
      const strategyId = arbitrum.strategies[strategiesId].strategyId

      const grindURUSPoolsNFTContract = new ethers.Contract(
        grindURUSPoolsNFTAddress,
        [
          "function mint(uint16 strategyId,address oracleQuoteTokenPerFeeToken,address oracleQuoteTokenPerBaseToken,address feeToken,address baseToken,address quoteToken,uint256 quoteTokenAmount)", // ABI метода mint
        ],
        signer
      );
      const amount = ethers.parseUnits(quoteTokenAmount, quoteToken.decimals)
      // console.log(amount)
      console.log(strategyId)
      const tx = await grindURUSPoolsNFTContract.mint(
        strategyId,
        feeToken.oracleQuoteTokenPerFeeToken,
        baseToken.oracleQuoteTokenPerBaseToken,
        feeToken.address,
        baseToken.address,
        quoteToken.address,
        quoteTokenAmount
      );

      console.log("Approve transaction sent:", tx.hash);

      await tx.wait();

      alert("Approve successful!");
    } catch (error) {
      console.error("Error during approve:", error);
      alert("Failed to approve tokens.");
    }
  };

  return (
    <div className="mint-nft-pool">
      <h2>Mint Your Strategy Pool NFT</h2>
      <div className="form-group">
        <label>Strategy</label>
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
      <div className="form-group">
        <label>Quote Token</label>
        <select 
            value={quoteTokenId} 
            onChange={(e) => {setQuoteTokenId(e.target.value)}}>
            {arbitrum.quoteTokens.map((tokenInfo, index) => (
            <option key={index} value={index}>
              <img src={tokenInfo.logoURL} alt="asd"/> {tokenInfo.symbol}
            </option>
          ))}
        </select>
      </div>
      <div className="form-group">
        <label>Base Token</label>
        <select 
            value={baseTokenId} 
            onChange={(e) => setBaseTokenId(e.target.value)}>
            {arbitrum.quoteTokens[quoteTokenId].baseTokens.map((tokenInfo, index) => (
            <option key={index} value={index}>
              {tokenInfo.symbol}
            </option>
            ))}
        </select>
      </div>
      <div className="form-group">
        <label>Quote Token Amount</label>
        <input
          type="number"
          value={quoteTokenAmount}
          onChange={(e) => setquoteTokenAmount(e.target.value)}
          placeholder="100500`"
        />
      </div>
      <div className="button-group">
        <button className="approve-button" onClick={handleApprove}>
          Approve Quote Token
        </button>
        <button className="mint-button" onClick={handleMint}>
          Mint Strategy Pool
        </button>
      </div>
    </div>
  );
}

export default MintPoolNFT;