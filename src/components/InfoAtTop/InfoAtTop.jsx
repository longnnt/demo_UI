import { DropDownIcon } from "../../assets/icons/DropDownIcon";
import "./index.css";

export const InfoAtTop = () => {
  return (
    <div className="info">
      <div className="info--contact">
        <span className="phone">+222-1800-2628</span>
        <span className="email">testtechcompany@gmail.com</span>
      </div>
      <div className="info--signup">
        <span className="info--signup-discount">
          Sign up for 10% off your first order:{" "}
        </span>
        <a href="h" className="info--signup--link">
          Sign up
        </a>
      </div>
      <div className="info--extra">
        <span className="store">Our Store</span>
        <div className="lang">
          <span>English</span>
          <DropDownIcon wrapperStyle={{ marginLeft: "8px" }} />
        </div>
        <div className="currency">
          <span>United States (USD $)</span>
          <DropDownIcon wrapperStyle={{ marginLeft: "8px" }} />
        </div>
      </div>
    </div>
  );
};
