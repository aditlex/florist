import Head from "next/head";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <>
      <div id="preloder">
        <div className="loader" />
      </div>

      {/* Offcanvas Menu Begin */}
      <div className="offcanvas-menu-overlay" />
      <div className="offcanvas-menu-wrapper">
        <div className="offcanvas__option">
          <div className="offcanvas__links">
            <Link href="#">Sign in</Link>
            <Link href="#">FAQs</Link>
          </div>
          <div className="offcanvas__top__hover">
            <span>
              Usd <i className="arrow_carrot-down" />
            </span>
            <ul>
              <li>USD</li>
              <li>EUR</li>
              <li>USD</li>
            </ul>
          </div>
        </div>

        <div className="offcanvas__nav__option">
          <Link href="#" className="search-switch">
            <Image src="/img/icon/search.png" alt="search" width={20} height={20} />
          </Link>
          <Link href="#">
            <Image src="/img/icon/heart.png" alt="heart" width={20} height={20} />
          </Link>
          <Link href="#">
            <Image src="/img/icon/cart.png" alt="cart" width={20} height={20} />
            <span>0</span>
          </Link>
          <div className="price">$0.00</div>
        </div>

        <div id="mobile-menu-wrap" />
        <div className="offcanvas__text">
          <p>Free shipping, 30-day return or refund guarantee.</p>
        </div>
      </div>
      {/* Offcanvas Menu End */}

      {/* Header Section Begin */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-7">
                <div className="header__top__left">
                  <p>Free shipping, 30-day return or refund guarantee.</p>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div className="header__top__right">
                  <div className="header__top__links">
                    <Link href="#">Sign in</Link>
                    <Link href="#">FAQs</Link>
                  </div>
                  <div className="header__top__hover">
                    <span>
                      Usd <i className="arrow_carrot-down" />
                    </span>
                    <ul>
                      <li>USD</li>
                      <li>EUR</li>
                      <li>USD</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3">
              <div className="header__logo">
                <Link href="/">
                  <Image src="/img/logo.png" alt="logo" width={150} height={40} />
                </Link>
              </div>
            </div>

            <div className="col-lg-6 col-md-6">
              <nav className="header__menu mobile-menu">
                <ul>
                  <li className="active">
                    <Link href="/">Home</Link>
                  </li>
                  <li>
                    <Link href="/shop">Shop</Link>
                  </li>
                  <li>
                    <Link href="#">Pages</Link>
                    <ul className="dropdown">
                      <li><Link href="/about">About Us</Link></li>
                      <li><Link href="/shop-details">Shop Details</Link></li>
                      <li><Link href="/shopping-cart">Shopping Cart</Link></li>
                      <li><Link href="/checkout">Check Out</Link></li>
                      <li><Link href="/blog-details">Blog Details</Link></li>
                    </ul>
                  </li>
                  <li><Link href="/blog">Blog</Link></li>
                  <li><Link href="/contact">Contacts</Link></li>
                </ul>
              </nav>
            </div>

            <div className="col-lg-3 col-md-3">
              <div className="header__nav__option">
                <Link href="#" className="search-switch">
                  <Image src="/img/icon/search.png" alt="search" width={20} height={20} />
                </Link>
                <Link href="#">
                  <Image src="/img/icon/heart.png" alt="heart" width={20} height={20} />
                </Link>
                <Link href="#">
                  <Image src="/img/icon/cart.png" alt="cart" width={20} height={20} />
                  <span>0</span>
                </Link>
                <div className="price">$0.00</div>
              </div>
            </div>
          </div>

          <div className="canvas__open">
            <i className="fa fa-bars" />
          </div>
        </div>
      </header>

      {/* Scripts */}
      <Script src="/js/jquery-3.3.1.min.js" strategy="afterInteractive" />
      <Script src="/js/bootstrap.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.nice-select.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.nicescroll.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.countdown.min.js" strategy="afterInteractive" />
      <Script src="/js/jquery.slicknav.js" strategy="afterInteractive" />
      <Script src="/js/mixitup.min.js" strategy="afterInteractive" />
      <Script src="/js/owl.carousel.min.js" strategy="afterInteractive" />
      <Script src="/js/main.js" strategy="afterInteractive" />
    </>
  );
}
