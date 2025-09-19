import head from "next/head";
import Script from "next/script";
import styles from "../page.module.css";
import Header from "../../components/header";

export default function Blog() {
  return (
    <>


 <Header />
  {/* Header Section End */}
  {/* Breadcrumb Section Begin */}
  <section
  className="breadcrumb-blog set-bg"
  data-setbg="img/breadcrumb-bg.jpg"
>
  <div className="container">
    <div className="row">
      <div className="col-lg-12">
        <h2>Our Blog</h2>
      </div>
    </div>
  </div>
</section>
{/* Breadcrumb Section End */}
{/* Blog Section Begin */}
<section className="blog spad">
  <div className="container">
    <div className="row">
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-1.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 16 February 2020
            </span>
            <h5>What Curling Irons Are The Best Ones</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-2.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 21 February 2020
            </span>
            <h5>Eternity Bands Do Last Forever</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-3.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 28 February 2020
            </span>
            <h5>The Health Benefits Of Sunglasses</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-4.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 16 February 2020
            </span>
            <h5>Aiming For Higher The Mastopexy</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-5.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 21 February 2020
            </span>
            <h5>Wedding Rings A Gift For A Lifetime</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-6.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 28 February 2020
            </span>
            <h5>The Different Methods Of Hair Removal</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-7.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 16 February 2020
            </span>
            <h5>Hoop Earrings A Style From History</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-8.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 21 February 2020
            </span>
            <h5>Lasik Eye Surgery Are You Ready</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 col-sm-6">
        <div className="blog__item">
          <div
            className="blog__item__pic set-bg"
            data-setbg="img/blog/blog-9.jpg"
          />
          <div className="blog__item__text">
            <span>
              <img src="img/icon/calendar.png" alt="" /> 28 February 2020
            </span>
            <h5>Lasik Eye Surgery Are You Ready</h5>
            <a href="/blog-details">Read More</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

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