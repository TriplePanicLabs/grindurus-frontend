import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import General from './components/General/General';
import MintPoolNFT from './components/MintPoolNFT/MintPoolNFT';
import PoolsTable from "./components/PoolsTable/PoolsTable";

function App() {

  const [selectedChainId, setSelectedChainId] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');

  const onWalletConnect = (address, chainId) => {
    setWalletAddress(address);
    setSelectedChainId(chainId);
  };

  return (
    <div className="app-container">
      <Header onWalletConnect={onWalletConnect} />
      <div className="content">
        <General />
        <MintPoolNFT />
        
      </div>
      <div className="table-section">
        <PoolsTable />
      </div>
    </div>
  );
}

export default App;