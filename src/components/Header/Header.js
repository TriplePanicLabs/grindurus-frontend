import React, {useState, useEffect} from 'react';
import { ethers } from 'ethers';
import './Header.css'; // Подключаем стили для хедера
import logoGrindURUS from '../../assets/images/logoGrindURUS.png';
import logoArbitrum from '../../assets/images/logoArbitrum.png';
import logoPolygon from '../../assets/images/logoPolygon.png';
import logoOptimism from '../../assets/images/logoOptimism.png';
import logoBase from '../../assets/images/logoBase.png';

function Header({ onWalletConnect }) {

  const [selectedNetworkId, setSelectedNetwork] = useState(0);
  const [walletAddress, setWalletAddress] = useState('');

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

  return (
    <header className="header">
      {/* Left side: GrindURUS logo and button Dashboard */}
      <div className="header-left">
        <img src={logoGrindURUS} alt="Logo" className="logo" />
        <button className="dashboard-button">Dashboard</button>
      </div>

      {/* Right side: network selection and Connect button*/}
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
        <button className="connect-wallet" onClick={handleConnectWallet}>
          {walletAddress ? `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}` : 'Connect Wallet'}
        </button>
      </div>
    </header>
  );
}

export default Header;
