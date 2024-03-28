import { useMemo } from "react";
import "./FrameComponent5.css";

const FrameComponent5 = ({
  title,
  context,
  propAlignSelf,
  propPosition,
  propTop,
  propLeft,
  propWidth,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      position: propPosition,
      top: propTop,
      left: propLeft,
      width: propWidth,
    };
  }, [propAlignSelf, propPosition, propTop, propLeft, propWidth]);

  return (
    <div className="frame-parent36" style={frameDiv1Style}>
      <div className="title-parent7">
        <div className="title18">{title}</div>
        <div className="forgot5">Forgot？</div>
      </div>
      <div className="input3">
        <div className="input-text5">
          <div className="context4">{context}</div>
          <div className="iconeye-wrapper3">
            <img className="iconeye5" alt="" src="/iconeye.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
