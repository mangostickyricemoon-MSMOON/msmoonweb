import React from "react";
import "./../styles/NewsSection.css";
import warriorRareImg from "./../assets/warriorrare.png";   // ✅ import รูปใหม่
import warriorCommonImg from "./../assets/warriorcommon.png"; // ✅ import รูปใหม่

const NewsSection: React.FC = () => {
  return (
    <div className="section newssection">
      <h2>NFT</h2>
      <p>Our NFT Warrior of MSMOON</p>
      <p>Buy-Sell , Auction @Shidokid house</p>

      {/* ✅ Rare */}
      <div className="news-item white-bg">
        <img src={warriorRareImg} alt="Warrior Rare" className="news-image-left" />
        <div className="news-content">
          <h3>Warrior Rare</h3>
          <div className="news-buttons">
            <a 
              href="https://mango-stickyrice-warriror-rare.nfts2.me/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-btn"
            >
              NFT
            </a>
            <a 
              href="https://nft.shidokid.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-btn"
            >
              Auction
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Common */}
      <div className="news-item white-bg">
        <img src={warriorCommonImg} alt="Warrior Common" className="news-image-left" />
        <div className="news-content">
          <h3>Warrior Common</h3>
          <div className="news-buttons">
            <a 
              href="https://mango-stickyrice-warrior-common.nfts2.me/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-btn"
            >
              NFT
            </a>
            <a 
              href="https://nft.shidokid.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="news-btn"
            >
              Auction
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSection;
