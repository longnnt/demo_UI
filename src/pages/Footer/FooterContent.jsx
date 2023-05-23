import {
  FacebookIcon,
  InstaIcon,
  LogoBrand,
  PinterestIcon,
  SnapchatIcon,
  TiktokIcon,
  TwitterIcon,
  YoutubeIcon,
} from "../../assets/icons";
import "./index.css";

export const FooterContent = () => {
  const active = true;
  return (
    <div className="footer__content">
      <div className="footer__contact">
        <LogoBrand />
        <div className="contact__info">
          <p>268 St, South New York/NY 98944, United States</p>
          <p>+222-1800-2628</p>
          <p>blueskytechcompany@gmail.com</p>
        </div>
        <div className="contact__icon">
          <TwitterIcon />
          <FacebookIcon />
          <InstaIcon />
          <YoutubeIcon />
          <TiktokIcon />
          <PinterestIcon />
          <SnapchatIcon />
        </div>
      </div>
      <div className="footer__customer__service">
        <p className="service__heading">Customer service</p>
        <p className="service__item">Privacy Policy</p>
        <p
          className="service__item"
          style={{ marginLeft: active && "12px", fontWeight: active && 600 }}
        >
          Refund Policy
        </p>
        <p className="service__item">Shipping & Return</p>
        <p className="service__item">Term & Conditions</p>
        <p className="service__item">Advanced Search</p>
        <p className="service__item">Store Locations</p>
      </div>
      <div className="footer__shop-by__categories">
        <p className="shop__heading">Shop by categories</p>
        <p className="shop__item">Smartphone</p>
        <p className="shop__item">Headphones</p>
        <p className="shop__item">Computer & Desktop</p>
        <p className="shop__item">Cameras & Photos</p>
        <p className="shop__item">Laptop & Ipad</p>
      </div>
      <div className="footer__new--letter">
        <p className="new--letter__heading">Sign up to new letter</p>
        <p>
          Enter your email address to get $10 off your first order and free
          shipping. Updates information on Sales and Offers.
        </p>
        <div className="new--letter__subcrible">
          <input
            type="text"
            className="subcrible__input"
            placeholder="Enter your email..."
          />
          <button className="subcrible__btn">subcrible</button>
        </div>
      </div>
    </div>
  );
};
