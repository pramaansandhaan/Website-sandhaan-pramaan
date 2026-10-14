"use client";

import { useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#whyus", label: "Why Us" },
  { href: "#founder", label: "Founder" },
  { href: "#contact", label: "Contact" },
];

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">
          <a href="#top" className="brand" aria-label="Sandhaan Pramaan home">
            <img src="/logo.svg" alt="Sandhaan Pramaan logo" className="brand-logo" />
            <div className="brand-text">
              <span>Sandhaan</span>
              <strong>Pramaan</strong>
            </div>
          </a>

          <nav className={`main-nav ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary nav-cta">
            Book a Consultation
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      <main id="top">
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Legal Strategy • Tax Advisory • Compliance</p>
              <h1>Where Law Meets Integrity &amp; Evidence</h1>
              <p className="lead">
                Sandhaan Pramaan is dedicated to delivering precise legal solutions,
                strategic advisory, and evidence-driven representation for individuals
                and businesses.
              </p>

              <div className="hero-actions">
                <a href="#contact" className="btn btn-primary">
                  Book a Consultation
                </a>
                <a href="#services" className="btn btn-secondary">
                  Explore Services
                </a>
              </div>

              <ul className="mini-stats" aria-label="Key strengths">
                <li>
                  <strong>Research-backed</strong>
                  <span>clear legal positioning</span>
                </li>
                <li>
                  <strong>Client-first</strong>
                  <span>transparent execution</span>
                </li>
                <li>
                  <strong>Ethical practice</strong>
                  <span>accountable outcomes</span>
                </li>
              </ul>
            </div>

            <div className="hero-panel" aria-label="Firm overview">
              <div className="panel-badge">Trusted Legal Advisory</div>

              <div className="panel-box">
                <div>
                  <span className="muted">Practice focus</span>
                  <h2>Three specialized divisions</h2>
                </div>
                <ul>
                  <li>Pure Legal Firm</li>
                  <li>Legal + Tax Advisory</li>
                  <li>Legal + AI + Compliance Boutique</li>
                </ul>
              </div>

              <div className="panel-metrics">
                <div>
                  <strong>Litigation</strong>
                  <span>Representation &amp; drafting</span>
                </div>
                <div>
                  <strong>Compliance</strong>
                  <span>Policy &amp; regulatory support</span>
                </div>
                <div>
                  <strong>Advisory</strong>
                  <span>Strategic &amp; business-ready</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="section">
          <div className="container">
            <div className="section-heading">
              <p className="eyebrow accent">About us</p>
              <h2>Legal precision with modern intelligence.</h2>
            </div>

            <div className="about-grid">
              <div className="about-copy">
                <p>
                  At Sandhaan Pramaan, we believe in strategic investigation (Sandhaan)
                  and solid proof (Pramaan). Our firm operates through three focused
                  divisions to serve diverse client needs across litigation, business
                  advisory, tax, compliance, and technology-driven legal solutions.
                </p>
                <p>
                  We deliver transparent, research-driven, and client-centric legal
                  services with a commitment to excellence, innovation, and measurable
                  outcomes.
                </p>
              </div>

              <div className="about-card">
                <h3>Our practice model</h3>
                <ul>
                  <li>
                    <span>01</span>
                    <div>
                      <strong>Pure Legal Firm</strong>
                      <small>
                        Litigation, court representation, legal drafting, and dispute
                        resolution.
                      </small>
                    </div>
                  </li>
                  <li>
                    <span>02</span>
                    <div>
                      <strong>Legal + Tax Advisory</strong>
                      <small>
                        Compliance strategy, regulatory guidance, and structured business
                        support.
                      </small>
                    </div>
                  </li>
                  <li>
                    <span>03</span>
                    <div>
                      <strong>Legal + AI + Compliance Boutique</strong>
                      <small>
                        AI-enabled legal tools, contract analytics, and compliance
                        automation.
                      </small>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="section section-alt">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow accent">Our services</p>
              <h2>Solutions tailored to your legal and business needs.</h2>
            </div>

            <div className="card-grid three-col">
              <article className="info-card">
                <div className="icon">L</div>
                <h3>Corporate &amp; Business Advisory</h3>
                <p>
                  Strategic support for entity structuring, governance, business risk,
                  and commercially aligned legal decision-making.
                </p>
              </article>

              <article className="info-card">
                <div className="icon">T</div>
                <h3>Tax &amp; Regulatory Compliance</h3>
                <p>
                  Guidance on tax obligations, statutory compliance, and regulatory
                  controls designed for sustainable growth.
                </p>
              </article>

              <article className="info-card">
                <div className="icon">C</div>
                <h3>Litigation &amp; Legal Representation</h3>
                <p>
                  High-priority legal representation with careful preparation, case
                  strategy, and evidence-led advocacy.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="whyus" className="section">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow accent">Why choose us</p>
              <h2>Integrity, clarity, and measurable outcomes.</h2>
            </div>

            <div className="card-grid three-col">
              <article className="feature-card">
                <h3>Strategic Legal Research</h3>
                <p>
                  Our advice is grounded in evidence, legal reasoning, and a deep
                  understanding of risk and opportunity.
                </p>
              </article>

              <article className="feature-card">
                <h3>Client-Centric Approach</h3>
                <p>
                  We prioritize the specific context of each matter and align legal
                  strategy with practical business realities.
                </p>
              </article>

              <article className="feature-card">
                <h3>Transparent &amp; Ethical Practice</h3>
                <p>
                  We work with accountability, honesty, and a disciplined focus on the
                  best outcomes for clients.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section id="founder" className="section section-alt">
          <div className="container founder-wrap">
            <div className="section-heading">
              <p className="eyebrow accent">Founder</p>
              <h2>Adv. Saujanya Patnaik</h2>
            </div>

            <div className="founder-card">
              <div className="founder-details">
                <p className="title">
                  Advocate, Legal Strategist &amp; Compliance Advisor
                </p>
                <p>
                  Adv. Saujanya Patnaik leads Sandhaan Pramaan with a vision of
                  combining traditional legal excellence with modern compliance
                  frameworks and AI-driven legal solutions. With expertise in
                  litigation, advisory, business strategy, and research-led legal
                  execution, he helps clients navigate complex legal challenges with
                  confidence and clarity.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section cta-strip">
          <div className="container cta-inner">
            <div>
              <p className="eyebrow accent">Need legal guidance?</p>
              <h2>Let’s discuss your matter with clarity and confidence.</h2>
            </div>
            <a href="#contact" className="btn btn-primary">
              Schedule Appointment
            </a>
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="container">
            <div className="section-heading center">
              <p className="eyebrow accent">Contact us</p>
              <h2>We’re ready to help.</h2>
            </div>

            <div className="contact-grid">
              <div className="contact-item">
                <div className="contact-icon">☎</div>
                <span>Phone</span>
                <strong>+91-9686479509</strong>
              </div>

              <div className="contact-item">
                <div className="contact-icon">✉</div>
                <span>Email</span>
                <strong>info@sandhaanpramaan.com</strong>
              </div>

              <div className="contact-item">
                <div className="contact-icon">⌖</div>
                <span>Location</span>
                <strong>India</strong>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="container footer-wrap">
          <p>© {new Date().getFullYear()} Sandhaan Pramaan. All Rights Reserved.</p>
        </div>
      </footer>
    </>
  );
}
