import { TopTrendingCard } from "./TopTrendingCard";
import { TOP_TRENDING_LIST } from "./constant";
import "./index.css";

export const TopTrending = () => {
  return (
    <div className="top--trending__container">
      <div className="top--trending__text">
        <span className="top--trending__heading">Top Trending</span>
        <span className="top--trending__info">
          Our products are designed for everyone, environmentally friendly.
        </span>
      </div>
      <div className="top--trending__list">
        {TOP_TRENDING_LIST.map((product) => (
          <TopTrendingCard product={product} key={product?.id} />
        ))}
      </div>
      <button className="btn--load-more">Load more</button>
    </div>
  );
};
