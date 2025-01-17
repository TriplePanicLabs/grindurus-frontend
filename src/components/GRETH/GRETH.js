import React, { useState } from 'react';
import {ethers} from 'ethers';
import './GRETH.css';
import GRETHBurn from './GRETHBurn/GRETHBurn';
import GRETHInfo from './GRETHInfo/GRETHInfo.js';

function GRETH() {
    return (
        <>
          <div className='greth-container'>
            <div className='greth-container-left'>
              <GRETHInfo />
            </div>
            <div className='greth-container-right'>
              <GRETHBurn />
            </div>
          </div>
        </>
    )
}

export default GRETH;