import './styles/globals.css';
import './styles/Sky.css';
import './index.css';

import Header from './components/Header';
import MSMOON from './components/MSMOON';
import Roadmap from './components/Roadmap'; 
import Market from './components/Market';
import TokenAllocation from './components/TokenAllocation';
import MangoArmy from './components/MangoArmy';
import GameHub from './components/GameHub';
import NewsSection from './components/NewsSection';
import Youtube from './components/youtube';
import Footer from "./components/Footer";

// ✅ import รูป spaceship
import spaceshipImg from "./assets/spaceship.png";

function App() {
  return (
    <div className="page">
      {/* ✅ ชั้นฟ้า */}
      <div className="sky">
        {/* ดาวเล็กสุ่ม 200 ดวง */}
        {[...Array(200)].map((_, i) => (
          <div
            key={`small-${i}`}
            className="star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${1 + Math.random() * 1}s`,
            }}
          />
        ))}

        {/* ดาวใหญ่สุ่ม 33 ดวง */}
        {[...Array(33)].map((_, i) => (
          <div
            key={`big-${i}`}
            className="big-star"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${2 + Math.random() * 0.5}px`,
              height: `${2 + Math.random() * 0.5}px`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${2 + Math.random() * 5}s`,
            }}
          />
        ))}

        {/* เมฆสุ่ม 6 ก้อน */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`cloud-${i}`}
            className="cloud big-cloud"
            style={{
              top: `${Math.random() * 100}vh`,
              left: `${Math.random() * 100}vw`,
              width: `${200 + Math.random() * 200}px`,   // ✅ ขนาดสุ่ม
              height: `${100 + Math.random() * 100}px`,
              animationDelay: `${Math.random() * 60}s`,  // ✅ เวลาเริ่มสุ่ม
              animationDuration: `${80 + Math.random() * 40}s`, // ✅ ความเร็วสุ่ม
            }}
          />
        ))}

        {/* ✅ spaceship */}
        <img 
          src={spaceshipImg} 
          alt="Spaceship" 
          className="spaceship" 
        />
      </div>

      {/* ✅ เนื้อหาเว็บ */}
      <Header />
      <MSMOON />
      <section id="market">
      <Market />
      </section>
      <section id="gamehub">
      <GameHub />
      </section>
      <section id="nft">
      <NewsSection />
      </section>
      <section id="token">
      <TokenAllocation />
      </section>
      <section id="roadmap">
      <Roadmap />
      </section>
      <section id="joinus">
      <MangoArmy />
      </section>
      <section id="gallery">
      <Youtube />
      </section>
      <Footer />
    </div>
  );
}

export default App;
