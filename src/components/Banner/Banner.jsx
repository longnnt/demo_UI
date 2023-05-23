import "./index.css";

export const Banner = () => {
  return (
    <div className="banner">
      <img
        src={process.env.PUBLIC_URL + "./bgBanner.png"}
        alt=""
        className="banner--img"
      />
      <div className="banner--content">
        <span className="banner--content__limit">limited edition</span>
        <span className="banner--content__heading">Unique Style</span>
        <span className="banner--content__info">
          The watch is carefully designed with quality materials, such as the
          domed sapphire crystal, and the meticulous level of detail - from the
          dial to the delicate gold hour markers.
        </span>
        <button className="banner--content__btn">discover now</button>
      </div>
    </div>
  );
};
