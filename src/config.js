import logoArbitrum from '../src/assets/images/logoArbitrum.png';
import logoPolygon from '../src/assets/images/logoPolygon.png';
import logoOptimism from '../src/assets/images/logoOptimism.png';
import logoBase from '../src/assets/images/logoBase.png';
import logoUSDT from '../src/assets/images/logoUSDT.png';
import logoUSDC from '../src/assets/images/logoUSDC.png';
import logoWETH from '../src/assets/images/logoWETH.png';
import logoWBTC from '../src/assets/images/logoWETH.png';

const config = {
  arbitrum: {
    name: 'Arbitrum',
    chainId: '0xa4b1',
    logo: logoArbitrum,
    poolsnft: '0xfC7a86Ab7c0E48F26F3aEe7382eBc6fe313956Db',
    registry: '0x8BCC8B5Cd7e9E0138896A82E6Db7b55b283EbBcB',
    strategies: [
      { 
        id: 0, 
        description: "UniswapV3 with URUS"
      },
      {
        id: 1,
        description: 'AAVEV3 + UniswapV3 with URUS'
      }
    ], 
    quoteTokens: [
      {
        symbol: 'USDT', 
        address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
        decimals: 6, 
        logo: logoUSDT, 
      },
      { 
        symbol: 'USDC', 
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 
        decimals: 18, 
        logo: logoUSDC,
      },
      { 
        symbol: 'WETH', 
        address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 
        decimals: 18, 
        logo: logoWETH,

      },
    ],
    baseTokens: [
      { 
        symbol: 'WETH', 
        address: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1', 
        decimals: 18, 
        logo: logoWETH,
      },
      {
        symbol: 'USDT', 
        address: '0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9', // USDT
        decimals: 6, 
        logo: logoUSDT, 
      },
      { 
        symbol: 'USDC', 
        address: '0xaf88d065e77c8cC2239327C5EDb3A432268e5831', 
        decimals: 18, 
        logo: logoUSDC,
      },
    ]
  },
  base: {
    name: "Base",
    chainId: '0x2105',
    logo: logoBase,
    poolsnft: '',
    registry: '',
    strategies: [],
    quoteTokens: [],
    baseTokens: [],
  },
  polygon: {
    name: "Polygon",
    chainId: '0x89',
    logo: logoPolygon,
    poolsnft: '',
    registry: '',
    strategies: [],
    quoteTokens: [],
    baseTokens: [],
  },
  optimism: {
    name: "Optimism",
    chainId: '0xa',
    logo: logoOptimism,
    poolsnft: '',
    registry: '',
    strategies: [],
    quoteTokens: [],
    baseTokens: [],
  },
  poolsNFTAbi : [
    {
      "inputs": [],
      "name": "totalPools",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "fromPoolId", "type": "uint256" },
        { "internalType": "uint256", "name": "toPoolId", "type": "uint256" }
      ],
      "name": "getPoolNFTInfos",
      "outputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "poolId", "type": "uint256" },
            {
              "components": [
                { "internalType": "uint8", "name": "longNumberMax", "type": "uint8" },
                { "internalType": "uint8", "name": "hedgeNumberMax", "type": "uint8" },
                { "internalType": "uint256", "name": "extraCoef", "type": "uint256" },
                { "internalType": "uint256", "name": "priceVolatilityPercent", "type": "uint256" },
                { "internalType": "uint256", "name": "initHedgeSellPercent", "type": "uint256" },
                { "internalType": "uint256", "name": "returnPercentLongSell", "type": "uint256" },
                { "internalType": "uint256", "name": "returnPercentHedgeSell", "type": "uint256" },
                { "internalType": "uint256", "name": "returnPercentHedgeRebuy", "type": "uint256" }
              ],
              "internalType": "tuple",
              "name": "config",
              "type": "tuple"
            },
            { "internalType": "uint256", "name": "strategyId", "type": "uint256" },
            { "internalType": "address", "name": "quoteToken", "type": "address" },
            { "internalType": "address", "name": "baseToken", "type": "address" },
            { "internalType": "string", "name": "quoteTokenSymbol", "type": "string" },
            { "internalType": "string", "name": "baseTokenSymbol", "type": "string" },
            { "internalType": "uint256", "name": "quoteTokenAmount", "type": "uint256" },
            { "internalType": "uint256", "name": "baseTokenAmount", "type": "uint256" },
            { "internalType": "uint256", "name": "quoteTokenYieldProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "baseTokenYieldProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "quoteTokenTradeProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "baseTokenTradeProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "APRNumerator", "type": "uint256" },
            { "internalType": "uint256", "name": "APRDenominator", "type": "uint256" },
            { "internalType": "uint256", "name": "activeCapital", "type": "uint256" },
            { "internalType": "uint256", "name": "royaltyPrice", "type": "uint256" }
          ],
          "internalType": "struct IPoolsNFT.PoolNFTInfo[]",
          "name": "poolsInfo",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256[]", "name": "_poolIds", "type": "uint256[]" }
      ],
      "name": "getPoolNFTInfosBy",
      "outputs": [
        {
          "components": [
            { "internalType": "uint256", "name": "poolId", "type": "uint256" },
            {
              "components": [
                { "internalType": "uint8", "name": "longNumberMax", "type": "uint8" },
                { "internalType": "uint8", "name": "hedgeNumberMax", "type": "uint8" },
                { "internalType": "uint256", "name": "extraCoef", "type": "uint256" },
                { "internalType": "uint256", "name": "priceVolatilityPercent", "type": "uint256" },
                { "internalType": "uint256", "name": "initHedgeSellPercent", "type": "uint256" },
                { "internalType": "uint256", "name": "returnPercentLongSell", "type": "uint256" },
                { "internalType": "uint256", "name": "returnPercentHedgeSell", "type": "uint256" },
                { "internalType": "uint256", "name": "returnPercentHedgeRebuy", "type": "uint256" }
              ],
              "internalType": "tuple",
              "name": "config",
              "type": "tuple"
            },
            { "internalType": "uint256", "name": "strategyId", "type": "uint256" },
            { "internalType": "address", "name": "quoteToken", "type": "address" },
            { "internalType": "address", "name": "baseToken", "type": "address" },
            { "internalType": "string", "name": "quoteTokenSymbol", "type": "string" },
            { "internalType": "string", "name": "baseTokenSymbol", "type": "string" },
            { "internalType": "uint256", "name": "quoteTokenAmount", "type": "uint256" },
            { "internalType": "uint256", "name": "baseTokenAmount", "type": "uint256" },
            { "internalType": "uint256", "name": "quoteTokenYieldProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "baseTokenYieldProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "quoteTokenTradeProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "baseTokenTradeProfit", "type": "uint256" },
            { "internalType": "uint256", "name": "APRNumerator", "type": "uint256" },
            { "internalType": "uint256", "name": "APRDenominator", "type": "uint256" },
            { "internalType": "uint256", "name": "activeCapital", "type": "uint256" },
            { "internalType": "uint256", "name": "royaltyPrice", "type": "uint256" }
          ],
          "internalType": "struct IPoolsNFT.PoolNFTInfo[]",
          "name": "poolInfos",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "poolId", "type": "uint256" }
      ],
      "name": "grind",
      "outputs": [
        { "internalType": "bool", "name": "isGrinded", "type": "bool" }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        { "internalType": "uint256", "name": "poolId", "type": "uint256" }
      ],
      "name": "buyRoyalty",
      "outputs": [
        { "internalType": "uint256", "name": "royaltyPricePaid", "type": "uint256" },
        { "internalType": "uint256", "name": "refund", "type": "uint256" }
      ],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "calcRoyaltyPriceShares",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "compensationShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "poolOwnerShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "treasuryShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "lastGrinderShare",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "oldRoyaltyPrice",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "newRoyaltyPrice",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "poolId",
          "type": "uint256"
        }
      ],
      "name": "royaltyReceiver",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "token",
          "type": "address"
        }
      ],
      "name": "totalDeposited",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ],
  registryAbi: [
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "strategyId",
          "type": "uint16"
        }
      ],
      "name": "strategyIdIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "strategyId",
          "type": "uint16"
        }
      ],
      "name": "strategyDescription",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        }
      ],
      "name": "quoteTokenIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        }
      ],
      "name": "baseTokenIndex",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        }
      ],
      "name": "oracles",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        }
      ],
      "name": "quoteTokenCoherence",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        }
      ],
      "name": "baseTokenCoherence",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "setOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "oracle",
          "type": "address"
        }
      ],
      "name": "unsetOracle",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "strategyId",
          "type": "uint16"
        },
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "strategyPair",
          "type": "bool"
        }
      ],
      "name": "setStrategyPair",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "strategyId",
          "type": "uint16"
        },
        {
          "internalType": "string",
          "name": "_strategyDescription",
          "type": "string"
        }
      ],
      "name": "addStrategyId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "strategyId",
          "type": "uint16"
        },
        {
          "internalType": "string",
          "name": "_strategyDescription",
          "type": "string"
        }
      ],
      "name": "modifyStrategyDescription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint16",
          "name": "strategyId",
          "type": "uint16"
        }
      ],
      "name": "removeStrategyId",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        }
      ],
      "name": "getOracle",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "strategyId",
          "type": "uint256"
        },
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        }
      ],
      "name": "isStrategyPair",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "quoteToken",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "baseToken",
          "type": "address"
        }
      ],
      "name": "hasOracle",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]
  
};

export default config;
