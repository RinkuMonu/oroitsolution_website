
import React, { useState } from "react";

export default function Connect() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const mailSubject = encodeURIComponent(formData.subject);
        const mailBody = encodeURIComponent(
            `Name: ${formData.name}\nEmail: ${formData.email}\nPhone: ${formData.phone}\n\nMessage:\n${formData.message}`
        );

        window.location.href =
            `mailto:support@oroitsolution.com?subject=${mailSubject}&body=${mailBody}`;
    };

    const LocationIcon = () => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
            <circle cx="12" cy="10" r="2.5" />
        </svg>
    );

    const EmailIcon = () => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 6-10 7L2 6" />
        </svg>
    );

    const PhoneIcon = () => (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
        </svg>
    );

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
        }

        /* BANNER */

        .connect-page .connect-banner {
          width: 100%;
          height: 280px;
          background-image: url('/contact-banner.png');
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          overflow: hidden;
        }

        .connect-page .connect-banner-content {
          padding: 15px;
          opacity: 0;
          pointer-events: none;
        }

        .connect-page .connect-banner h1 {
          color: #fff;
          font-size: 48px;
          line-height: 1.2;
          font-weight: 600;
          margin: 0 0 8px;
          animation: connectHeading 1s ease-out both;
        }

        .connect-page .connect-banner p {
          color: #fff;
          font-size: 18px;
          line-height: 1.4;
          font-weight: 400;
          margin: 0;
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
          max-width: 1600px;
          margin: 0 auto;
          padding: 16px 22px 28px;
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
          gap: 11px;
          margin-top: 20px;
        }

        .connect-page .connect-socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #e9ecef;
          color: #50565d;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 15px;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .connect-page .connect-socials a:hover {
          background: #1670f9;
          color: #fff;
          transform: translateY(-3px);
        }

        /* TABLET */

        @media (max-width: 1000px) {
          .connect-page .connect-content {
            grid-template-columns: 1.15fr 1fr;
            gap: 16px;
            padding-left: 16px;
            padding-right: 16px;
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

        /* SMALL TABLET */

        @media (max-width: 750px) {
          .connect-page .connect-content {
            grid-template-columns: 1fr;
            max-width: 650px;
            gap: 16px;
          }

          .connect-page .connect-card,
          .connect-page .connect-details-card {
            padding: 26px;
          }
        }

        /* MOBILE */

        @media (max-width: 500px) {
          .connect-page .connect-banner {
            height: 230px;
          }

          .connect-page .connect-banner h1 {
            font-size: 38px;
          }

          .connect-page .connect-banner p {
            font-size: 15px;
          }

          .connect-page .connect-content {
            padding: 12px;
            gap: 14px;
          }

          .connect-page .connect-card,
          .connect-page .connect-details-card {
            padding: 22px 18px;
            border-radius: 12px;
          }

          .connect-page .connect-card h2 {
            font-size: 22px;
            margin-bottom: 20px;
          }

          .connect-page .connect-form-grid {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .connect-page .connect-field.full {
            grid-column: auto;
          }

          .connect-page .connect-field label {
            font-size: 15px;
          }

          .connect-page .connect-field input {
            height: 40px;
          }

          .connect-page .connect-field textarea {
            height: 95px;
          }

          .connect-page .connect-submit {
            width: 100%;
            height: 46px;
            font-size: 16px;
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
          }

          .connect-page .connect-detail-text h3 {
            font-size: 15px;
          }

          .connect-page .connect-detail-text p,
          .connect-page .connect-detail-text a {
            font-size: 13px;
          }

          .connect-page .connect-business-hours {
            font-size: 13px;
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
                        <div className="connect-form-grid">

                            <div className="connect-field">
                                <label>Full Name <span>*</span></label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="connect-field">
                                <label>Email <span>*</span></label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="connect-field">
                                <label>Phone</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="connect-field">
                                <label>Subject <span>*</span></label>
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            <div className="connect-field full">
                                <label>Message <span>*</span></label>
                                <textarea
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
                                PLOT NO 202, PARWATI PURAM VISTAR<br />
                                RANGTALAB ARJUNPURA KALATALAB<br />
                                KOTA, RAJASTHAN – 324002<br />
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
                        <a href="#" aria-label="Facebook">f</a>
                        <a href="#" aria-label="Twitter">♥</a>
                        <a href="#" aria-label="LinkedIn">in</a>
                        <a href="#" aria-label="Instagram">◎</a>
                    </div>
                </div>

            </section>
        </div>
    );
}
