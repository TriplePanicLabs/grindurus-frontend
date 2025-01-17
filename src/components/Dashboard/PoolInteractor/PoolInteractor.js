import React, { useState } from 'react';
import './PoolInteractor.css';

function PoolInteractor() {
  const [activeTab, setActiveTab] = useState('deposit/withdraw');

  return (
    <div className="pool-interactor">
      <div className="tabs">
        <div className="tab-buttons">
          <button
            onClick={() => setActiveTab('deposit/withdraw')}
            className={activeTab === 'deposit/withdraw' ? 'active' : ''}
          >
            Deposit/Withdraw
          </button>
          <button
            onClick={() => setActiveTab('config')}
            className={activeTab === 'config' ? 'active' : ''}
          >
            Configuration
          </button>
          <div 
            className="tab-indicator"
            style={{
              left: activeTab === 'deposit/withdraw' ? '0' : '50%',
            }}
          />
        </div>
      </div>

      {activeTab === 'deposit/withdraw' ? (
        <div className="deposit-withdraw">
          <div className="amount-section">
            <div className='amount-section'>
              Deposit Amount
            </div>
            <div className="input-group">
              <input
                type="number"
                placeholder="Enter deposit amount"
              />
              <button className="action-button">
                Deposit
              </button>
            </div>
          </div>

          <div className="amount-section">
            <div className='amount-section'>
              Withdraw Amount
            </div>
            <div className="input-group">
              <input
                type="number"
                defaultValue="-1"
              />
              <button className="action-button">
                Withdraw
              </button>
            </div>
          </div>

          <button className="exit-button">
            Exit
          </button>

          <div className="exit-description">
            Exit: emergency withdraw distribution of funds and ownership of strategy pool will be moved to royalty receiver.
          </div>

          <button className="royalty-button">
            Buy Royalty (1.2 ETH)
          </button>
        </div>
      ) : (
        <div className="configuration">
          <div className="config-field">
            <div>Long Number Max</div>
            <div className="input-group">
              <input
                type="number"
                defaultValue={4}
              />
              <button className="set-button">
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Hedge Number Max</div>
            <div className="input-group">
              <input
                type="number"
                defaultValue={4}
              />
              <button className="set-button">
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Extra Coefficient</div>
            <div className="input-group">
              <input
                type="number"
                defaultValue={2}
              />
              <button className="set-button">
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Price Volatility</div>
            <div className="input-group">
              <input
                type="percent"
                defaultValue={1}
              />
              <button className="set-button">
                Set
              </button>
            </div>
          </div>

          <div className="config-field">
            <div>Init Hedge Sell Percent</div>
            <div className="input-group">
              <input
                type="percent"
                defaultValue={1}
              />
              <button className="set-button">
                Set
              </button>
            </div>
          </div>

          <div className="operation-row">
            <div className="operation-select">
              <div className="operation-label">Operation</div>
              <select className="input-field">
                <option value="hedge-sell">hedge sell</option>
                <option value="hedge-buy">hedge buy</option>
              </select>
            </div>
            <div className="input-coef">
              <div className="field-label">Return Percent</div>
              <input
                type="number"
                defaultValue="1"
                className="input-field"
              />
            </div>
            <button className="set-button-coef">
              Set
            </button>
          </div>
          
          <div className="operation-row">
            <div className="operation-select">
              <div className="operation-label">Operation</div>
              <select className="input-field">
                <option value="long-sell">long sell</option>
                <option value="long-buy">long buy</option>
              </select>
            </div>
            <div className="input-coef">
              <div className="field-label">Fee Coefficient</div>
              <input
                type="number"
                defaultValue="1"
                className="input-field"
              />
            </div>
            <button className="set-button-coef">
              Set
            </button>
          </div>

        </div>
      )}
    </div>
  );
}

export default PoolInteractor;