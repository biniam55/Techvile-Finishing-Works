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
    <div className="frame-parent30" style={frameDiv1Style}>
      <div className="title-parent7">
        <div className="title18">{title}</div>
        <div className="forgot3">Forgot？</div>
      </div>
      <div className="input2">
        <div className="input-text4">
          <div className="context3">{context}</div>
          <div className="iconeye-wrapper2">
            <img className="iconeye4" alt="" src="/iconeye.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent5;
