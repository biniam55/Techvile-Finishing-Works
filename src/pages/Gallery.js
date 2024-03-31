import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import GroupComponent2 from "../components/GroupComponent2";
import "./Gallery.css";
import FrameComponent from "../components/FrameComponent";
import GroupComponent from "../components/GroupComponent";

const Gallery = () => {
  return (
    <div className="gallery">
      <FrameComponent3 />
      <FrameComponent />
      <FrameComponent2 />
      <FrameComponent1 />
      {/* <GroupComponent2 /> */}
      <GroupComponent />
      <div className="rectangle2" />
    </div>
  );
};

export default Gallery;
