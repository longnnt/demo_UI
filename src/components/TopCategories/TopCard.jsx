import "./index.css";

export const TopCard = ({ category }) => {
  return (
    <div className="top--card">
      <img src={category?.url} alt="" className="top--card__img" />
      <span className="top--card__text">{category?.title}</span>
    </div>
  );
};
