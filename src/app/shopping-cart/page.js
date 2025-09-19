import head from "next/head";
import Script from "next/script";
import styles from "../page.module.css";
import Header from "../../components/header";

export default function ShoppingCart() {
  return(
    <>
    <Header />
  <section className="breadcrumb-option">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="breadcrumb__text">
            <h4>Shopping Cart</h4>
            <div className="breadcrumb__links">
              <a href="./index.html">Home</a>
              <a href="./shop.html">Shop</a>
              <span>Shopping Cart</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Breadcrumb Section End */}
  {/* Shopping Cart Section Begin */}
  <section className="shopping-cart spad">
    <div className="container">
      <div className="row">
        <div className="col-lg-8">
          <div className="shopping__cart__table">
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="product__cart__item">
                    <div className="product__cart__item__pic">
                      <img src="img/shopping-cart/cart-1.jpg" alt="" />
                    </div>
                    <div className="product__cart__item__text">
                      <h6>T-shirt Contrast Pocket</h6>
                      <h5>$98.49</h5>
                    </div>
                  </td>
                  <td className="quantity__item">
                    <div className="quantity">
                      <div className="pro-qty-2">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 30.00</td>
                  <td className="cart__close">
                    <i className="fa fa-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product__cart__item">
                    <div className="product__cart__item__pic">
                      <img src="img/shopping-cart/cart-2.jpg" alt="" />
                    </div>
                    <div className="product__cart__item__text">
                      <h6>Diagonal Textured Cap</h6>
                      <h5>$98.49</h5>
                    </div>
                  </td>
                  <td className="quantity__item">
                    <div className="quantity">
                      <div className="pro-qty-2">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 32.50</td>
                  <td className="cart__close">
                    <i className="fa fa-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product__cart__item">
                    <div className="product__cart__item__pic">
                      <img src="img/shopping-cart/cart-3.jpg" alt="" />
                    </div>
                    <div className="product__cart__item__text">
                      <h6>Basic Flowing Scarf</h6>
                      <h5>$98.49</h5>
                    </div>
                  </td>
                  <td className="quantity__item">
                    <div className="quantity">
                      <div className="pro-qty-2">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 47.00</td>
                  <td className="cart__close">
                    <i className="fa fa-close" />
                  </td>
                </tr>
                <tr>
                  <td className="product__cart__item">
                    <div className="product__cart__item__pic">
                      <img src="img/shopping-cart/cart-4.jpg" alt="" />
                    </div>
                    <div className="product__cart__item__text">
                      <h6>Basic Flowing Scarf</h6>
                      <h5>$98.49</h5>
                    </div>
                  </td>
                  <td className="quantity__item">
                    <div className="quantity">
                      <div className="pro-qty-2">
                        <input type="text" defaultValue={1} />
                      </div>
                    </div>
                  </td>
                  <td className="cart__price">$ 30.00</td>
                  <td className="cart__close">
                    <i className="fa fa-close" />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn">
                <a href="#">Continue Shopping</a>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="continue__btn update__btn">
                <a href="#">
                  <i className="fa fa-spinner" /> Update cart
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="cart__discount">
            <h6>Discount codes</h6>
            <form action="#">
              <input type="text" placeholder="Coupon code" />
              <button type="submit">Apply</button>
            </form>
          </div>
          <div className="cart__total">
            <h6>Cart total</h6>
            <ul>
              <li>
                Subtotal <span>$ 169.50</span>
              </li>
              <li>
                Total <span>$ 169.50</span>
              </li>
            </ul>
            <a href="#" className="primary-btn">
              Proceed to checkout
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Shopping Cart Section End */}
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