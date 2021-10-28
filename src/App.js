import * as React from "react";
import { ethers } from "ethers";
import './App.css';

export default function App() {

  const wave = () => {
    
  }
  
  return (
    <div className="mainContainer">

      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
        I'm Dan and I'm learning to build smart contracts. 
        <br/>Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={wave}>
          WAVE AT ME
        </button>
      </div>
    </div>
  );
}
