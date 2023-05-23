import { DropDownIcon } from "../../assets/icons";

export const FooterExtraInfo = () => {
  return (
    <div className="footer--extra__info">
      <div className="lang-and__currency">
        <div className="footer__lang">
          English
          <DropDownIcon wrapperStyle={{ marginLeft: "4px" }} />
        </div>
        <div className="footer__currency">
          United States (USD $)
          <DropDownIcon wrapperStyle={{ marginLeft: "4px" }} />
        </div>
      </div>
      <div className="footer--extra__middle">
        <span>© 2022 Umino Store. All Rights Reserved.</span>
      </div>
      <div className="footer--extra__payment">
        <img src={process.env.PUBLIC_URL + "./VisaImg.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "./MasterCardImg.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "./3.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "./4.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "./5.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "./6.jpg"} alt="" />
        <img src={process.env.PUBLIC_URL + "./PaypalImg.jpg"} alt="" />
      </div>
    </div>
  );
};
