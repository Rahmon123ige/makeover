import { useState } from "react";
import { Menu, X } from "lucide-react";
import "./styles/navbar.css";
import g from "../../../public/Group (2).png";
import b from "../../../public/book.png";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleToggle = () => {
    setOpen(!open);
  };

  return (
    <header className="navbar">
      <div className="nav-inner">

        {/* LOGO */}
        <div className="logo">
          <img src={g} alt="" className="logo-icon" />
          <h2>Tee Trends and Makeovers</h2>
        </div>

        {/* NAV MENU */}
        <nav className={`nav-menu ${open ? "active-menu" : ""}`}>
          <a href="/" className="active" onClick={() => setOpen(false)}>Home</a>
          <a href="/" onClick={() => setOpen(false)}>About</a>
          <a href="/" onClick={() => setOpen(false)}>Services</a>
          <a href="/" onClick={() => setOpen(false)}>Contact</a>

          <button className="book-btn mobile-btn">
            <img src={b} alt="" className="book-icon" />
            Book Appointment
          </button>
        </nav>

        {/* MENU ICON */}
        <div className="menu-icon" onClick={handleToggle}>
          {open ? <X size={26} strokeWidth={2.5} /> : <Menu size={26} strokeWidth={2.5} />}
        </div>
        

        {/* DESKTOP BUTTON */}
        <button className="book-btn desktop-btn">
          <img src={b} alt="" className="book-icon" />
          Book Appointment
        </button>

      </div>
    </header>
  );
}