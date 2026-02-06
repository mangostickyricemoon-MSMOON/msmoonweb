import React from "react";
import "./../styles/MSMOON.css";
import logo from "../assets/logo.png"; // ✅ import logo จาก src/assets
import copyIcon from "../assets/copy-icon.svg"; // ✅ import copy icon

const MSMOON: React.FC = () => {
    const contractAddress = "0x1f5b6F4126575835c23D1b6c38535FA215df03c5";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(contractAddress);
        alert("Contract Address copied to clipboard!");
    };

    return (
        <div className="section msmoon-section">
            {/* ✅ Logo */}
            <img src={logo} alt="MSMOON Logo" className="msmoon-logo" />

            {/* ✅ Title */}
            <h2 className="msmoon-title">$MSMOON</h2>
            <h2 className="msmoon-subtitle">Mango Stickyrice Moon</h2>

            {/* ✅ Description */}
            <p className="msmoon-description">
                MSMOON brings the flavor of tradition and the future of Web3 MangoStickyrice meets Moonlight on Shido.
                
                Our mission is to bring frens together to taste the sweet vibes and ape into the Shido network.
                
                Join MSMOON and bring people from all around the world to enjoy the journey to the moon.
                
                We'll take you aboard the Shido Network spaceship and fly you to the farthest reaches of space.
            </p>

            {/* ✅ Contract Address + Copy Icon */}
            <div className="contract-wrapper">
                <p className="contract-label">Contract Address :</p>
                <div className="contract-box">
                    <strong className="contract-value">{contractAddress}</strong>
                    <img
                        src={copyIcon}
                        alt="Copy"
                        className="contract-copy-icon"
                        onClick={copyToClipboard}
                    />
                </div>
            </div>
        </div>
    );
};

export default MSMOON;
