import React, { useEffect, useState } from "react";
import config from '../../../config';
import {ethers} from 'ethers';
import "./PoolsTable.css";
import logoArbitrum from "../../../assets/images/logoArbitrum.png";

function PoolsTable({ setPoolId, networkConfig }) {
  const [currentPage, setCurrentPage] = useState(2);
  const [currentTableData, setCurrentTableData] = useState([]);
  const [tableRowsAmount, setTableRowsAmount] = useState(10);

  useEffect(() => {
    fetchLastPools();
  }, []);


  useEffect(() => {
    if (networkConfig && networkConfig.poolsnft) {
      fetchLastPools();
    }
  }, [networkConfig]);

  const fetchLastPools = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;
      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        config.poolsNFTAbi,
        signer
      );

      let totalPools = await poolsNFT.totalPools()
      if (totalPools > 0) {
        let upPoolId = Number(totalPools) - 1;
        let downPoolId = upPoolId - tableRowsAmount >= 0 ? upPoolId - tableRowsAmount : 0;
        let poolNFTInfos = await poolsNFT.getPoolNFTInfos(downPoolId, upPoolId);
        const tableData = formTabledata(poolNFTInfos)
        setCurrentTableData(tableData)
      }
    } catch (error) {
      console.log("Failed to fetch all pools", error);
      setCurrentTableData([])
    }

  }

  const formTabledata = (poolNFTInfos) => {
    // console.log(poolNFTInfos)
    let tableData = poolNFTInfos.map((poolNFTInfo) => {
      const poolId = poolNFTInfo.poolId.toString();
      const quoteTokenAddress = poolNFTInfo.quoteToken;
      const baseTokenAddress = poolNFTInfo.baseToken;
      // console.log("a")
      // console.log(networkConfig)
      const quoteTokenConfig = networkConfig.quoteTokens.find(
        (token) => token.address.toLowerCase() === quoteTokenAddress.toLowerCase()
      );
      const baseTokenConfig = networkConfig.baseTokens.find(
        (token) => token.address.toLowerCase() === baseTokenAddress.toLowerCase()
      );

      const quoteTokenSymbol = poolNFTInfo.quoteTokenSymbol;
      const baseTokenSymbol = poolNFTInfo.baseTokenSymbol;
      const quoteTokenAmount = ethers.formatUnits(poolNFTInfo.quoteTokenAmount, quoteTokenConfig.decimals);
      const baseTokenAmount = ethers.formatUnits(poolNFTInfo.baseTokenAmount, baseTokenConfig.decimals);
      const quoteTokenYieldProfit = ethers.formatUnits(poolNFTInfo.quoteTokenYieldProfit, quoteTokenConfig.decimals);
      const baseTokenYieldProfit = ethers.formatUnits(poolNFTInfo.baseTokenYieldProfit, baseTokenConfig.decimals);
      const quoteTokenTradeProfit = ethers.formatUnits(poolNFTInfo.quoteTokenTradeProfit, quoteTokenConfig.decimals);
      const baseTokenTradeProfit = ethers.formatUnits(poolNFTInfo.baseTokenTradeProfit, baseTokenConfig.decimals);
      const aprNumerator = poolNFTInfo.APRNumerator;
      const aprDenominator = poolNFTInfo.APRDenominator;
      const apr = aprDenominator > 0 ? `${((aprNumerator / aprDenominator) * 100).toFixed(2)}%` : "N/A";
      const royaltyPrice = ethers.formatUnits(poolNFTInfo.royaltyPrice, 18);

      return {
        networkIcon: logoArbitrum, // Путь к иконке сети
        poolId: poolId,
        quoteToken: `${quoteTokenAmount} ${quoteTokenSymbol} + ${baseTokenAmount} ${baseTokenSymbol}`,
        yieldProfit: `${quoteTokenYieldProfit} ${quoteTokenSymbol} + ${baseTokenYieldProfit} ${baseTokenSymbol}`,
        tradeProfit: `${quoteTokenTradeProfit} ${quoteTokenSymbol} + ${baseTokenTradeProfit} ${baseTokenSymbol}`,
        apr: apr,
        buyRoyaltyPrice: `${royaltyPrice}`,
      };
    })
    // let tableData = [
    //   {
    //     networkIcon: logoArbitrum, // Путь к иконке
    //     poolId: 0,
    //     quoteToken: "150 USDT + 0.1 ETH",
    //     yieldProfit: "1.5 USDT + 0.0001 ETH",
    //     tradeProfit: "5.8 USDT + 0.004 ETH",
    //     apr: "105%",
    //     buyRoyaltyPrice: "1.3 ETH",
    //   }
    // ]

    return tableData
  }


  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleViewPool = (poolId) => {
    setPoolId(poolId)
  }

  const handleGrind = async (poolId) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        config.poolsNFTAbi,
        signer
      );

      const tx = await poolsNFT.grind(poolId);
      await tx.wait()

    } catch (error) {
      console.log("Failed to grind", error);
    }
  }

  const handleBuyRoyalty = async (poolId) => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      const poolsnftAddress = networkConfig.poolsnft;

      const poolsNFT = new ethers.Contract(
        poolsnftAddress,
        config.poolsNFTAbi,
        signer
      );
      const royaltyShares = await poolsNFT.calcRoyaltyPriceShares(poolId);
      const tx = await poolsNFT.buyRoyalty(poolId, {value: royaltyShares.newRoyaltyPrice});
      await tx.wait()

    } catch (error) {
      console.log("Failed to buy royalty", error);
    }
  }

  return (
    <div className="pools-table-container">
      <h2>Pools NFTs</h2>

      <div className="filters-and-pagination">
        <div className="filters">
        <input
            type="text"
            className="search-input"
            placeholder="pool id / strategy id / address"
        />
        <button className="search-button">🔍</button>
        </div>
        <div className="pagination">
        <button onClick={() => handlePageChange(currentPage - 1)}>←</button>
        {[1, 2, 3, 4].map((page) => (
            <button
            key={page}
            className={currentPage === page ? "active-page" : ""}
            onClick={() => handlePageChange(page)}
            >
            {page}
            </button>
        ))}
        <button onClick={() => handlePageChange(currentPage + 1)}>→</button>
        </div>
      </div>
      <table className="pools-table">
        <thead>
          <tr>
            <th>Network</th>
            <th>Pool ID</th>
            <th>Quote Token + Base Token</th>
            <th>Yield Profit + Trade Profit</th>
            <th>APR</th>
            <th>Buy Royalty</th>
            <th>Grind Pool</th>
            <th>View Pool</th>
          </tr>
        </thead>
        <tbody>
          {currentTableData.map((row, index) => (
            <tr key={index}>
              <td><img src={row.networkIcon} alt="Network Icon" className="network-icon" /></td>
              <td>{row.poolId}</td>
              <td>{row.quoteToken}</td>
              <td>{row.yieldProfit}<br />{row.tradeProfit}</td>
              <td>{row.apr}</td>
              <td>
                <button 
                  className="buy-royalty-button"
                  onClick={() => handleBuyRoyalty(row.poolId, row.buyRoyaltyPrice)}  
                >
                  Buy Royalty<br />
                  {row.buyRoyaltyPrice} ETH
                </button>
              </td>
              <td>
                <button 
                  className="grind-pool-button"
                  onClick={() => handleGrind(row.poolId)}
                >
                  Grind Pool
                </button>
              </td>
              <td>
                <button className="view-pool-button" onClick={() => handleViewPool(row.poolId)}>
                  View Pool
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PoolsTable;