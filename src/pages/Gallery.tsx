import { FunctionComponent } from "react";
import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import styles from "./Gallery.module.css";

const Gallery: FunctionComponent = () => {
  return (
    <div className={styles.gallery}>
      <FrameComponent3 />
      <FrameComponent2 />
      <FrameComponent1 />
      <GroupComponent2 />
      <div className={styles.rectangle} />
    </div>
  );
};

export default Gallery;
