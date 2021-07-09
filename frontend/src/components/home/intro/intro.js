import "./intro.css";
import stockPhoto from "../../../images/introStockPhoto.jpg";

const Intro = () => {
  return (
    <div className="intro-bg">
      <img className="img" alt="stockimage" src={stockPhoto} height="420px" />
      <h1 className="zephyr">Zephyr</h1>
      <h3 className="zephyr-sub">Full stack web solutions</h3>

      <p className="text-info">
        We are a young team of developers and
        <br />
        designers, looking to deliver higher quality
        <br />
        software faster.
      </p>

      <button className="button">
        <p className="button-text">Read more</p>
      </button>
    </div>
  );
};

export default Intro;
