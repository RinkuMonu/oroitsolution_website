
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function LocationIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 6-10 7L2 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
    </svg>
  );
}

export default function Connect() {
  const location = useLocation();
  const prefilledEmail = location.state?.email || "";
  const prefilledSubject = location.state?.subject || "";
  const prefillKey = `${prefilledEmail}|${prefilledSubject}`;
  const [prevPrefillKey, setPrevPrefillKey] = useState(prefillKey);
  const [error, setError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: prefilledEmail,
    phone: "",
    subject: prefilledSubject,
    message: "",
  });

  if (prefillKey !== prevPrefillKey) {
    setPrevPrefillKey(prefillKey);
    if (prefilledEmail || prefilledSubject) {
      setFormData((prev) => ({
        ...prev,
        ...(prefilledEmail ? { email: prefilledEmail } : {}),
        ...(prefilledSubject ? { subject: prefilledSubject } : {}),
      }));
    }
  }

  const handleChange = (e) => {
    setError("");
    setSubmitted(false);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = formData.name.trim();
    const email = formData.email.trim();
    const subject = formData.subject.trim();
    const message = formData.message.trim();

    if (!name || !email || !subject || !message) {
      setError("Please fill in all required fields.");
      return;
    }

    const mailSubject = encodeURIComponent(subject);
    const mailBody = encodeURIComponent(
      `Name: ${name}\nEmail: ${email}\nPhone: ${formData.phone.trim()}\n\nMessage:\n${message}`
    );

    setSubmitted(true);
    window.location.href =
      `mailto:support@oroitsolution.com?subject=${mailSubject}&body=${mailBody}`;
  };

  return (
    <div className="connect-page">
      <style>{`
        .connect-page,
        .connect-page * {
          box-sizing: border-box;
        }

        .connect-page {
          width: 100%;
          background: #f8f9fb;
          color: #292929;
          font-family: Arial, Helvetica, sans-serif;
          overflow-x: hidden;
        }

        /* BANNER */

        .connect-page .connect-banner {
          width: 100%;
          height: clamp(210px, 26vw, 370px);
          background-color: #0b2459;
          background-image: url('/contact-banner.png?v=2');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
          image-rendering: -webkit-optimize-contrast;
        }

        .connect-page .connect-banner-content {
          opacity: 0;
          pointer-events: none;
          visibility: hidden;
          padding: 0 16px;
          max-width: 720px;
        }

        .connect-page .connect-banner h1 {
          color: #ffffff;
          font-size: clamp(30px, 6vw, 52px);
          line-height: 1.2;
          font-weight: 700;
          margin: 0 0 10px;
          text-shadow: 0 2px 14px rgba(0, 0, 0, 0.45);
          letter-spacing: -0.5px;
          animation: connectHeading 0.8s ease-out both;
        }

        .connect-page .connect-banner p {
          color: #ffffff;
          font-size: clamp(14px, 3vw, 19px);
          line-height: 1.5;
          font-weight: 500;
          margin: 0;
          text-shadow: 0 1px 8px rgba(0, 0, 0, 0.5);
          opacity: 0.95;
        }

        @keyframes connectHeading {
          0% {
            opacity: 0;
            transform: translateY(25px);
            filter: blur(5px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        /* MAIN CONTENT */

        .connect-page .connect-content {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 24px 22px 36px;
          display: grid;
          grid-template-columns: 1.3fr 0.95fr;
          gap: 22px;
          align-items: stretch;
        }

        .connect-page .connect-card {
          background: #fff;
          border-radius: 14px;
          padding: 30px;
          box-shadow: 0 5px 22px rgba(0, 0, 0, 0.055);
          min-width: 0;
        }

        .connect-page .connect-card h2 {
          color: #1670f9;
          font-size: 25px;
          line-height: 1.3;
          font-weight: 600;
          margin: 0 0 24px;
        }

        /* FORM */

        .connect-page .connect-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 17px 16px;
        }

        .connect-page .connect-field {
          display: flex;
          flex-direction: column;
          gap: 8px;
          min-width: 0;
        }

        .connect-page .connect-field.full {
          grid-column: 1 / -1;
        }

        .connect-page .connect-field label {
          font-size: 16px;
          line-height: 1.3;
          font-weight: 400;
          color: #292929;
        }

        .connect-page .connect-field label span {
          color: #ed3434;
        }

        .connect-page .connect-field input,
        .connect-page .connect-field textarea {
          display: block;
          width: 100%;
          border: 1px solid #cbd2dc;
          border-radius: 5px;
          padding: 9px 11px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 14px;
          color: #292929;
          outline: none;
          background: #fff;
          transition: border-color 0.2s, box-shadow 0.2s;
        }

        .connect-page .connect-field input {
          height: 42px;
        }

        .connect-page .connect-field textarea {
          height: 105px;
          resize: vertical;
        }

        .connect-page .connect-field input:focus,
        .connect-page .connect-field textarea:focus {
          border-color: #1670f9;
          box-shadow: 0 0 0 3px rgba(22, 112, 249, 0.08);
        }

        .connect-page .connect-submit-row {
          display: flex;
          justify-content: flex-end;
          margin-top: 15px;
        }

        .connect-page .connect-submit {
          border: none;
          border-radius: 5px;
          background: #1670f9;
          color: #fff;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 17px;
          font-weight: 600;
          padding: 10px 24px;
          width: 190px;
          height: 52px;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }

        .connect-page .connect-submit:hover {
          background: #075bd5;
          transform: translateY(-2px);
        }

        /* DETAILS CARD */

        .connect-page .connect-details-card {
          padding: 30px;
        }

        .connect-page .connect-detail-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          margin-bottom: 17px;
        }

        .connect-page .connect-icon {
          width: 46px;
          height: 46px;
          min-width: 46px;
          border-radius: 50%;
          background: #1670f9;
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .connect-page .connect-detail-text {
          flex: 1;
          min-width: 0;
        }

        .connect-page .connect-detail-text h3 {
          font-size: 16px;
          line-height: 1.3;
          font-weight: 600;
          margin: 2px 0 4px;
          color: #252525;
        }

        .connect-page .connect-detail-text p,
        .connect-page .connect-detail-text a {
          display: inline-block;
          font-size: 15px;
          line-height: 1.5;
          font-weight: 400;
          margin: 0;
          color: #292929;
          text-decoration: none;
          overflow-wrap: anywhere;
        }

        .connect-page .connect-detail-text a {
          color: #0870ff;
        }

        .connect-page .connect-detail-text a:hover {
          text-decoration: underline;
        }

        .connect-page .connect-business-hours {
          border-top: 1px solid #c9c9c9;
          margin-top: 20px;
          padding-top: 17px;
          color: #7a8490;
          font-size: 14px;
          line-height: 1.5;
          font-weight: 400;
        }

        /* SOCIAL ICONS */

        .connect-page .connect-socials {
          display: flex;
          flex-wrap: wrap;
          gap: 11px;
          margin-top: 20px;
        }

        .connect-page .connect-socials button {
          width: 36px;
          height: 36px;
          border: none;
          border-radius: 50%;
          background: #e9ecef;
          color: #50565d;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .connect-page .connect-socials button:hover {
          background: #1670f9;
          color: #fff;
          transform: translateY(-3px);
        }

        /* TABLET */

        @media (max-width: 1024px) {
          .connect-page .connect-content {
            grid-template-columns: 1.15fr 1fr;
            gap: 18px;
            padding: 20px 18px 32px;
          }

          .connect-page .connect-card,
          .connect-page .connect-details-card {
            padding: 24px;
          }

          .connect-page .connect-card h2 {
            font-size: 23px;
          }

          .connect-page .connect-detail-text p,
          .connect-page .connect-detail-text a {
            font-size: 14px;
          }
        }

        /* PORTRAIT TABLET */

        @media (max-width: 900px) {
          .connect-page .connect-content {
            grid-template-columns: 1fr;
            max-width: 720px;
            gap: 18px;
          }

          .connect-page .connect-card,
          .connect-page .connect-details-card {
            padding: 26px;
          }
        }

        /* SMALL TABLET */

        @media (max-width: 768px) {
          .connect-page .connect-banner {
            height: auto;
            min-height: 200px;
            padding: 48px 20px;
            background-image: linear-gradient(135deg, #0b2459 0%, #155cd5 55%, #2a73f1 100%);
          }

          .connect-page .connect-banner-content {
            opacity: 1;
            pointer-events: auto;
            visibility: visible;
          }
        }

        /* LARGE MOBILE */

        @media (max-width: 640px) {
          .connect-page .connect-content {
            padding: 16px 14px 28px;
            gap: 16px;
          }

          .connect-page .connect-card,
          .connect-page .connect-details-card {
            padding: 22px 18px;
            border-radius: 12px;
          }

          .connect-page .connect-card h2 {
            font-size: 22px;
            margin-bottom: 18px;
          }

          .connect-page .connect-form-grid {
            grid-template-columns: 1fr;
            gap: 14px;
          }

          .connect-page .connect-field.full {
            grid-column: auto;
          }

          .connect-page .connect-field label {
            font-size: 15px;
          }

          .connect-page .connect-field input,
          .connect-page .connect-field textarea {
            font-size: 16px;
          }

          .connect-page .connect-field input {
            height: 44px;
          }

          .connect-page .connect-field textarea {
            height: 100px;
          }

          .connect-page .connect-submit-row {
            margin-top: 16px;
          }

          .connect-page .connect-submit {
            width: 100%;
            height: 48px;
            font-size: 16px;
          }
        }

        /* MOBILE */

        @media (max-width: 480px) {
          .connect-page .connect-banner {
            min-height: 170px;
            padding: 36px 16px;
          }

          .connect-page .connect-content {
            padding: 14px 12px 24px;
            gap: 14px;
          }

          .connect-page .connect-card,
          .connect-page .connect-details-card {
            padding: 20px 16px;
          }

          .connect-page .connect-card h2 {
            font-size: 20px;
            margin-bottom: 16px;
          }

          .connect-page .connect-icon {
            width: 40px;
            height: 40px;
            min-width: 40px;
          }

          .connect-page .connect-icon svg {
            width: 19px;
            height: 19px;
          }

          .connect-page .connect-detail-item {
            gap: 12px;
            margin-bottom: 15px;
          }

          .connect-page .connect-detail-text h3 {
            font-size: 15px;
          }

          .connect-page .connect-detail-text p,
          .connect-page .connect-detail-text a {
            font-size: 13.5px;
          }

          .connect-page .connect-business-hours {
            font-size: 13px;
            margin-top: 16px;
            padding-top: 14px;
          }

          .connect-page .connect-socials button {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>

      {/* BANNER */}

      <section className="connect-banner">
        <div className="connect-banner-content">
          <h1>Contact</h1>
          <p>Let's build something extraordinary together.</p>
        </div>
      </section>

      {/* CONTACT CONTENT */}

      <section className="connect-content">

        {/* FORM CARD */}

        <div className="connect-card">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            {error && (
              <p className="mb-4 rounded-md border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700">
                {error}
              </p>
            )}
            {submitted && (
              <p className="mb-4 rounded-md border border-emerald-200 bg-emerald-50 px-3.5 py-2.5 text-sm text-emerald-700">
                Your email client has been opened to send your message to support@oroitsolution.com.
              </p>
            )}
            <div className="connect-form-grid">

              <div className="connect-field">
                <label htmlFor="connect-name">Full Name <span>*</span></label>
                <input
                  id="connect-name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="connect-field">
                <label htmlFor="connect-email">Email <span>*</span></label>
                <input
                  id="connect-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="connect-field">
                <label htmlFor="connect-phone">Phone</label>
                <input
                  id="connect-phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="connect-field">
                <label htmlFor="connect-subject">Subject <span>*</span></label>
                <input
                  id="connect-subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="connect-field full">
                <label htmlFor="connect-message">Message <span>*</span></label>
                <textarea
                  id="connect-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

            </div>

            <div className="connect-submit-row">
              <button type="submit" className="connect-submit">
                ➤ &nbsp; SUBMIT
              </button>
            </div>
          </form>
        </div>

        {/* DETAILS CARD */}

        <div className="connect-card connect-details-card">
          <h2>Get in Touch</h2>

          <div className="connect-detail-item">
            <div className="connect-icon">
              <LocationIcon />
            </div>

            <div className="connect-detail-text">
              <h3>Registered Office</h3>
              <p>
                ORO IT SOLUTION PVT. LTD.<br />
                SevenUnique Tech Solutions Pvt. Ltd.<br />
                Jaipur,<br />
                Rajasthan 302017<br />
                India
              </p>
            </div>
          </div>

          <div className="connect-detail-item">
            <div className="connect-icon">
              <EmailIcon />
            </div>

            <div className="connect-detail-text">
              <h3>Email</h3>
              <a href="mailto:support@oroitsolution.com">
                support@oroitsolution.com
              </a>
            </div>
          </div>

          <div className="connect-detail-item">
            <div className="connect-icon">
              <PhoneIcon />
            </div>

            <div className="connect-detail-text">
              <h3>Phone</h3>
              <a href="tel:+919825566644">
                +91 98255 66644
              </a>
            </div>
          </div>

          <div className="connect-business-hours">
            Business hours: Mon – Sat, 09:30 – 7:00 PM
          </div>

          <div className="connect-socials">
            <button type="button" aria-label="Facebook" title="Facebook (Coming Soon)">f</button>
            <button type="button" aria-label="X (Twitter)" title="X / Twitter (Coming Soon)">𝕏</button>
            <button type="button" aria-label="LinkedIn" title="LinkedIn (Coming Soon)">in</button>
            <button type="button" aria-label="Instagram" title="Instagram (Coming Soon)">◎</button>
          </div>
        </div>

      </section>
    </div>
  );
}
