import LogicTree from "../components/LogicTree";
import FunctionCaller from "../components/FunctionCaller";
import FrameComponent7 from "../components/FrameComponent7";
import FrameComponent6 from "../components/FrameComponent6";
import Timer from "../components/Timer";
import PaddingPadding from "../components/PaddingPadding";
import GroupComponent4 from "../components/GroupComponent4";
import "./MobileHome.css";

const MobileHome = () => {
  return (
    <div className="mobile-home">
      <LogicTree />
      <FunctionCaller />
      <section className="index-calculator">
        <div className="div1">
          <img
            className="image-icon1"
            loading="lazy"
            alt=""
            src="/image-2@2x.png"
          />
          <div className="graph-manager">
            <div className="tree-leaf">
              <div className="marble-and-granite">marble and granite</div>
              <div className="exquisite-marble-and">
                Exquisite marble and granite craftsmanship, elevating spaces
                with timeless beauty.
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="timer-wrapper">
        <div className="timer">
          <img
            className="image-icon2"
            loading="lazy"
            alt=""
            src="/image@2x.png"
          />
          <div className="stack-manager">
            <div className="signal-handler">
              <div className="ceramic-installation1">ceramic installation</div>
              <div className="expert-ceramic-installation1">
                Expert ceramic installation, enhancing spaces with durability
                and style
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mobile-home-inner">
        <div className="image-parent">
          <img
            className="image-icon3"
            loading="lazy"
            alt=""
            src="/image-3@2x.png"
          />
          <div className="image-group">
            <img
              className="image-icon4"
              loading="lazy"
              alt=""
              src="/image-41@2x.png"
            />
            <img
              className="group-icon"
              loading="lazy"
              alt=""
              src="/group-3031@2x.png"
            />
          </div>
        </div>
      </section>
      <FrameComponent7 />
      <FrameComponent6 />
      <Timer />
      <PaddingPadding />
      <GroupComponent4 />
    </div>
  );
};

export default MobileHome;
