import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import General from './components/General/General';
import MintPoolNFT from './components/MintPoolNFT/MintPoolNFT';
import PoolsTable from "./components/PoolsTable/PoolsTable";
import GRETHInfo from './components/GRETHInfo/GRETHInfo';
import GRETHBurn from './components/GRETHBurn/GRETHBurn';
import FreePlan from './components/NoAgent/NoAgent';
import GrinderAIAgent from './components/GrinderAIAgent/GrinderAIAgent';
import GrinderAIAgentPlus from './components/GrinderAIAgentPlus/GrinderAIAgentPlus';

function App() {

  const [selectedChainId, setSelectedChainId] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  const [view, setView] = useState('dashboard');

  const onWalletConnect = (address, chainId) => {
    setWalletAddress(address);
    setSelectedChainId(chainId);
  };

  const renderContent = () => {
    switch (view) {
      case 'dashboard':
        return (
          <>
            <div className="dashboard-content">
              <General />
              <MintPoolNFT />  
            </div>
            <div className="table-section">
              <PoolsTable />
            </div>
        </>
        );
      case 'greth':
        return(
          <>
            <div className="greth-content">
              <GRETHInfo />
              <GRETHBurn />
            </div>
          </>
        )
      case 'grinder':
        return(
          <>
            <div className='grinder-content'>
              <FreePlan />
              <GrinderAIAgent />
              <GrinderAIAgentPlus />
            </div>
          </>
        )
      case 'profile':
        return(
          <>
            <div className='profile-content'>
              adsdas
            </div>
          </>
        )
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      <Header onWalletConnect={onWalletConnect} setView={setView} />      
      {renderContent()}
    </div>
  );
}

export default App;