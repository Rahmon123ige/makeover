import "./styles/navbar.css";
import g from '../../../public/Group (2).png'
import b from '../../../public/book.png'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">

        <div className="logo">
          {/* <span className="logo-icon">✺</span> */}
          <img src={g} alt=""  className="logo-icon"/>
          <h2>Tee Trends and Makeovers</h2>
        </div>

        <nav className="nav-menu">
          <a href="/" className="active">Home</a>
          <a href="/">About</a>
          <a href="/">Services</a>
          <a href="/">Contact</a>
        </nav>

        <button className="book-btn">
          {/* <span className="book-icon">✺</span> */}
          <img src={b} alt="" className="book-icon"/>
          Book Appointment
        </button>

      </div>
    </header>
  );
}