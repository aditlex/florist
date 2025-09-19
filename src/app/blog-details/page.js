import head from "next/head";
import Script from "next/script";
import styles from "../page.module.css";
import Header from "../../components/header";

export default function BlogDetails() {
  return (
    <>

 
 <Header />
  <section className="blog-hero spad">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-9 text-center">
          <div className="blog__hero__text">
            <h2>
              Are you one of the thousands of Iphone owners who has no idea
            </h2>
            <ul>
              <li>By Deercreative</li>
              <li>February 21, 2019</li>
              <li>8 Comments</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Hero End */}
  {/* Blog Details Section Begin */}
  <section className="blog-details spad">
    <div className="container">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-12">
          <div className="blog__details__pic">
            <img src="img/blog/details/blog-details.jpg" alt="" />
          </div>
        </div>
        <div className="col-lg-8">
          <div className="blog__details__content">
            <div className="blog__details__share">
              <span>share</span>
              <ul>
                <li>
                  <a href="#">
                    <i className="fa fa-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="twitter">
                    <i className="fa fa-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="youtube">
                    <i className="fa fa-youtube-play" />
                  </a>
                </li>
                <li>
                  <a href="#" className="linkedin">
                    <i className="fa fa-linkedin" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="blog__details__text">
              <p>
                Hydroderm is the highly desired anti-aging cream on the block.
                This serum restricts the occurrence of early aging sings on the
                skin and keeps the skin younger, tighter and healthier. It
                reduces the wrinkles and loosening of skin. This cream nourishes
                the skin and brings back the glow that had lost in the run of
                hectic years.
              </p>
              <p>
                The most essential ingredient that makes hydroderm so effective
                is Vyo-Serum, which is a product of natural selected proteins.
                This concentrate works actively in bringing about the natural
                youthful glow of the skin. It tightens the skin along with its
                moisturizing effect on the skin. The other important ingredient,
                making hydroderm so effective is “marine collagen” which along
                with Vyo-Serum helps revitalize the skin.
              </p>
            </div>
            <div className="blog__details__quote">
              <i className="fa fa-quote-left" />
              <p>
                “When designing an advertisement for a particular product many
                things should be researched like where it should be displayed.”
              </p>
              <h6>_ John Smith _</h6>
            </div>
            <div className="blog__details__text">
              <p>
                Vyo-Serum along with tightening the skin also reduces the fine
                lines indicating aging of skin. Problems like dark circles,
                puffiness, and crow’s feet can be control from the strong
                effects of this serum.
              </p>
              <p>
                Hydroderm is a multi-functional product that helps in reducing
                the cellulite and giving the body a toned shape, also helps in
                cleansing the skin from the root and not letting the pores clog,
                nevertheless also let’s sweeps out the wrinkles and all signs of
                aging from the sensitive near the eyes.
              </p>
            </div>
            <div className="blog__details__option">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__details__author">
                    <div className="blog__details__author__pic">
                      <img src="img/blog/details/blog-author.jpg" alt="" />
                    </div>
                    <div className="blog__details__author__text">
                      <h5>Aiden Blair</h5>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <div className="blog__details__tags">
                    <a href="#">#Fashion</a>
                    <a href="#">#Trending</a>
                    <a href="#">#2020</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog__details__btns">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <a href="" className="blog__details__btns__item">
                    <p>
                      <span className="arrow_left" /> Previous Pod
                    </p>
                    <h5>
                      It S Classified How To Utilize Free Classified Ad Sites
                    </h5>
                  </a>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6">
                  <a
                    href=""
                    className="blog__details__btns__item blog__details__btns__item--next"
                  >
                    <p>
                      Next Pod <span className="arrow_right" />
                    </p>
                    <h5>Tips For Choosing The Perfect Gloss For Your Lips</h5>
                  </a>
                </div>
              </div>
            </div>
            <div className="blog__details__comment">
              <h4>Leave A Comment</h4>
              <form action="#">
                <div className="row">
                  <div className="col-lg-4 col-md-4">
                    <input type="text" placeholder="Name" />
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <input type="text" placeholder="Email" />
                  </div>
                  <div className="col-lg-4 col-md-4">
                    <input type="text" placeholder="Phone" />
                  </div>
                  <div className="col-lg-12 text-center">
                    <textarea placeholder="Comment" defaultValue={""} />
                    <button type="submit" className="site-btn">
                      Post Comment
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Blog Details Section End */}
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