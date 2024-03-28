import { useMemo } from "react";
import "./FrameComponent9.css";

const FrameComponent9 = ({
  propPadding,
  propPadding1,
  propBackgroundImage,
  propWidth,
}) => {
  const frameSectionStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const div1Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const picturesStyle = useMemo(() => {
    return {
      backgroundImage: propBackgroundImage,
    };
  }, [propBackgroundImage]);

  const fRAMEStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <section className="frame" style={frameSectionStyle}>
      <div className="div22" style={div1Style}>
        <div className="pictures9" style={picturesStyle}>
          <div className="f-r-a-m-e" />
          <div className="pictures-child4" />
        </div>
        <div className="f-r-a-m-e1" style={fRAMEStyle}>
          <div className="title25">Title</div>
          <div className="something-short-and9">
            Something short and simple here
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent9;
