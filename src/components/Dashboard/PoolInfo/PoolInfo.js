import React, { useState, useEffect } from 'react';
import './PoolInfo.css';

function PoolInfo({ contractAddress, abi, poolId }) {
  const [poolData, setPoolData] = useState({
    poolId: '',
    poolOwner: '',
    royaltyReceiver: '',
    assets: '',
  });

  // Заглушка для получения данных (здесь будет интеграция с контрактом)
  const fetchPoolData = async () => {
    try {
      // Временно задаем статичные данные для демонстрации
      setPoolData({
        poolId: poolId || '1',
        poolOwner: '0xC185CDED750dc34D1b289355Fe62d10e86BEDDee',
        royaltyReceiver: '0xA123CDED750dc34D1b289355Fe62d10e86BEDDfE',
        assets: '150 USDT + 0.1 ETH',
      });
    } catch (error) {
      console.error('Error fetching pool data:', error);
    }
  };

  useEffect(() => {
    fetchPoolData();
  }, [poolId]);

  return (
    <div className="pool-info-container">
      <div className="pool-info-content">
        <h2 className="pool-info-title">Pool Info</h2>
        <div className="pool-info-list">
          <p><strong>Pool ID:</strong> {poolData.poolId}</p>
          <p><strong>Pool Owner:</strong> {poolData.poolOwner}</p>
          <p><strong>Royalty Receiver:</strong> {poolData.royaltyReceiver}</p>
          <p><strong>Assets:</strong> {poolData.assets}</p>
        </div>
      </div>
    </div>
  );
}

export default PoolInfo;