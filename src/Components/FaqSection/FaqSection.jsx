import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import "./FaqSaction.css";

const faqs = [
  {
    q: "What treatment is right for my skin type?",
    a: "During your consultation, our dermatologist evaluates your skin concerns, goals, and medical history to recommend the most suitable treatment.During your consultation, our dermatologist evaluates your skin concerns, goals, and medical history to recommend the most suitable treatment.During your consultation, our dermatologist evaluates your skin concerns, goals, and medical history to recommend the most suitable treatment.During your consultation, our dermatologist evaluates your skin concerns, goals, and medical history to recommend the most suitable treatment.During your consultation, our dermatologist evaluates your skin concerns, goals, and medical history to recommend the most suitable treatment.",
  },
  { q: "How many sessions will I need?", a: "The number of sessions depends on your skin type, condition, and the treatment chosen. Most clients see results within 3–6 sessions." },
  { q: "Are the procedures painful?", a: "Most of our procedures are gentle and well-tolerated. We use numbing creams and advanced techniques to ensure your comfort." },
  { q: "Do you offer personalized treatment plans?", a: "Yes — every plan is tailored to your unique skin profile, lifestyle, and goals after a detailed consultation." },
  { q: "What should I expect during my first visit?", a: "Your first visit includes a skin analysis, consultation with our specialist, and a customized treatment recommendation." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggle = (i) => setOpenIndex(openIndex === i ? -1 : i);

  return (
    <section className="faq-section">
      <div className="faq-header">
        <span className="faq-eyebrow">
          <span className="faq-dot" /> FAQ
        </span>
        <h1 className="faq-title">Answers to your questions</h1>
        <p className="faq-subtitle">
          From hair to skincare, explore treatments designed for lasting results and a confident finish.
        </p>
      </div>

      <div className="faq-list">
        {faqs.map((item, i) => {
          const open = openIndex === i;
          return (
            <div key={i} className={`faq-item ${open ? "open" : ""}`}>
              <button className="faq-question" onClick={() => toggle(i)}>
                <span className="faq-q-text">{item.q}</span>
                <span className="faq-icon">
                  {open ? <X size={18} strokeWidth={1.6} /> : <Plus size={18} strokeWidth={1.6} />}
                </span>
              </button>
              {open && (
                <div className="faq-answer">
                  <p>{item.a}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FaqSection;
