import { useMemo } from "react";
import "./FrameComponent12.css";

const FrameComponent12 = ({
  title,
  forgot,
  contextPlaceholder,
  forgot1,
  frameDiv,
  propAlignSelf,
  propPadding,
  propFlex,
  propHeight,
  propWidth,
  propWidth1,
  propMinWidth,
}) => {
  const frameDiv2Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      padding: propPadding,
      flex: propFlex,
    };
  }, [propAlignSelf, propPadding, propFlex]);

  const frameDiv3Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const forgotStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const contextStyle = useMemo(() => {
    return {
      width: propWidth1,
      minWidth: propMinWidth,
    };
  }, [propWidth1, propMinWidth]);

  return (
    <div className="frame-parent43" style={frameDiv2Style}>
      <div className="title-parent8" style={frameDiv3Style}>
        <div className="title27">{title}</div>
        {!forgot1 && (
          <div className="forgot6" style={forgotStyle}>
            {forgot}
          </div>
        )}
      </div>
      <div className="input4">
        <div className="input-text6">
          <input
            className="context5"
            placeholder={contextPlaceholder}
            type="text"
            style={contextStyle}
          />
          {!frameDiv && (
            <div className="iconeye-wrapper4">
              <img className="iconeye6" alt="" src="/iconeye.svg" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent12;
