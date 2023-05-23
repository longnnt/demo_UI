import { LockIcon } from "../../assets/icons";

export const FollowUsCard = ({ url }) => {
  return (
    <div className="follow-us__card">
      <img src={url} alt="" className="follow-us__img" />
      <div className="follow-us__icon">
        <LockIcon />
      </div>
    </div>
  );
};
