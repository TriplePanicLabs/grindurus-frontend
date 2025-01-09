import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import './Header.css';
import logoGrindURUS from '../../assets/images/logoGrindURUS.png';
import logoArbitrum from '../../assets/images/logoArbitrum.png';
import logoPolygon from '../../assets/images/logoPolygon.png';
import logoOptimism from '../../assets/images/logoOptimism.png';
import logoBase from '../../assets/images/logoBase.png';

function Header({ onWalletConnect , setView }) {

  const [selectedNetworkId, setSelectedNetwork] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');
  const [showMenu, setShowMenu] = useState(false);

  const networks = [
    {// networkId == 0
      name: 'Arbitrum',
      chainId: '0xa4b1',
      logo: logoArbitrum
    },
    {// networkId == 1
      name: 'Polygon',
      chainId: '0x89',
      logo: logoPolygon
    },
    {// networkId == 2
      name: 'Optimism',
      chainId: '0xa',
      logo: logoOptimism
    },
    {// networkId == 3
      name: 'Base',
      chainId: '0x2105',
      logo: logoBase
    }

  ]

  const handleConnectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
        onWalletConnect(accounts[0], networks[selectedNetworkId].chainId)
      } catch (error) {
        console.error('MetaMask error:', error);
      }
    } else {
      alert('Metamask is not installed');
    }
  };

  const handleNetworkChange = async (networkId) => {
    setSelectedNetwork(networkId);
    const chainId = networks[networkId].chainId;
    if (window.ethereum) {
      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: chainId }], // Преобразование chainId в hex
        });
      } catch (error) {
        console.error('Change network error:', error);
      }
    }
  };

  const handleHeaderClick = async (view) => {
    setView(view);
  }

  const toggleMenu = () => {
    if (walletAddress == '') {
      return
    }
    setShowMenu(!showMenu);
  };

  const handleLogoutClick = () => {
    setWalletAddress('');
    setShowMenu(false);
    console.log('Wallet disconnected');
  }

  return (
    <header className="header">
      <div className="header-left">
        <img src={logoGrindURUS} alt="Logo" className="logo" onClick={() => handleHeaderClick('dashboard')}/>
        <button className="dashboard-button" onClick={() => handleHeaderClick('dashboard')}>Dashboard</button>
        <button className="dashboard-button grEth-button" onClick={() => handleHeaderClick('greth')}>grETH</button>
        <button className="dashboard-button grEth-button" onClick={() => handleHeaderClick('grinder')}>Grinder AI Agent</button>
      </div>

      <div className="header-right">
        <img
          src={networks[selectedNetworkId].logo}
          alt={networks[selectedNetworkId].name}
          className="network-logo"
        />
        <div className="network-select">
          <select onChange={(e) => handleNetworkChange(e.target.value)}>
            {networks.map((network, index) => (
              <option key={index} value={index}>
                {network.name}
              </option>
            ))}
          </select>
        </div>
        <div
          className="wallet-menu-container"
          onMouseEnter={toggleMenu}
          onMouseLeave={toggleMenu}
        >
        <button className="connect-wallet" onClick={handleConnectWallet}>
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
          </button>
          {showMenu && (
              <div className="wallet-menu">
                <div className="wallet-menu-item" onClick={() => handleHeaderClick('profile')}>
                  Profile
                </div>
                <div className="wallet-menu-item" onClick={() => handleLogoutClick()}>
                  Logout
                </div>
              </div>
            )}
        </div>
      </div>
    </header>
  );
}

export default Header;
