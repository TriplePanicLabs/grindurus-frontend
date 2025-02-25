import logoArbitrum from '../src/assets/images/logoArbitrum.png';
import logoPolygon from '../src/assets/images/logoPolygon.png';
import logoOptimism from '../src/assets/images/logoOptimism.png';
import logoBase from '../src/assets/images/logoBase.png';
import logoUSDT from '../src/assets/images/logoUSDT.png';
import logoUSDC from '../src/assets/images/logoUSDC.png';
import logoWETH from '../src/assets/images/logoWETH.png';
// import logoWBTC from '../src/assets/images/logoWETH.png';

const config = {
  arbitrum: {
    name: 'Arbitrum',
    chainId: '0xa4b1',
    logo: logoArbitrum,
    poolsnft: '0x67479C0EB7dE48A2a480532233623d5233B33295',
    registry: '0x21b111fd6a43C72Ce946A2C9fD7D7ECbc313fbDC',
    intentsnft: '0x6F5A522C76fA20717a2edA165eE47D9F7Df9f0D4',
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
    { "type": "constructor", "inputs": [], "stateMutability": "nonpayable" },
    { "type": "receive", "stateMutability": "payable" },
    {
      "type": "function",
      "name": "DENOMINATOR",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "baseURI",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "buyRoyalty",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "royaltyPricePaid",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "refund", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "buyRoyaltyTo",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "to", "type": "address", "internalType": "address payable" }
      ],
      "outputs": [
        {
          "name": "royaltyPricePaid",
          "type": "uint256",
          "internalType": "uint256"
        },
        { "name": "refund", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "calcGRETHShares",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "grethReward", "type": "uint256", "internalType": "uint256" },
        { "name": "grinder", "type": "address", "internalType": "address" }
      ],
      "outputs": [
        { "name": "actors", "type": "address[]", "internalType": "address[]" },
        {
          "name": "grethShares",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "calcRoyaltyPriceShares",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "compensationShare",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "poolOwnerShare",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "reserveShare",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "lastGrinderShare",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "oldRoyaltyPrice",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "newRoyaltyPrice",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "calcRoyaltyShares",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "profit", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "receivers",
          "type": "address[]",
          "internalType": "address[]"
        },
        { "name": "amounts", "type": "uint256[]", "internalType": "uint256[]" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "deposit",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        {
          "name": "depositedAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "deposited",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "token", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "execute",
      "inputs": [
        { "name": "target", "type": "address", "internalType": "address" },
        { "name": "value", "type": "uint256", "internalType": "uint256" },
        { "name": "data", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "exit",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "baseTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "getApproved",
      "inputs": [
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getConfig",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "longNumberMax", "type": "uint8", "internalType": "uint8" },
        { "name": "hedgeNumberMax", "type": "uint8", "internalType": "uint8" },
        { "name": "extraCoef", "type": "uint256", "internalType": "uint256" },
        {
          "name": "priceVolatility",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "initHedgeSellPercent",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "returnPercentLongSell",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "returnPercentHedgeSell",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "returnPercentHedgeRebuy",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPoolIdsOf",
      "inputs": [
        { "name": "poolOwner", "type": "address", "internalType": "address" }
      ],
      "outputs": [
        {
          "name": "totalPoolIds",
          "type": "uint256",
          "internalType": "uint256"
        },
        {
          "name": "poolIdsOwnedByPoolOwner",
          "type": "uint256[]",
          "internalType": "uint256[]"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPoolNFTInfos",
      "inputs": [
        { "name": "fromPoolId", "type": "uint256", "internalType": "uint256" },
        { "name": "toPoolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "poolInfos",
          "type": "tuple[]",
          "internalType": "struct IPoolsNFT.PoolNFTInfo[]",
          "components": [
            { "name": "poolId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "config",
              "type": "tuple",
              "internalType": "struct IURUS.Config",
              "components": [
                {
                  "name": "longNumberMax",
                  "type": "uint8",
                  "internalType": "uint8"
                },
                {
                  "name": "hedgeNumberMax",
                  "type": "uint8",
                  "internalType": "uint8"
                },
                {
                  "name": "extraCoef",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "priceVolatilityPercent",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "initHedgeSellPercent",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "returnPercentLongSell",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "returnPercentHedgeSell",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "returnPercentHedgeRebuy",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            },
            {
              "name": "strategyId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "quoteToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "baseToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "quoteTokenSymbol",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "baseTokenSymbol",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "quoteTokenAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "baseTokenAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "quoteTokenYieldProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "baseTokenYieldProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "quoteTokenTradeProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "baseTokenTradeProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "APRNumerator",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "APRDenominator",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "activeCapital",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "royaltyPrice",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPoolNFTInfosBy",
      "inputs": [
        { "name": "_poolIds", "type": "uint256[]", "internalType": "uint256[]" }
      ],
      "outputs": [
        {
          "name": "poolInfos",
          "type": "tuple[]",
          "internalType": "struct IPoolsNFT.PoolNFTInfo[]",
          "components": [
            { "name": "poolId", "type": "uint256", "internalType": "uint256" },
            {
              "name": "config",
              "type": "tuple",
              "internalType": "struct IURUS.Config",
              "components": [
                {
                  "name": "longNumberMax",
                  "type": "uint8",
                  "internalType": "uint8"
                },
                {
                  "name": "hedgeNumberMax",
                  "type": "uint8",
                  "internalType": "uint8"
                },
                {
                  "name": "extraCoef",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "priceVolatilityPercent",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "initHedgeSellPercent",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "returnPercentLongSell",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "returnPercentHedgeSell",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "returnPercentHedgeRebuy",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            },
            {
              "name": "strategyId",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "quoteToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "baseToken",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "quoteTokenSymbol",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "baseTokenSymbol",
              "type": "string",
              "internalType": "string"
            },
            {
              "name": "quoteTokenAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "baseTokenAmount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "quoteTokenYieldProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "baseTokenYieldProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "quoteTokenTradeProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "baseTokenTradeProfit",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "APRNumerator",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "APRDenominator",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "activeCapital",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "royaltyPrice",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getPositions",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "long",
          "type": "tuple",
          "internalType": "struct IURUS.Position",
          "components": [
            { "name": "number", "type": "uint8", "internalType": "uint8" },
            { "name": "numberMax", "type": "uint8", "internalType": "uint8" },
            {
              "name": "priceMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "liquidity",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "qty", "type": "uint256", "internalType": "uint256" },
            { "name": "price", "type": "uint256", "internalType": "uint256" },
            { "name": "feeQty", "type": "uint256", "internalType": "uint256" },
            { "name": "feePrice", "type": "uint256", "internalType": "uint256" }
          ]
        },
        {
          "name": "hedge",
          "type": "tuple",
          "internalType": "struct IURUS.Position",
          "components": [
            { "name": "number", "type": "uint8", "internalType": "uint8" },
            { "name": "numberMax", "type": "uint8", "internalType": "uint8" },
            {
              "name": "priceMin",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "liquidity",
              "type": "uint256",
              "internalType": "uint256"
            },
            { "name": "qty", "type": "uint256", "internalType": "uint256" },
            { "name": "price", "type": "uint256", "internalType": "uint256" },
            { "name": "feeQty", "type": "uint256", "internalType": "uint256" },
            { "name": "feePrice", "type": "uint256", "internalType": "uint256" }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getRoyaltyReceiver",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "receiver", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getThresholds",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" },
        { "name": "", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grETH",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract IGRETH" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grethGrinderShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grethPoolOwnerShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grethReserveShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grethRoyaltyReceiverShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "grind",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "isGrinded", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "grindOp",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "op", "type": "uint8", "internalType": "uint8" }
      ],
      "outputs": [
        { "name": "isGrinded", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "grindOpTo",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "op", "type": "uint8", "internalType": "uint8" },
        { "name": "grinder", "type": "address", "internalType": "address" }
      ],
      "outputs": [
        { "name": "isGrinded", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "grindTo",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "grinder", "type": "address", "internalType": "address" }
      ],
      "outputs": [
        { "name": "isGrinded", "type": "bool", "internalType": "bool" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "init",
      "inputs": [
        { "name": "_grETH", "type": "address", "internalType": "address" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "isAgentOf",
      "inputs": [
        { "name": "_ownerOf", "type": "address", "internalType": "address" },
        { "name": "_agent", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" },
        { "name": "operator", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isDepositorOf",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "_depositor", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isStrategiest",
      "inputs": [
        { "name": "strategiest", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isStrategyStopped",
      "inputs": [
        { "name": "strategyId", "type": "uint16", "internalType": "uint16" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "lastGrinder",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "address payable" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "minDeposit",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        { "name": "strategyId", "type": "uint16", "internalType": "uint16" },
        { "name": "quoteToken", "type": "address", "internalType": "address" },
        { "name": "baseToken", "type": "address", "internalType": "address" },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "mintTo",
      "inputs": [
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "strategyId", "type": "uint16", "internalType": "uint16" },
        { "name": "quoteToken", "type": "address", "internalType": "address" },
        { "name": "baseToken", "type": "address", "internalType": "address" },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "minter",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "address payable" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "pendingOwner",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "address payable" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "poolIds",
      "inputs": [
        { "name": "pool", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "poolOwnerShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "pools",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "poolsNFTImage",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IPoolsNFTImage"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "rebalance",
      "inputs": [
        { "name": "poolId0", "type": "uint256", "internalType": "uint256" },
        { "name": "poolId1", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "royaltyGrinderShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyInfo",
      "inputs": [
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
        { "name": "salePrice", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "receiver", "type": "address", "internalType": "address" },
        {
          "name": "royaltyAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyPrice",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyPriceCompensationShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyPriceGrinderShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyPricePoolOwnerShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyPriceReserveShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyReceiver",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyReceiverShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "royaltyReserveShareNumerator",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint16", "internalType": "uint16" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        { "name": "from", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        { "name": "from", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
        { "name": "data", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setAgent",
      "inputs": [
        { "name": "_agent", "type": "address", "internalType": "address" },
        { "name": "_agentApproval", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        { "name": "operator", "type": "address", "internalType": "address" },
        { "name": "approved", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setBaseURI",
      "inputs": [
        { "name": "_baseURI", "type": "string", "internalType": "string" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setDepositor",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "depositor", "type": "address", "internalType": "address" },
        { "name": "_depositorApproval", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setGRETHShares",
      "inputs": [
        {
          "name": "_grethGrinderShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_grethReserveShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_grethPoolOwnerShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_grethRoyaltyReceiverShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setMinDeposit",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" },
        { "name": "_minDeposit", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setPoolsNFTImage",
      "inputs": [
        {
          "name": "_poolsNFTImage",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRoyaltyPrice",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "_royaltyPrice",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRoyaltyPriceShares",
      "inputs": [
        {
          "name": "_royaltyPriceCompensationShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_royaltyPriceReserveShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_royaltyPricePoolOwnerShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_royaltyPriceGrinderShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRoyaltyShares",
      "inputs": [
        {
          "name": "_poolOwnerRoyaltyShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_royaltyReceiverShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_royaltyReserveShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        },
        {
          "name": "_royaltyGrinderShareNumerator",
          "type": "uint16",
          "internalType": "uint16"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setStrategiest",
      "inputs": [
        { "name": "strategiest", "type": "address", "internalType": "address" },
        { "name": "_isStrategiest", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setStrategyFactory",
      "inputs": [
        {
          "name": "_strategyFactory",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setStrategyStopped",
      "inputs": [
        { "name": "strategyId", "type": "uint16", "internalType": "uint16" },
        { "name": "_isStrategyStopped", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setTokenCap",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" },
        { "name": "_tokenCap", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "strategyFactory",
      "inputs": [
        { "name": "strategyId", "type": "uint16", "internalType": "uint16" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        { "name": "interfaceId", "type": "bytes4", "internalType": "bytes4" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenByIndex",
      "inputs": [
        { "name": "index", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenCap",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenOfOwnerByIndex",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" },
        { "name": "index", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "uri", "type": "string", "internalType": "string" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalDeposited",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalPools",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        { "name": "from", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferOwnership",
      "inputs": [
        {
          "name": "newOwner",
          "type": "address",
          "internalType": "address payable"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdraw",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        { "name": "withdrawn", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "withdrawTo",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" },
        { "name": "to", "type": "address", "internalType": "address" },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [
        { "name": "withdrawn", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "BuyRoyalty",
      "inputs": [
        {
          "name": "poolId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "buyer",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "paidPrice",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Deposit",
      "inputs": [
        {
          "name": "poolId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "pool",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "quoteToken",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Exit",
      "inputs": [
        {
          "name": "poolId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "baseTokenAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Grind",
      "inputs": [
        {
          "name": "poolId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "op",
          "type": "uint8",
          "indexed": false,
          "internalType": "uint8"
        },
        {
          "name": "grinder",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "isGrinded",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Mint",
      "inputs": [
        {
          "name": "poolId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "baseToken",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "quoteToken",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Rebalance",
      "inputs": [
        {
          "name": "poolId0",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "poolId1",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetBaseURI",
      "inputs": [
        {
          "name": "baseURI",
          "type": "string",
          "indexed": false,
          "internalType": "string"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetFactoryStrategy",
      "inputs": [
        {
          "name": "strategyId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "factoryStrategy",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetGRETHShares",
      "inputs": [
        {
          "name": "_grethGrinderShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_grethReserveShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_grethPoolOwnerShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_grethRoyaltyReceiverShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetMinDeposit",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "minDeposit",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetPoolsNFTImage",
      "inputs": [
        {
          "name": "poolsNFTImage",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetRoyaltyPriceShares",
      "inputs": [
        {
          "name": "_royaltyPriceCompensationShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_royaltyPriceReserveShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_royaltyPricePoolOwnerShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_royaltyPriceGrinderShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetRoyaltyShares",
      "inputs": [
        {
          "name": "_poolOwnerRoyaltyShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_royaltyReceiverShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_royaltyReserveShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        },
        {
          "name": "_royaltyGrinderShareNumerator",
          "type": "uint16",
          "indexed": false,
          "internalType": "uint16"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetStrategiest",
      "inputs": [
        {
          "name": "strategiest",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "isStrategiest",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetTokenCap",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "_tokenCap",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Withdraw",
      "inputs": [
        {
          "name": "poolId",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "quoteToken",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "quoteTokenAmount",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "DifferentBaseTokens", "inputs": [] },
    { "type": "error", "name": "DifferentOwnersOfPools", "inputs": [] },
    { "type": "error", "name": "DifferentQuoteTokens", "inputs": [] },
    {
      "type": "error",
      "name": "ERC721EnumerableForbiddenBatchMint",
      "inputs": []
    },
    {
      "type": "error",
      "name": "ERC721IncorrectOwner",
      "inputs": [
        { "name": "sender", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
        { "name": "owner", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InsufficientApproval",
      "inputs": [
        { "name": "operator", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidApprover",
      "inputs": [
        { "name": "approver", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidOperator",
      "inputs": [
        { "name": "operator", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidOwner",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidReceiver",
      "inputs": [
        { "name": "receiver", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidSender",
      "inputs": [
        { "name": "sender", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721NonexistentToken",
      "inputs": [
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721OutOfBoundsIndex",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" },
        { "name": "index", "type": "uint256", "internalType": "uint256" }
      ]
    },
    { "type": "error", "name": "ExceededDeposit", "inputs": [] },
    { "type": "error", "name": "ExceededDepositCap", "inputs": [] },
    { "type": "error", "name": "InsufficientDeposit", "inputs": [] },
    { "type": "error", "name": "InsufficientRoyaltyPrice", "inputs": [] },
    { "type": "error", "name": "InvalidGRETHShares", "inputs": [] },
    { "type": "error", "name": "InvalidOp", "inputs": [] },
    { "type": "error", "name": "InvalidRoyaltyNumerator", "inputs": [] },
    { "type": "error", "name": "InvalidRoyaltyPriceShare", "inputs": [] },
    { "type": "error", "name": "InvalidRoyaltyShares", "inputs": [] },
    { "type": "error", "name": "NotAgent", "inputs": [] },
    { "type": "error", "name": "NotDepositor", "inputs": [] },
    { "type": "error", "name": "NotOwner", "inputs": [] },
    { "type": "error", "name": "NotOwnerOf", "inputs": [] },
    { "type": "error", "name": "NotOwnerOrPending", "inputs": [] },
    { "type": "error", "name": "NotStrategiest", "inputs": [] },
    { "type": "error", "name": "ReentrancyGuardReentrantCall", "inputs": [] },
    {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ]
    },
    { "type": "error", "name": "StrategyStopped", "inputs": [] },
    { "type": "error", "name": "ZeroNewRoyaltyPrice", "inputs": [] }
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
  ],
  intentsNFTAbi: [
    {
      "type": "constructor",
      "inputs": [
        { "name": "_poolsNFT", "type": "address", "internalType": "address" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "MIN_PERIOD",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ONE_DAY",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "_mintTo",
      "inputs": [
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "period", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "intentId", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "approve",
      "inputs": [
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "balanceOf",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "baseURI",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "calcPayment",
      "inputs": [
        {
          "name": "paymentToken",
          "type": "address",
          "internalType": "address"
        },
        { "name": "period", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        {
          "name": "paymentAmount",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "chainId",
      "inputs": [],
      "outputs": [
        { "name": "id", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "expire",
      "inputs": [
        { "name": "intentId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getApproved",
      "inputs": [
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getIntent",
      "inputs": [
        { "name": "account", "type": "address", "internalType": "address" }
      ],
      "outputs": [
        { "name": "_account", "type": "address", "internalType": "address" },
        { "name": "_expire", "type": "uint256", "internalType": "uint256" },
        { "name": "_poolIds", "type": "uint256[]", "internalType": "uint256[]" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "intentIdOf",
      "inputs": [
        { "name": "account", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "intentsNFTImage",
      "inputs": [],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "contract IIntentsNFTImage"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isApprovedForAll",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" },
        { "name": "operator", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "isPaymentToken",
      "inputs": [
        { "name": "paymentToken", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "mint",
      "inputs": [
        {
          "name": "paymentToken",
          "type": "address",
          "internalType": "address"
        },
        { "name": "period", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "mintTo",
      "inputs": [
        {
          "name": "paymentToken",
          "type": "address",
          "internalType": "address"
        },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "period", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "intentId", "type": "uint256", "internalType": "uint256" }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "name",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "owner",
      "inputs": [],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ownerOf",
      "inputs": [
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [{ "name": "", "type": "address", "internalType": "address" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "poolsNFT",
      "inputs": [],
      "outputs": [
        { "name": "", "type": "address", "internalType": "contract IPoolsNFT" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "ratePerOneDay",
      "inputs": [
        { "name": "paymentToken", "type": "address", "internalType": "address" }
      ],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        { "name": "from", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "safeTransferFrom",
      "inputs": [
        { "name": "from", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
        { "name": "data", "type": "bytes", "internalType": "bytes" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setApprovalForAll",
      "inputs": [
        { "name": "operator", "type": "address", "internalType": "address" },
        { "name": "approved", "type": "bool", "internalType": "bool" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setBaseURI",
      "inputs": [
        { "name": "_baseURI", "type": "string", "internalType": "string" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setIntentsNFTImage",
      "inputs": [
        {
          "name": "_intentsNFTImage",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "setRatePerOneDay",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" },
        {
          "name": "_ratePerOneDay",
          "type": "uint256",
          "internalType": "uint256"
        }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "supportsInterface",
      "inputs": [
        { "name": "interfaceId", "type": "bytes4", "internalType": "bytes4" }
      ],
      "outputs": [{ "name": "", "type": "bool", "internalType": "bool" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "symbol",
      "inputs": [],
      "outputs": [{ "name": "", "type": "string", "internalType": "string" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "tokenURI",
      "inputs": [
        { "name": "poolId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [
        { "name": "uri", "type": "string", "internalType": "string" }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalIntents",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "totalSupply",
      "inputs": [],
      "outputs": [{ "name": "", "type": "uint256", "internalType": "uint256" }],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "transfer",
      "inputs": [
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "intentId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "transferFrom",
      "inputs": [
        { "name": "from", "type": "address", "internalType": "address" },
        { "name": "to", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ],
      "outputs": [],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "Approval",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "ApprovalForAll",
      "inputs": [
        {
          "name": "owner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "operator",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "approved",
          "type": "bool",
          "indexed": false,
          "internalType": "bool"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "SetRatePerOneDay",
      "inputs": [
        {
          "name": "token",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "_ratePerOneDay",
          "type": "uint256",
          "indexed": false,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "from",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "to",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "tokenId",
          "type": "uint256",
          "indexed": true,
          "internalType": "uint256"
        }
      ],
      "anonymous": false
    },
    { "type": "error", "name": "BelowMinPeriod", "inputs": [] },
    {
      "type": "error",
      "name": "ERC721IncorrectOwner",
      "inputs": [
        { "name": "sender", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" },
        { "name": "owner", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InsufficientApproval",
      "inputs": [
        { "name": "operator", "type": "address", "internalType": "address" },
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidApprover",
      "inputs": [
        { "name": "approver", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidOperator",
      "inputs": [
        { "name": "operator", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidOwner",
      "inputs": [
        { "name": "owner", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidReceiver",
      "inputs": [
        { "name": "receiver", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721InvalidSender",
      "inputs": [
        { "name": "sender", "type": "address", "internalType": "address" }
      ]
    },
    {
      "type": "error",
      "name": "ERC721NonexistentToken",
      "inputs": [
        { "name": "tokenId", "type": "uint256", "internalType": "uint256" }
      ]
    },
    { "type": "error", "name": "NotOwner", "inputs": [] },
    { "type": "error", "name": "NotPaymentToken", "inputs": [] },
    {
      "type": "error",
      "name": "SafeERC20FailedOperation",
      "inputs": [
        { "name": "token", "type": "address", "internalType": "address" }
      ]
    }
  ]
  
};

export default config;
