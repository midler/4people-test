import React from "react";

import { Link } from "./components/Link/Link.jsx";
import { Logo } from "./components/Logo/Logo.jsx";
import { SearchInput } from "./components/SearchInput/SearchInput.jsx";
import { UserMenuLink } from "./components/UserMenuLink/UserMenuLink.jsx";
import List from "./components/List/List.jsx";

import "./App.scss";
import cat1 from "./assets/images/categories-1.jpg";
import cat2 from "./assets/images/categories-2.jpg";
import cat3 from "./assets/images/categories-3.jpg";
import cat4 from "./assets/images/categories-4.jpg";
import cat5 from "./assets/images/categories-5.jpg";
import cat6 from "./assets/images/categories-6.jpg";

import paymentMethodImage from "./assets/images/payments-method.png";

function App() {
  return (
    <div className="main-page">
      <header className="main-page__header main-header">
        <div className="main-header__layer1">
          <List className="header-links" horizontal>
            <Link href="/">Request a Sample</Link>
            <Link href="/">Help</Link>
            <Link href="/">Contact</Link>
          </List>
        </div>
        <div className="main-header__layer2">
          <Logo className="main-header__logo" />
          <SearchInput className="main-header__search" />
          <List className="user-menu" horizontal>
            <UserMenuLink>Lists</UserMenuLink>
            <UserMenuLink>Account</UserMenuLink>
            <UserMenuLink>Quick Order</UserMenuLink>
            <UserMenuLink>Cart</UserMenuLink>
          </List>
        </div>
        <div className="main-header__layer3">
          <nav className="main-nav">
            <List className="main-nav-list" horizontal>
              <Link href="/" className="main-nav-link">
                Product
              </Link>
              <Link href="/" className="main-nav-link">
                Resources
              </Link>
              <Link href="/" className="main-nav-link">
                Services
              </Link>
              <Link href="/" className="main-nav-link">
                Locations
              </Link>
              <Link href="/" className="main-nav-link">
                Careers
              </Link>
              <Link href="/" className="main-nav-link">
                Support
              </Link>
            </List>
          </nav>
          <Link href="tel:+844434672">+(844) 434-672</Link>
        </div>
      </header>
      <main className="main-page__main-section main-section">
        <section className="slider">
          <h2 className="visually-hidden">Slider</h2>
          <ul className="slider__list">
            <li className="slider__item">
              <section className="slide">
                <h3 className="slide__title">
                  Fiberglass and specialty metals are in stock across the United
                  States
                </h3>
                <button type="button">Shop Now</button>
              </section>
            </li>
            <li className="slider__item">
              <section className="slide">
                <h3 className="slide__title">
                  Fiberglass and specialty metals are in stock across the United
                  States
                </h3>
                <button type="button">Shop Now</button>
              </section>
            </li>
            <li className="slider__item">
              <section className="slide">
                <h3 className="slide__title">
                  Fiberglass and specialty metals are in stock across the United
                  States
                </h3>
                <button type="button">Shop Now</button>
              </section>
            </li>
            <li className="slider__item">
              <section className="slide">
                <h3 className="slide__title">
                  Fiberglass and specialty metals are in stock across the United
                  States
                </h3>
                <button type="button">Shop Now</button>
              </section>
            </li>
          </ul>
          <List className="slider__pagination">
            <li>
              <span className="visually-hidden">Slide 1</span>
            </li>
            <li>
              <span className="visually-hidden">Slide 2</span>
            </li>
            <li>
              <span className="visually-hidden">Slide 3</span>
            </li>
            <li>
              <span className="visually-hidden">Slide 4</span>
            </li>
          </List>
        </section>

        <section className="categories">
          <h2 className="categories__title">Categories</h2>
          <List className="categories__switch" horizontal>
            <button type="button">
              <span className="visually-hidden">previus categories</span>
            </button>
            <button type="button">
              <span className="visually-hidden">next categories</span>
            </button>
          </List>
          <List className="categories-list">
            <>
              <img src={cat1} alt="" width="197" height="197" />
              <a href="/">Abrasives</a>
            </>
            <>
              <img src={cat2} alt="" width="197" height="197" />
              <a href="/">Electrical</a>
            </>
            <>
              <img src={cat3} alt="" width="197" height="197" />
              <a href="/">Welding</a>
            </>
            <>
              <img src={cat4} alt="" width="197" height="197" />
              <a href="/">Safety</a>
            </>
            <>
              <img src={cat5} alt="" width="197" height="197" />
              <a href="/">Fasteners</a>
            </>
            <>
              <img src={cat6} alt="" width="197" height="197" />
              <a href="/">Hand Tools</a>
            </>
          </List>
        </section>
        <section className="promo">
          <h2 className="promo">
            Large Inventory Of Power Tools & Accessories
          </h2>
          <p>
            Find the Aluminum and Stainless Steel items for your project in
            stock and ready to ship today! Avoid project delays and long lead
            times in a challenging supply chain for specialty metals and
            non-ferrous items. We are well stocked and here to serve you with
            guided support.
          </p>
          <button type="button">Shop Now</button>
        </section>

        <section className="advantages">
          <h2 className="advantages">Advantages</h2>
          <List horizontal>
            <p>Products Catalog</p>

            <p>24/7 Customer Support</p>

            <p>Product Ideas</p>
          </List>
        </section>
      </main>

      <footer className="main-footer">
        <div>
          <section className="footer-links">
            <h2 className="footer-links__title">Helpful Links</h2>
            <List>
              <a href="/">Buyer’s Guides</a>

              <a href="/">Calculators</a>

              <a href="/">All Brands</a>

              <a href="/">Catalg Updates</a>
            </List>
          </section>
          <section className="footer-links">
            <h2 className="footer-links__title">Customer Services</h2>
            <List>
              <a href="/">Express Delivery</a>

              <a href="/">Privacy Statement</a>

              <a href="/">Terms of Use</a>

              <a href="/">Pricing Policy</a>

              <a href="/">Returns and Refunds</a>

              <a href="/">Help and FAQ</a>

              <a href="/">Return Points</a>

              <a href="/">Returns and Orders</a>
            </List>
          </section>

          <section className="footer-links">
            <h2 className="footer-links__title">Support</h2>
            <List>
              <a href="/">Contact Us</a>

              <a href="/">FAQ</a>

              <a href="/">Feedback</a>

              <a href="/">Live Chat</a>

              <a href="/">My Account</a>

              <a href="tel:+844434672">+(844) 434-672</a>
            </List>
          </section>
        </div>
        <div>
          <section className="suscription">
            <h2 className="visually-hidden">Subscription</h2>
            <p>
              Subscribe to our mailing list to receive exclusive offers and the
              latest product updates
            </p>

            <form>
              <label htmlFor="subscription" className="visually-hidden">
                Subscription form
              </label>
              <input type="text" id="subscription" placeholder="Your E-mail" />
              <button type="submit">Subscribe</button>
            </form>
          </section>

          <section className="payments-method">
            <h2 className="visually-hidden">Payments method</h2>
            <img
              src={paymentMethodImage}
              alt="You can pay with: MasterCard, Visa, Discover, AmericanExpress."
            />
          </section>
        </div>
        <div>
          <p>© «Brand» 2022, All Rights Reserved</p>
        </div>
      </footer>

      <div className="modal-container">
        <div className="modal-container__layer1">
          <button className="livechat">Лайвчат</button>
        </div>
      </div>
    </div>
  );
}

export default App;
