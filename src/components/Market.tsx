// src/components/Market.tsx
import React from "react";
import "./../styles/Market.css";

import buyImg from "./../assets/buy.jpg";
import chartImg from "./../assets/chart.jpg";
import stakeImg from "./../assets/stake.jpg";
import explorerImg from "./../assets/Explorer.png";

const Market: React.FC = () => {
  return (
    <div className="section market">
      <h2>
        <span className="market-title-yellow">MSMOON</span>{" "}
        <span className="market-title-white">Market</span>
      </h2>

      <div className="market-grid">
        {/* ✅ กลุ่มบน */}
        <div className="market-row">
          {/* ✅ BUY */}
          <div className="market-item">
            <img src={buyImg} alt="Buy MSMOON" className="market-img" />
            <a
              href="https://app.bubbleswap.io"
              target="_blank"
              rel="noopener noreferrer"
              className="market-btn buy-btn"
            >
              BUY
            </a>
          </div>

          {/* ✅ CHART */}
          <div className="market-item">
            <img src={chartImg} alt="MSMOON Chart" className="market-img" />
            <a
              href="https://www.dextools.io/app/shido/pair-explorer/0x053a0d96ef36433f2ba01b7ffa0d2ec3b9effd9e"
              target="_blank"
              rel="noopener noreferrer"
              className="market-btn chart-btn"
            >
              CHART
            </a>
          </div>
        </div>

        {/* ✅ กลุ่มล่าง */}
        <div className="market-row">
          {/* ✅ STAKE */}
          <div className="market-item">
            <img src={stakeImg} alt="Stake MSMOON" className="market-img" />
            <a
              href="https://staking.shido.io/msmoon/"
              target="_blank"
              rel="noopener noreferrer"
              className="market-btn stake-btn-main"
            >
              STAKE
            </a>
          </div>

          {/* ✅ EXPLORER */}
          <div className="market-item">
            <img src={explorerImg} alt="Explorer MSMOON" className="market-img" />
            <a
              href="https://shidoscan.net/token/0x1f5b6f4126575835c23d1b6c38535fa215df03c5"
              target="_blank"
              rel="noopener noreferrer"
              className="market-btn explorer-btn"
            >
              EXPLORER
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Market;
