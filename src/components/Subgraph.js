import { useMemo } from "react";
import "./Subgraph.css";

const Subgraph = ({
  star2,
  star3,
  star4,
  star5,
  star6,
  iWillLetMyMumKnowAboutThi,
  samri,
  ellipse1,
  propFlex,
  propMinHeight,
  propAlignSelf,
  propPadding,
  propLineHeight,
  propPadding1,
  propMinWidth,
}) => {
  const subgraphStyle = useMemo(() => {
    return {
      flex: propFlex,
      minHeight: propMinHeight,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinHeight, propAlignSelf]);

  const starsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const iWillLetStyle = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const frameDivStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const samriStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="subgraph" style={subgraphStyle}>
      <div className="stars-wrapper">
        <div className="stars" style={starsStyle}>
          <img className="stars-child" loading="lazy" alt="" src={star2} />
          <img className="stars-item" loading="lazy" alt="" src={star3} />
          <img className="stars-inner" loading="lazy" alt="" src={star4} />
          <img className="star-icon" alt="" src={star5} />
          <img className="stars-child1" alt="" src={star6} />
        </div>
      </div>
      <h1 className="i-will-let" style={iWillLetStyle}>
        {iWillLetMyMumKnowAboutThi}
      </h1>
      <div className="frame-parent11" style={frameDivStyle}>
        <div className="samri-wrapper">
          <h3 className="samri" style={samriStyle}>
            {samri}
          </h3>
        </div>
        <img
          className="logo5ff3c18e-1-icon"
          loading="lazy"
          alt=""
          src="/logo5ff3c18e-1.svg"
        />
      </div>
      <img className="subgraph-child" loading="lazy" alt="" src={ellipse1} />
    </div>
  );
};

export default Subgraph;
