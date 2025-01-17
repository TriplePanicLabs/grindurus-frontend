import React, { useState } from 'react';
import {ethers} from 'ethers';
import './Dashboard.css';
import MintPoolNFT from './MintPoolNFT/MintPoolNFT.js';
import General from './General/General.js';
import PoolInfo from './PoolInfo/PoolInfo.js';
import PoolInteractor from './PoolInteractor/PoolInteractor.js';
import PoolsTable from './PoolsTable/PoolsTable.js';

function Dashboard({ poolId, setPoolId}) {
    return (
        <>
          <div className='main-container'>
            {poolId === -1 ? (
              <>
                <div className='main-container-left'>
                  <General />
                </div>
                <div className='main-container-right'>
                  <MintPoolNFT />
                </div>
              </>
            ) : (
              <>
                <div className='main-container-left'>
                  <PoolInfo />
                </div>
                <div className='main-container-right'>
                  <PoolInteractor />
                </div>
              </>
            )}
          </div>
          <div className="pools-table-wrapper">
            <PoolsTable setPoolId={setPoolId} />
          </div>
        </>
      );

}

export default Dashboard;