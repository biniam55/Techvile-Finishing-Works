import FrameComponent from "../components/FrameComponent";
import ConnectionPoint from "../components/ConnectionPoint";
import Filter from "../components/Filter";
import GroupComponent1 from "../components/GroupComponent1";
import ShapeSet from "../components/ShapeSet";
import GroupComponent from "../components/GroupComponent";
import "./DesktopMain.css";

const DesktopMain = () => {
  return (
    <div className="desktop-main">
      <img
        className="branching-logic-icon"
        alt=""
        src="/branching-logic@2x.png"
      />
      <div className="div">
        <img className="image-icon" alt="" src="/image@2x.png" />
        <div className="ceramic-installation">ceramic installation</div>
        <div className="expert-ceramic-installation">
          Expert ceramic installation, enhancing spaces with durability and
          style
        </div>
      </div>
      <FrameComponent />
      <ConnectionPoint />
      <section className="data-merger">
        <Filter />
        <GroupComponent1 />
      </section>
      <ShapeSet />
      <div className="rectangle" />
      <div className="rectangle1" />
      <GroupComponent />
    </div>
  );
};

export default DesktopMain;
