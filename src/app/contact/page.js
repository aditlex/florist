import head from "next/head";
import Script from "next/script";
import styles from "../page.module.css";
import Header from "../../components/header";

export default function Contact() {
  return(
    <>
 
    <Header />
  <div className="map">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d111551.9926412813!2d-90.27317134641879!3d38.606612219170856!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54eab584e432360b%3A0x1c3bb99243deb742!2sUnited%20States!5e0!3m2!1sen!2sbd!4v1597926938024!5m2!1sen!2sbd"
      height={500}
      style={{ border: 0 }}
      allowFullScreen=""
      aria-hidden="false"
      tabIndex={0}
    />
  </div>
  {/* Map End */}
  {/* Contact Section Begin */}
  <section className="contact spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6">
          <div className="contact__text">
            <div className="section-title">
              <span>Information</span>
              <h2>Contact Us</h2>
              <p>
                As you might expect of a company that began as a high-end
                interiors contractor, we pay strict attention.
              </p>
            </div>
            <ul>
              <li>
                <h4>America</h4>
                <p>
                  195 E Parker Square Dr, Parker, CO 801 <br />
                  +43 982-314-0958
                </p>
              </li>
              <li>
                <h4>France</h4>
                <p>
                  109 Avenue Léon, 63 Clermont-Ferrand <br />
                  +12 345-423-9893
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-6 col-md-6">
          <div className="contact__form">
            <form action="#">
              <div className="row">
                <div className="col-lg-6">
                  <input type="text" placeholder="Name" />
                </div>
                <div className="col-lg-6">
                  <input type="text" placeholder="Email" />
                </div>
                <div className="col-lg-12">
                  <textarea placeholder="Message" defaultValue={""} />
                  <button type="submit" className="site-btn">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Contact Section End */}
  {/* Footer Section Begin */}
  <footer className="footer">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-md-6 col-sm-6">
          <div className="footer__about">
            <div className="footer__logo">
              <a href="#">
                <img src="img/footer-logo.png" alt="" />
              </a>
            </div>
            <p>
              The customer is at the heart of our unique business model, which
              includes design.
            </p>
            <a href="#">
              <img src="img/payment.png" alt="" />
            </a>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
          <div className="footer__widget">
            <h6>Shopping</h6>
            <ul>
              <li>
                <a href="#">Clothing Store</a>
              </li>
              <li>
                <a href="#">Trending Shoes</a>
              </li>
              <li>
                <a href="#">Accessories</a>
              </li>
              <li>
                <a href="#">Sale</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-6">
          <div className="footer__widget">
            <h6>Shopping</h6>
            <ul>
              <li>
                <a href="#">Contact Us</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Delivary</a>
              </li>
              <li>
                <a href="#">Return &amp; Exchanges</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
          <div className="footer__widget">
            <h6>NewLetter</h6>
            <div className="footer__newslatter">
              <p>
                Be the first to know about new arrivals, look books, sales &amp;
                promos!
              </p>
              <form action="#">
                <input type="text" placeholder="Your email" />
                <button type="submit">
                  <span className="icon_mail_alt" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 text-center">
          <div className="footer__copyright__text">
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            <p>
              Copyright © 2020 All rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true" /> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </div>
        </div>
      </div>
    </div>
  </footer>

   <Script src="js/jquery-3.3.1.min.js"></Script>
    <Script src="js/bootstrap.min.js"></Script>
    <Script src="js/jquery.nice-select.min.js"></Script>
    <Script src="js/jquery.nicescroll.min.js"></Script>
    <Script src="js/jquery.magnific-popup.min.js"></Script>
    <Script src="js/jquery.countdown.min.js"></Script>
    <Script src="js/jquery.slicknav.js"></Script>
    <Script src="js/mixitup.min.js"></Script>
    <Script src="js/owl.carousel.min.js"></Script>
    <Script src="js/main.js"></Script>

</>

  );
}