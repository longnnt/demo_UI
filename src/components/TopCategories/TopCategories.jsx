import { TopCard } from "./TopCard";
import { CATEGORY_LIST } from "./constant";

export const TopCategories = () => {
  return (
    <div className="top--categories">
      <div className="top--categories__text">
        <span className="top--categories__heading">Top Categories</span>
        <span className="top--categories__info">
          Our products are designed for everyone, environmentally friendly.
        </span>
      </div>
      <div className="top--categories__list">
        {CATEGORY_LIST.map((category, index) => (
          <TopCard category={category} key={index} />
        ))}
      </div>
    </div>
  );
};
