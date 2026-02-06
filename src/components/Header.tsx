import React, { useState } from "react";
import "../styles/Header.css";
import logo from "../assets/logo.png";

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);

  // ✅ ปรับให้เลื่อนแบบ offset ไม่ให้ header บัง
  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const y = section.getBoundingClientRect().top + window.scrollY - 70; // หัก header 70px
      window.scrollTo({ top: y, behavior: "smooth" });
      setOpen(false); // ✅ ปิด dropdown หลังเลือก
    }
  };

  return (
    <header className="header">
      {/* ✅ กล่องซ้าย: logo + h2 */}
      <div className="header-left">
        <img src={logo} alt="MSMOON Logo" />
        <h2>MSMOON</h2>
      </div>

      {/* ✅ กล่องขวา: dropdown */}
      <div className={`dropdown ${open ? "open" : ""}`}>
        <button className="dropdown-btn" onClick={() => setOpen(!open)}>
          ☰
        </button>
        {open && (
          <ul className="dropdown-menu">
            <li><button onClick={() => handleScroll("market")}>Market</button></li>
            <li><button onClick={() => handleScroll("gamehub")}>Game Hub</button></li>
            <li><button onClick={() => handleScroll("roadmap")}>Roadmap</button></li>
            <li><button onClick={() => handleScroll("token")}>Token Allocation</button></li>
            <li><button onClick={() => handleScroll("joinus")}>Join Us</button></li>            
            <li><button onClick={() => handleScroll("nft")}>NFT</button></li>
            <li><button onClick={() => handleScroll("gallery")}>Gallery</button></li>

            {/* ✅ ลิงก์เว็บภายนอก */}
            <li><a href="https://mangoplayx.msmoon.net" target="_blank" rel="noopener noreferrer">MangoPlayX</a></li>
            <li><a href="https://donate.msmoon.net" target="_blank" rel="noopener noreferrer">Donate</a></li>
          </ul>
        )}
      </div>
    </header>
  );
};

export default Header;
