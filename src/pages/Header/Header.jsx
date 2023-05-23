import {
  CartIcon,
  LoginIcon,
  RecentlyViewedIcon,
  SearchIcon,
  WishlistIcon,
} from "../../assets/icons";
import { LogoBrand } from "../../assets/icons/LogoBrand";
import { Navbar } from "../../components/Navbar";
import { QuantityIcon } from "./QuantityIcon";
import "./index.css";

export const Header = () => {
  return (
    <div className="header">
      <LogoBrand />
      <Navbar />
      <div className="header--right">
        <SearchIcon />
        <LoginIcon wrapperStyle={{ marginLeft: "20px" }} />
        <RecentlyViewedIcon wrapperStyle={{ marginLeft: "20px" }} />
        <div className="right--quantity__wishlist">
          <WishlistIcon wrapperStyle={{ marginLeft: "20px" }} />
          <QuantityIcon quantity={5} />
        </div>
        <div className="right--quantity__cart">
          <CartIcon wrapperStyle={{ marginLeft: "20px" }} />
          <QuantityIcon quantity={5} />
        </div>
      </div>
    </div>
  );
};
