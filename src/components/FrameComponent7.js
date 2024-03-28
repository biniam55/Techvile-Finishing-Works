import GlobalScope from "./GlobalScope";
import "./FrameComponent7.css";

const FrameComponent7 = () => {
  return (
    <section className="mobile-home-child">
      <div className="global-scope-parent">
        <GlobalScope
          title="Diverse Portfolio"
          group304="/group-304.svg"
          group305="/group-304.svg"
        />
        <div className="global-scope-group">
          <GlobalScope
            title="Experienced Team"
            group304="/group-304-1.svg"
            group305="/group-304-1.svg"
          />
          <GlobalScope
            title="Transparent Pricing"
            group304="/group-304-2.svg"
            group305="/group-304-2.svg"
          />
        </div>
        <div className="frame-wrapper11">
          <button className="group-button">
            <div className="frame-child11" />
            <div className="gallery15">Gallery</div>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent7;
