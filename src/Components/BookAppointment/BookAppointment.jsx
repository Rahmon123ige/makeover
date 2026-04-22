import React, { useState } from "react";
import { ChevronDown, Sparkles, Check } from "lucide-react";
import modelImg from "../../../public/ba.jpg";
import "./BookAppointment.css";

const BookAppointment = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    therapy: "",
    message: "",
    agree: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((p) => ({ ...p, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.agree) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  return (
    <section className="ba-section">
      <div className="ba-header">
        <span className="ba-eyebrow">
          <span className="ba-dot" /> SERVICES
        </span>
        <h1 className="ba-title">Book Appointment</h1>
        <p className="ba-subtitle">
          From hair to skincare, explore treatments designed for lasting results and a confident finish.
        </p>
      </div>

      <div className="ba-card">
        <div className="ba-form-side">
          <h2 className="ba-form-title">Request an appointment</h2>
          <p className="ba-form-sub">Fill out the form below, and we'll contact you shortly.</p>

          <form className="ba-form" onSubmit={handleSubmit}>
            <div className="ba-row">
              <div className="ba-field">
                <label htmlFor="name">Name*</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ba-field">
                <label htmlFor="email">Email*</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email address"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="ba-row">
              <div className="ba-field">
                <label htmlFor="phone">Phone*</label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="Phone number"
                  value={form.phone}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="ba-field">
                <label htmlFor="therapy">Therapy*</label>
                <div className="ba-select-wrap">
                  <select
                    id="therapy"
                    name="therapy"
                    value={form.therapy}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="facial">Facial Treatment</option>
                    <option value="hair">Hair Therapy</option>
                    <option value="skincare">Skincare</option>
                    <option value="massage">Massage</option>
                  </select>
                  <ChevronDown size={18} className="ba-select-icon" />
                </div>
              </div>
            </div>

            <div className="ba-field">
              <label htmlFor="message">How we can help?</label>
              <textarea
                id="message"
                name="message"
                placeholder="Type here"
                rows={4}
                value={form.message}
                onChange={handleChange}
              />
            </div>

            <label className="ba-check">
              <input
                type="checkbox"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
              />
              <span className="ba-check-box">
                {form.agree && <Check size={12} strokeWidth={3} />}
              </span>
              <span>I agree to allow the clinic to contact me regarding my appointment.</span>
            </label>

            <div className="ba-actions">
              <button type="submit" className="ba-btn">
                <span className="ba-btn-icon">
                  <Sparkles size={12} />
                </span>
                {submitted ? "Request sent!" : "Book an appointment"}
              </button>
              <span className="ba-reply">We'll reply within 24–48h.</span>
            </div>
          </form>
        </div>

        <div className="ba-image-side">
          <img src={modelImg} alt="Glowing skincare portrait" loading="lazy" />
        </div>
      </div>
    </section>
  );
};

export default BookAppointment;
