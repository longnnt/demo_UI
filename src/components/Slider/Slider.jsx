import { LeftArrowIcon, RightArrowIcon } from "../../assets/icons";
import "./index.css";

export const Slider = () => {
  const active = true;
  return (
    <div className="slider">
      <div className="arrow left--arrow">
        <LeftArrowIcon />
      </div>
      <img
        src={process.env.PUBLIC_URL + "./bgContent.png"}
        alt="nothing"
        className="bgContent"
      />
      <div className="arrow right--arrow">
        <RightArrowIcon />
      </div>
      <div className="slider__content">
        <div className="content__text">
          <p className="content__slogan">Beautiful & Elegant</p>
          <p className="content__heading">Premium Bedroom</p>
          <div className="content__discount">
            Discount 50% On Products & Free Shipping.
          </div>
        </div>
        <button className="content__btn">Shop now</button>
      </div>
      <div className="slider--radio">
        <div className="radio"></div>
        <div
          className="radio"
          style={{ backgroundColor: active && "var(--white-100)" }}
        ></div>
        <div className="radio"></div>
      </div>
    </div>
  );
};
