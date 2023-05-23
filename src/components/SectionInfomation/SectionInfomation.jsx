import { ShippingIcon, CheckIcon, MessageIcon } from "../../assets/icons";
import "./index.css";

export const SectionInfomation = () => {
  return (
    <div className="section--info">
      <div className="section--item">
        <ShippingIcon />
        <span className="section--item__heading">Free Shipping</span>
        <span className="section--item__info">
          Get complimentary ground shipping on every order. Don't love it? Send
          it back, on us.
        </span>
      </div>
      <div className="section--item">
        <CheckIcon />
        <span className="section--item__heading">Free Returns</span>
        <span className="section--item__info">
          Free returns within 10 days, please make sure the items are in
          undamaged condition.
        </span>
      </div>
      <div className="section--item">
        <MessageIcon />
        <span className="section--item__heading">Support Online</span>
        <span className="section--item__info">
          We support customers 24/7, send questions we will solve for you
          immediately.
        </span>
      </div>
    </div>
  );
};
