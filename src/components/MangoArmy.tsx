import React from "react";
import "./../styles/MangoArmy.css";
import mangoArmyImg from "./../assets/mangoarmy.png";
import tgImg from "./../assets/TG.png";
import xImg from "./../assets/x.png";

const MangoArmy: React.FC = () => {
  return (
    <div className="section mangoarmy">
      <h2>
        <span className="mangoarmy-title-yellow">Join</span>{" "}
        <span className="mangoarmy-title-white">Us</span>
      </h2>

      {/* ✅ รูปหลัก Mango Army */}
      <img src={mangoArmyImg} alt="Mango Army" className="mangoarmy-image" />

      {/* ✅ Social Links */}
      <div className="social-links">
        <a 
          href="https://t.me/MSMOON_COIN_Community" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={tgImg} alt="Telegram" />
        </a>

        <a 
          href="https://x.com/MsmoonWShido" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={xImg} alt="X (Twitter)" />
        </a>
      </div>
    </div>
  );
};

export default MangoArmy;
