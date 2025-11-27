import React from 'react'
import { Link } from 'react-router-dom'
import './LandingPage.css'
import { assets } from '../../assets/assets'
import { Twitter, Facebook, Linkedin } from 'lucide-react'

const LandingPage = () => {
  return (
    <>
      <div id="hero" className="landing-hero">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              <h1 className="display-3 fw-bold mb-4">
                Effortless Invoicing. Professional Results.
              </h1>
              <p className="lead mb-5">
                Stop wrestling with spreadsheets. QuickInvoice helps you create and send beautiful invoices in minutes, so you get paid faster.
              </p>
              <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                <Link to="/generate" className="btn btn-generate">
                  Generate Your First Invoice
                </Link>
                <button className="btn text-white btn-learn-more">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Steps to generate an invoice */}
      <section id="how-it-works" className="get-started-section py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h2 className="display-5 fw-bold text-dark">
                Get Started in 4 Simple Steps
              </h2>
            </div>
          </div>
          <div className="row g-4">
            {/* card1 */}
            <div className="col-lg-3 col-md-6">
              <div className="step-card card1">
                <div className="step-icon step-icon-1">1</div>
                <h3 className="step-title">Enter Details</h3>
                <p className="step-description">
                  Quickly fill in your clients information, item descriptions, quantities, and prices. Our intuitive form makes it a breeze.
                </p>
              </div>
            </div>

            {/* card2 */}
            <div className="col-lg-3 col-md-6">
              <div className="step-card card2">
                <div className="step-icon step-icon-2">2</div>
                <h3 className="step-title">Choose Template</h3>
                <p className="step-description">
                  Browse our gallery of professionally designed templates. Pick one that matches your brand and style.
                </p>
              </div>
            </div>

            {/* card3 */}
            <div className="col-lg-3 col-md-6">
              <div className="step-card card3">
                <div className="step-icon step-icon-3">3</div>
                <h3 className="step-title">Preview Invoice</h3>
                <p className="step-description">
                  See exactly how your invoice will look before sending it. Make any last-minute adjustments with ease.
                </p>
              </div>
            </div>

            {/* card4 */}
            <div className="col-lg-3 col-md-6">
              <div className="step-card card4">
                <div className="step-icon step-icon-4">4</div>
                <h3 className="step-title">Download & Save</h3>
                <p className="step-description">
                  Download your invoice as a PDF, send it directly via email, or save it for your records and future reference.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Feature 1 - Why Choose QuickInvoice */}
      <section className="feature-section py-5">
        <div className="container">
          <div className="row mb-5">
            <div className="col-12 text-center">
              <h2 className="feature-main-title">Why Choose QuickInvoice?</h2>
            </div>
          </div>
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="feature-image-wrapper">
                <img src={assets.landing1} alt="Invoice Form" className="img-fluid feature-image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-content">
                <h3 className="feature-title">Easy to fill invoice details</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="feature-list">
                  <li>Curated list of templates from gallery.</li>
                  <li className="feature-highlight">Add your logo and invoice details.</li>
                  <li>Tailor fields to your needs.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 2 - Beautiful Dashboard */}
      <section className="feature-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-lg-2">
              <div className="feature-image-wrapper">
                <img src={assets.landing2} alt="Beautiful Dashboard" className="img-fluid feature-image" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="feature-content">
                <h3 className="feature-title">Beautiful Dashboard</h3>
                <p className="feature-description">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="feature-list">
                  <li>View the previous invoices.</li>
                  <li>Your saved invoices with thumbnail.</li>
                  <li>Reuse one or more invoices.</li>
                  <li>Track the invoices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 3 - Invoice Preview with Action Buttons */}
      <section className="feature-section py-5">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6">
              <div className="feature-image-wrapper">
                <img src={assets.landing3} alt="Invoice Preview" className="img-fluid feature-image" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="feature-content">
                <h3 className="feature-title">Invoice Preview with Action Buttons</h3>
                <p className="feature-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="feature-list">
                  <li>Live preview.</li>
                  <li>Switch between multiple invoices.</li>
                  <li>One click to Save, Download and Delete invoices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature 4 - Send invoices instantly */}
      <section className="feature-section py-5 bg-light">
        <div className="container">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 order-lg-2">
              <div className="feature-image-wrapper">
                <img src={assets.landing4} alt="Send Invoices" className="img-fluid feature-image" />
              </div>
            </div>
            <div className="col-lg-6 order-lg-1">
              <div className="feature-content">
                <h3 className="feature-title">Send invoices instantly</h3>
                <p className="feature-description">
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ul className="feature-list">
                  <li>Send invoices instantly without leaving the application.</li>
                  <li>One click to send invoices.</li>
                  <li>Send unlimited invoices.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 col-xl-8 text-center">
              <h2 className="cta-title mb-4">
                Ready to Streamline Your Invoicing?
              </h2>
              <p className="cta-description mb-5">
                Join thousands of freelancers and small businesses who trust QuickInvoice. Start creating professional invoices today - its fast, easy, and effective!
              </p>
              <div className="cta-button-wrapper">
                <Link to="/generate" className="btn btn-cta">
                  Start Generating Invoices Now
                </Link>
                <p className="cta-subtext mt-3">
                  (This will lead to the invoice generation interface)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="footer-section">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 text-center">
              <div className="footer-logo mb-3">
                <img src={assets.logo} alt="QuickInvoice Logo" className="footer-logo-img" />
              </div>
              <h3 className="footer-brand-name mb-3">QuickInvoice</h3>
              <p className="footer-copyright mb-2">
                © {new Date().getFullYear()} QuickInvoice. All Rights Reserved.
              </p>
              <p className="footer-tagline">
                Crafted for freelancers and small businesses.
              </p>
              <div className="footer-social-icons mt-3">
                <a href="#" className="footer-social-link me-3" aria-label="Twitter">
                  <Twitter size={24} />
                </a>
                <a href="#" className="footer-social-link me-3" aria-label="Facebook">
                  <Facebook size={24} />
                </a>
                <a href="#" className="footer-social-link" aria-label="LinkedIn">
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default LandingPage
