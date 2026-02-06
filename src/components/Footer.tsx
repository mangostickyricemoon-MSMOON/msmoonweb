import React from "react";
import "./../styles/Footer.css";

// ✅ import รูปทั้งหมด
import shidoExplorerImg from "./../assets/ShidoExplorer.jpg";
import shidoDexImg from "./../assets/ShidoDex.jpg";
import dextoolsImg from "./../assets/Dextools.jpg";
import dexhubImg from "./../assets/DexHub.jpg";
import bubbleswapImg from "./../assets/bubbleswap.jpg"; // ✅ เพิ่ม Bubbleswap

const Footer: React.FC = () => {
  return (
    <footer className="section footer">
      <div className="footer-links">
        <a 
          href="https://shidoscan.net/token/0x1f5b6F4126575835c23D1b6c38535FA215df03c5" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={shidoExplorerImg} alt="Shido Explorer" />
        </a>

        <a 
          href="https://app.shido.io/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={shidoDexImg} alt="Shido Dex" />
        </a>

        <a 
          href="https://www.dextools.io/app/shido/pair-explorer/0x053a0d96ef36433f2ba01b7ffa0d2ec3b9effd9e" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={dextoolsImg} alt="Dextools" />
        </a>

        <a 
          href="https://dexhub.mavnode.io/" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={dexhubImg} alt="DexHub" />
        </a>

        {/* ✅ เพิ่ม Bubbleswap */}
        <a 
          href="https://app.bubbleswap.io" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          <img src={bubbleswapImg} alt="Bubbleswap" />
        </a>
      </div>

      <p style={{ marginTop: "20px" }}>© 2025 Powered by MSMOON</p>
    </footer>
  );
};

export default Footer;
