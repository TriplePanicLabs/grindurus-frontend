import React, {useEffect, useState} from 'react';
import './App.css';
import config from './config';
import Header from './components/Header/Header';
import GRETH from './components/GRETH/GRETH.js';
import FreePlan from './components/GrinderAIAgent/NoAgentPlan/NoAgentPlan.js';
import PlanInfo from './components/GrinderAIAgent/GrinderAIDeposit/GrinderAIDeposit.js';
import MintIntent from './components/GrinderAIAgent/MintIntent/MintIntent.js';
import IntentsTable from './components/GrinderAIAgent/IntentsTable/IntentsTable.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import GrinderAIAgent from './components/GrinderAIAgent/GrinderAIAgent.js';

function App() {

  const [chainId, setChainId] = useState('');
  const [networkConfig, setNetworkConfig] = useState({});
  const [walletAddress, setWalletAddress] = useState('');
  const [view, setView] = useState('dashboard');
  const [poolId, setPoolId] = useState(-1)
  const [plan, setPlan] = useState(0)

  const onWalletConnect = (address, newChainId) => {
    setWalletAddress(address);
    setChainId(newChainId);
    findAndSetNetworkConfig(newChainId); 
  };

  const findAndSetNetworkConfig = (updatedChainId) => {
    const chainToUse = updatedChainId || chainId;
    const networkKey = Object.keys(config).find(
      (key) => config[key].chainId && config[key].chainId.toLowerCase() === chainToUse.toLowerCase()
    );
    setNetworkConfig(config[networkKey] || {});
  };

  const renderContent = () => {
    if (!networkConfig || Object.keys(networkConfig).length === 0) {
      return <div>Loading network configuration...</div>;
    }
    switch (view) {
      case 'dashboard':
        return (
            <Dashboard poolId={poolId} setPoolId={setPoolId} networkConfig={networkConfig} />
        );
      case 'greth':
        return(
          <>
            <GRETH />
          </>
        )
      case 'grinder':
        return (
          <>
            <GrinderAIAgent />
          </>
        );
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
      <Header 
        onWalletConnect={onWalletConnect} 
        setView={setView} 
        setPoolId={setPoolId} 
        setChainId={setChainId} 
        findAndSetNetworkConfig={findAndSetNetworkConfig} 
      />      
      {renderContent()}
    </div>
  );
}

export default App;