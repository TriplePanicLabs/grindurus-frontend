import React, {useState} from 'react';
import './App.css';
import Header from './components/Header/Header';
import GRETH from './components/GRETH/GRETH.js';
import FreePlan from './components/GrinderAIAgent/NoAgentPlan/NoAgentPlan.js';
import PlanInfo from './components/GrinderAIAgent/GrinderAIDeposit/GrinderAIDeposit.js';
import MintIntent from './components/GrinderAIAgent/MintIntent/MintIntent.js';
import IntentsTable from './components/GrinderAIAgent/IntentsTable/IntentsTable.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import GrinderAIAgent from './components/GrinderAIAgent/GrinderAIAgent.js';

function App() {

  const [selectedChainId, setSelectedChainId] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  const [view, setView] = useState('dashboard');
  const [poolId, setPoolId] = useState(-1)
  const [plan, setPlan] = useState(0)

  const onWalletConnect = (address, chainId) => {
    setWalletAddress(address);
    setSelectedChainId(chainId);
  };

  const renderContent = () => {
    switch (view) {
      case 'dashboard':
        return (
            <Dashboard poolId={poolId} setPoolId={setPoolId} />
        );
      case 'greth':
        return(
          <>
            <GRETH />
          </>
        )
      case 'grinder':
        return (
          // <>
          //   <div className="grinder-content">
          //     <FreePlan />
          //     <GrinderAIAgent />
          //     <GrinderAIAgentPlus />
          //   </div>
          //   <div className="info-intent-container">
          //     <div className="plan-info-wrapper">
          //       <PlanInfo />
          //     </div>
          //     <div className="mint-intent-wrapper">
          //       <MintIntent />
          //     </div>
          //   </div>
          //   <div className="intents-table-wrapper">
          //     <IntentsTable />
          //   </div>
          // </>
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
      <Header onWalletConnect={onWalletConnect} setView={setView} setPoolId={setPoolId} />      
      {renderContent()}
    </div>
  );
}

export default App;