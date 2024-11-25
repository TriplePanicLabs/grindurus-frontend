import React, { useState } from "react";
import "./PoolsTable.css";
import logoArbitrum from "../../assets/images/logoArbitrum.png";

function PoolsTable() {
  const [currentPage, setCurrentPage] = useState(2);

  // Пример данных для таблицы
  const tableData = [
    {
      networkIcon: logoArbitrum, // Путь к иконке
      poolId: 1,
      strategyId: 2,
      quoteToken: "150 USDT + 0.1 ETH",
      yieldProfit: "1.5 USDT + 0.0001 ETH",
      tradeProfit: "5.8 USDT + 0.004 ETH",
      apr: "105%",
      buyRoyaltyPrice: "1.3 ETH",
    },
    {
      networkIcon: logoArbitrum,
      poolId: 2,
      strategyId: 1,
      quoteToken: "150 USDT + 0.1 ETH",
      yieldProfit: "1.5 USDT + 0.0001 ETH",
      tradeProfit: "5.8 USDT + 0.004 ETH",
      apr: "9%",
      buyRoyaltyPrice: "1.3 ETH",
    },
    // Дополнительные записи...
  ];

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

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
            <th>Pool ID<br />Strategy ID</th>
            <th>Quote Token + Base Token</th>
            <th>Yield Profit + Trade Profit</th>
            <th>APR</th>
            <th>Buy Royalty</th>
            <th>Grind Pool</th>
            <th>View Pool</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((row, index) => (
            <tr key={index}>
              <td><img src={row.networkIcon} alt="Network Icon" className="network-icon" /></td>
              <td>{row.poolId}<br />{row.strategyId}</td>
              <td>{row.quoteToken}</td>
              <td>{row.yieldProfit}<br />{row.tradeProfit}</td>
              <td>{row.apr}</td>
              <td>
                <button className="buy-royalty-button">
                  Buy royalty<br />
                  {row.buyRoyaltyPrice}
                </button>
              </td>
              <td>
                <button className="grind-pool-button">Grind Pool</button>
              </td>
              <td>
                <button className="view-pool-button">
                  View Pool →
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