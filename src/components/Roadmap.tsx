// src/components/Roadmap.tsx
import React from "react";
import "./../styles/Roadmap.css";
import roadmapImg from "./../assets/Roadmap.png"; // ✅ import รูป

const Roadmap: React.FC = () => {
  return (
    <div className="section roadmap">
      <h2>
        <span className="roadmap-title-yellow">Road</span>
        <span className="roadmap-title-white">map</span>
      </h2>

      {/* ✅ แสดงรูปใต้หัวข้อ */}
      <img src={roadmapImg} alt="MSMOON Roadmap" className="roadmap-image" />
    </div>
  );
};

export default Roadmap;
