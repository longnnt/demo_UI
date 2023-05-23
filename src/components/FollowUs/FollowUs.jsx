import { FollowUsCard } from "./FollowUsCard";
import { FOLLOW_US_LIST } from "./constants";
import "./index.css";

export const FollowUs = () => {
  return (
    <div className="follow-us">
      {FOLLOW_US_LIST.map((item) => (
        <FollowUsCard url={item?.url} key={item?.id} />
      ))}
    </div>
  );
};
