import React, { useRef } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";

import { Link } from "./components/Link/Link.jsx";
import { Logo } from "./components/Logo/Logo.jsx";
import { SearchInput } from "./components/SearchInput/SearchInput.jsx";
import { UserMenuLink } from "./components/UserMenuLink/UserMenuLink.jsx";
import List from "./components/List/List.jsx";
import Slide from "./components/Slide/Slide.jsx";
import { Button } from "./components/Button/Button.jsx";
import { SubscriptionForm } from "./components/SubscriptionForm/SubscriptionForm.jsx";
import { LiveChatButton } from "./components/LiveChatButton/LiveChatButton.jsx";
import "./App.scss";

import "swiper/css";
import "swiper/css/pagination";

import { ReactComponent as UserNavIcon1 } from "./assets/svg/item1.svg";
import { ReactComponent as UserNavIcon2 } from "./assets/svg/item2.svg";
import { ReactComponent as UserNavIcon3 } from "./assets/svg/item3.svg";
import { ReactComponent as UserNavIcon4 } from "./assets/svg/item4.svg";

import cat1 from "./assets/images/categories-1.jpg";
import cat2 from "./assets/images/categories-2.jpg";
import cat3 from "./assets/images/categories-3.jpg";
import cat4 from "./assets/images/categories-4.jpg";
import cat5 from "./assets/images/categories-5.jpg";
import cat6 from "./assets/images/categories-6.jpg";

import paymentMethodImage from "./assets/images/payments-method.png";

function App() {
  const pagination = {
    el: ".slider-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return (
        '<button class="slider-pagination__item ' +
        className +
        '"><span class="visually-hidden">Slide ' +
        (index + 1) +
        "</span></button>"
      );
    },
  };

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

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
            <UserMenuLink icon={<UserNavIcon1 />}>Lists</UserMenuLink>
            <UserMenuLink icon={<UserNavIcon2 />}>Account</UserMenuLink>
            <UserMenuLink icon={<UserNavIcon3 />}>Quick Order</UserMenuLink>
            <UserMenuLink
              icon={
                <span className="cart-button">
                  <span className="cart-button__count">32</span>
                  <UserNavIcon4 />
                </span>
              }
            >
              Cart
            </UserMenuLink>
          </List>
        </div>
        <div className="main-header__layer3">
          <nav className="main-nav">
            <List className="main-nav-list" horizontal>
              <Link href="/" className="main-nav-link">
                Products
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
          <Link href="tel:+844434672" className="main-phone">
            +(844) 434-672
          </Link>
        </div>
      </header>
      <main className="main-page__main-section main-section">
        <section className="slider-section main-section__slider">
          <h2 className="visually-hidden">Slider</h2>
          <Swiper
            pagination={pagination}
            modules={[Pagination]}
            className="slider"
          >
            <SwiperSlide className="slider__item">
              <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide className="slider__item">
              <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide className="slider__item">
              <Slide></Slide>
            </SwiperSlide>
            <SwiperSlide className="slider__item">
              <Slide></Slide>
            </SwiperSlide>
            <div className="slider-pagination"></div>
          </Swiper>
        </section>

        <section className="categories main-section__categories">
          <div className="categories__title-block">
            <h2 className="categories__title">Categories</h2>
            <div className="categories__switch">
              <button
                className="categories__switch-button categories__switch-button--prev"
                ref={navigationPrevRef}
              >
                <div className="visually-hidden">Previous category</div>
              </button>
              <button
                className="categories__switch-button categories__switch-button--next"
                ref={navigationNextRef}
              >
                <div className="visually-hidden">Next category</div>
              </button>
            </div>
          </div>
          <Swiper
            modules={[Pagination, Navigation]}
            className="categories-list"
            slidesPerView={6}
            spaceBetween={42}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
          >
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat1}
                  alt=""
                  width="197"
                  height="197"
                />
                Abrasives
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat2}
                  alt=""
                  width="197"
                  height="197"
                />
                Electrical
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat3}
                  alt=""
                  width="197"
                  height="197"
                />
                Welding
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat4}
                  alt=""
                  width="197"
                  height="197"
                />
                Safety
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat5}
                  alt=""
                  width="197"
                  height="197"
                />
                Fasteners
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat6}
                  alt=""
                  width="197"
                  height="197"
                />
                Hand Tools
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat6}
                  alt=""
                  width="197"
                  height="197"
                />
                Hand Tools
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat6}
                  alt=""
                  width="197"
                  height="197"
                />
                Hand Tools
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat6}
                  alt=""
                  width="197"
                  height="197"
                />
                Hand Tools
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat6}
                  alt=""
                  width="197"
                  height="197"
                />
                Hand Tools
              </a>
            </SwiperSlide>
            <SwiperSlide className="categories-list__item">
              <a className="category" href="/">
                <img
                  className="category__image"
                  src={cat6}
                  alt=""
                  width="197"
                  height="197"
                />
                Hand Tools
              </a>
            </SwiperSlide>
          </Swiper>
        </section>
        <section className="promo main-section__promo">
          <div className="promo__content">
            <h2 className="promo__title">
              Large Inventory Of Power Tools & Accessories
            </h2>
            <p>
              Find the Aluminum and Stainless Steel items for your project in
              stock and ready to ship today! Avoid project delays and long lead
              times in a challenging supply chain for specialty metals and
              non-ferrous items. We are well stocked and here to serve you with
              guided support.
            </p>
            <Button>Shop Now</Button>
          </div>
        </section>

        <section className="advantages main-section__advantages">
          <h2 className="visually-hidden">Advantages</h2>
          <List horizontal className="advantages-list">
            <p>Products Catalog</p>
            <p>24/7 Customer Support</p>
            <p>Product Ideas</p>
          </List>
        </section>
      </main>

      <footer className="main-footer">
        <div className="main-footer__row">
          <section className="footer-links">
            <h2 className="footer-links__title">Helpful Links</h2>
            <List className="footer-links-list">
              <a href="/">Buyer’s Guides</a>
              <a href="/">Calculators</a>
              <a href="/">All Brands</a>
              <a href="/">Catalg Updates</a>
            </List>
          </section>
          <section className="footer-links">
            <h2 className="footer-links__title">Customer Services</h2>
            <List className="footer-links-list">
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
            <List className="footer-links-list">
              <a href="/">Contact Us</a>
              <a href="/">FAQ</a>
              <a href="/">Feedback</a>
              <a href="/">Live Chat</a>
              <a href="/">My Account</a>
              <a href="tel:+844434672" class="main-phone main-phone--footer">
                +(844) 434-672
              </a>
            </List>
          </section>
        </div>
        <div>
          <section className="subscription">
            <h2 className="visually-hidden">Subscription</h2>
            <p>
              Subscribe to our mailing list to receive exclusive offers and the
              latest product updates
            </p>

            <SubscriptionForm />
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
          <p className="all-right-reserved">
            © «Brand» 2022, All Rights Reserved
          </p>
        </div>
      </footer>

      <div className="modal-container">
        <div className="modal-container__layer1">
            <LiveChatButton className="main-page__livechat"></LiveChatButton>
        </div>
      </div>
    </div>
  );
}

export default App;
