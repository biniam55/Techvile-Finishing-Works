import { useMemo } from "react";
import "./Component.css";

const Component = ({
  image,
  painting,
  precisionPaintingServiceT,
  propHeight,
  propWidth,
}) => {
  const divStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const paintingStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className="div3" style={divStyle}>
      <img className="image-icon5" loading="lazy" alt="" src={image} />
      <div className="icon-library">
        <div className="shape-maker">
          <h2 className="painting" style={paintingStyle}>
            {painting}
          </h2>
          <h3 className="precision-painting-service">
            {precisionPaintingServiceT}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Component;
