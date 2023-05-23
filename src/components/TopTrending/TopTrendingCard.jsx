import { RateIcon } from "../../assets/icons";
import { Badge } from "./Badge";

export const TopTrendingCard = ({ product }) => {
  return (
    <div className="top--trending__card">
      <img src={product?.url} alt="" />
      <div className="top--trending__card__info">
        <span className="top--trending__card__name">{product?.name}</span>
        <RateIcon />
        <div className="top--trending__card__price">
          <span
            className="price"
            style={{
              color: product?.price_discount && "var(--brown-100)",
              fontSize: "18px",
            }}
          >
            ${product?.price}.00
          </span>
          <span
            className="price--discount"
            style={{
              display: (product?.price_discount !== 0 && "block") || "none",
              color: "var(--gray-100)",
              marginLeft: "5px",
              textDecoration: "line-through",
            }}
          >
            ${product?.price_discount}.00
          </span>
        </div>
      </div>
      <div className="top--trending__card__badge">
        {product?.price_discount !== 0 && (
          <Badge
            content={"-50%"}
            wrapperStyle={{ backgroundColor: "var(--brown-100)" }}
          />
        )}
        {product?.isPreorder !== 0 && (
          <Badge
            content={"Pre-order"}
            wrapperStyle={{ backgroundColor: "var(--green-100)" }}
          />
        )}
      </div>
    </div>
  );
};
