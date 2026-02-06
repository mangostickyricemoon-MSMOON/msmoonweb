import React from "react";
import "./../styles/TokenAllocation.css";
import TokenImg from "./../assets/Token.png"; // ✅ import รูป

const TokenAllocation: React.FC = () => {
  return (
    <div className="section tokenallocation">
      <h2>
        <span className="token-title-yellow">TOKEN</span>{" "}
        <span className="token-title-white">ALLOCATION</span>
      </h2>
      <img src={TokenImg} alt="MSMOON Token" className="Token-image" />
    </div>
  );
};

export default TokenAllocation;
