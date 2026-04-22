import React from "react";
import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  MessageCircleMore,
} from "lucide-react";
import { IoLogoFacebook } from "react-icons/io";
import { FiYoutube } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="df-footer">
      <div className="df-container">
        {/* Top section */}
        <div className="df-top">
          <div className="df-top-left">
            <h2 className="df-headline">
              Transform your <br /> skin with us
            </h2>
            <p className="df-sub">
              Book a consultation with our dermatology specialists
              <br />
              and take the first step toward lasting results.
            </p>
            <div className="df-cta-row">
              <button className="df-btn df-btn-primary">
                <span className="df-btn-icon">
                  <Sparkles size={11} />
                </span>
                Book an appointment
              </button>
              <button className="df-btn df-btn-ghost">
                <span className="df-btn-icon df-btn-icon-ghost">
                  <Sparkles size={11} />
                </span>
                Our services
              </button>
            </div>
          </div>

          <div className="df-top-right">
            <div className="df-brand">
              <Sparkles size={14} className="df-brand-star" />
              <span>Dermato</span>
            </div>
            <p className="df-brand-desc">
              Professional dermatology care focused on results,
              <br />
              safety, and personalized treatment solutions.
            </p>
            <div className="df-tags">
              <span className="df-tag">
                <Sparkles size={10} /> FDA Approved
              </span>
              <span className="df-tag">
                <Sparkles size={10} /> Board Certified
              </span>
            </div>
          </div>
        </div>

        {/* Links section */}
        <div className="df-links">
          <div className="df-col">
            <h4 className="df-col-title">Quick Links</h4>
            <ul>
              <li><a href="#" className="df-active">Home</a></li>
              <li><a href="#">About us</a></li>
              <li><a href="#">Service</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#">404 Error</a></li>
            </ul>
          </div>

          <div className="df-col">
            <h4 className="df-col-title">Services</h4>
            <ul>
              <li><a href="#" className="df-active">Nail Services</a></li>
              <li><a href="#">Hair Services</a></li>
              <li><a href="#">Enhancements</a></li>
              <li><a href="#">Spa and wellness</a></li>
              <li><a href="#">Skin and Beauty Treatments</a></li>
            </ul>
          </div>

          <div className="df-col df-col-contact">
            <h4 className="df-col-title">Get in Touch</h4>
            <ul>
              <li>
                <span className="df-icon-box"><MapPin size={13} /></span>
                <span>
                  123 Medical Plaza, Suite 200
                  <br />
                  New York, NY 10001
                </span>
              </li>
              <li>
                <span className="df-icon-box"><Phone size={13} /></span>
                <span>+1 (555) 123-4567</span>
              </li>
              <li>
                <span className="df-icon-box"><Mail size={13} /></span>
                <span>example@gmail.com</span>
              </li>
            </ul>

            <div className="df-socials">
              <a href="#" aria-label="Facebook"><IoLogoFacebook size={14} /></a>
              <a href="#" aria-label="Youtube"><FiYoutube size={14} /></a>
              <a href="#" aria-label="Linkedin"><FaLinkedin size={14} /></a>
              <a href="#" aria-label="Instagram"><FaInstagram  size={14} /></a>
            </div>
          </div>
        </div>

        {/* Big background text */}
        <div className="df-bigtext">
          <span>TEE TRENDS</span>
          <span>AND MAKEOVER</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
