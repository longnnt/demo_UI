import { NavbarItem } from "./NavbarItem";
import "./index.css";

const NavbarList = ["home", "shop", "product", "page", "blog", "buy umino!"];

export const Navbar = () => {
  const NavbarLength = NavbarList.length;
  let isDropdowns = true;
  return (
    <div className="navbar">
      {NavbarList.map((item, index) => {
        if (index === NavbarLength - 1) isDropdowns = false;
        return <NavbarItem title={item} key={index} isDropdown={isDropdowns} />;
      })}
    </div>
  );
};
