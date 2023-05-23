import { DropDownIcon } from "../../assets/icons/DropDownIcon";
import "./index.css";

export const NavbarItem = ({ title, isDropdown }) => {
  return (
    <div>
      <span className="navbar--item-text">{title}</span>
      {isDropdown && (
        <DropDownIcon
          wrapperStyle={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            marginLeft: "5px",
          }}
        />
      )}
    </div>
  );
};
