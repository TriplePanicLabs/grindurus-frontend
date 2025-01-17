import React, {useState} from 'react';
import './GrinderAIAgent.css';
import GrinderAIDeposit from './GrinderAIDeposit/GrinderAIDeposit';
import NoAgentPlan from './NoAgentPlan/NoAgentPlan';
import GrinderAIAgentPlan from './GrinderAIAgentPlan/GrinderAIAgentPlan';
import MintIntent from './MintIntent/MintIntent';

function GrinderAIAgent () {

    return (
        <>
          <div className='grinderai-container'>
            <div className='grinderai-deposit'>
              <GrinderAIDeposit />
            </div>
            <div className='grinderai-intent'>
              <div className='grinderai-intent-plans'>
                <NoAgentPlan />
                <GrinderAIAgentPlan />
              </div>
              <div className='grinderai-intent-mint'>
                <MintIntent />
              </div>
            </div>
          </div>
        </>
      );

}

export default GrinderAIAgent;