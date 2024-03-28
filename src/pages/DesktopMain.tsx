import { FunctionComponent } from "react";
import FrameComponent from "../components/FrameComponent";
import ConnectionPoint from "../components/ConnectionPoint";
import Filter from "../components/Filter";
import GroupComponent1 from "../components/GroupComponent1";
import ShapeSet from "../components/ShapeSet";
import GroupComponent from "../components/GroupComponent";
import styles from "./DesktopMain.module.css";

const DesktopMain: FunctionComponent = () => {
  return (
    <div className={styles.desktopMain}>
      <img
        className={styles.branchingLogicIcon}
        alt=""
        src="/branching-logic@2x.png"
      />
      <div className={styles.div}>
        <img className={styles.imageIcon} alt="" src="/image@2x.png" />
        <div className={styles.ceramicInstallation}>ceramic installation</div>
        <div className={styles.expertCeramicInstallation}>
          Expert ceramic installation, enhancing spaces with durability and
          style
        </div>
      </div>
      <FrameComponent />
      <ConnectionPoint />
      <section className={styles.dataMerger}>
        <Filter />
        <GroupComponent1 />
      </section>
      <ShapeSet />
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <GroupComponent />
    </div>
  );
};

export default DesktopMain;
