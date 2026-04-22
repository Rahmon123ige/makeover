import {
  ArrowUpRight,
  Sparkles
} from "lucide-react";

import "./styles/navbar.css";
import f1 from '../../../public/f1.png'
import ff2 from '../../../public/ff2.png'
import ff3 from '../../../public/ff3.png'
import ff4 from '../../../public/ff4.png'
import ff5 from '../../../public/ff5.png'

export default function Hero() {
  return (
    <section className="hero">

      {/* VIDEO BACKGROUND */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/public/face video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content">

        {/* LEFT SIDE */}
        <div className="hero-left">

          <div className="hero-text">
            <h1>
              Luxury Beauty &
              <br />
              Makeover Studio
            </h1>

            <p>
              Trusted by 500+ women for flawless hair,
              skin, and nail transformations
            </p>
          </div>

          <div className="hero-buttons">

            <button className="primary-btn">
              Book Appointment
              <ArrowUpRight size={24}/>
            </button>

            <button className="secondary-btn">
              View Services
            </button>

          </div>

        </div>


        {/* RIGHT SIDE ORBIT */}
        {/* <div className="service-orbit">

          <div className="orbit-ring"></div>

          <div className="service-card card1">
            <img src={f1} alt="" />
            <span>Aging Solutions</span>
          </div>

          <div className="service-card card2">
            <img src={ff2} alt="" />
            <span>Skin Rejuvenation</span>
          </div>

          <div className="service-card card3">
            <img src={ff3} alt="" />
            <span>Chemical Peels</span>
          </div>

          <div className="service-card card4">
            <img src={ff4} alt="" />
            <span>Acne & Scar Therapy</span>
          </div>

          <div className="service-card card5">
            <img src={ff5} alt="" />
            <span>Laser Treatment</span>   
          </div>

        </div> */}

      </div>

    </section>
  );
}