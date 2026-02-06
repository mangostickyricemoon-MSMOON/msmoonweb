import React from "react";
import '../styles/GameHub.css';
import playXImg from "./../assets/PlayX.png"; // ✅ import รูป

const GameHub: React.FC = () => {
  return (
    <div className="section gamehub">
      <h2>
        <span className="gamehub-title-yellow">Game</span>{" "}
        <span className="gamehub-title-white">Hub</span>
      </h2>


      {/* ✅ รูปพร้อมลิงก์ */}

      {/* ✅ กล่องสีขาวครอบทั้งหมด */}
      <div className="gamehub-card">
        {/* ✅ รูปพร้อมลิงก์ */}
        <a
          href="https://mangoplayx.msmoon.net"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={playXImg} alt="Mango Play X" className="gamehub-image" />
        </a>

        <p>
          MangoPlayX is a Game Hub powered by MSMOON. Revenue generated on the platform is used to buy back and burn $MSMOON to increase value and maintain a deflationary model, burn $SHIDO to support the Shido Network, and allocate the remaining portion to operations and marketing.

          Come play on MangoPlayX and be part of the ecosystem growth.
        </p>

        {/* ✅ ปุ่มใต้รูป */}
        <div className="gamehub-buttons">
          <a
            href="https://mangoplayx.msmoon.net"
            target="_blank"
            rel="noopener noreferrer"
            className="gamehub-btn"
          >
            Launch MangoPlayX
          </a>
        </div>
      </div>
    </div>

  );
};

export default GameHub;
