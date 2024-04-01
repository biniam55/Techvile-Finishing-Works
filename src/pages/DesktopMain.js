import FrameComponent from "../components/FrameComponent";
import ConnectionPoint from "../components/ConnectionPoint";
import Filter from "../components/Filter";
import GroupComponent1 from "../components/GroupComponent1";
import ShapeSet from "../components/ShapeSet";
import GroupComponent from "../components/GroupComponent";
import Header from "../components/Header";
import "./DesktopMain.css";
import { useEffect, useState } from "react";

const DesktopMain = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/branching-logic@2x.png",
    "/ceramic.jpg",
    "\eb38a4dce4071ee8fde4cf896c56be4b.jpg"
  ];
  useEffect(() => {
    const timeout = setTimeout(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [currentImageIndex, images.length]); 

  const handleSwipe = () => {
    const nextIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(nextIndex);
  };
  const imageStyle = {
    opacity: 1,
    transition: "opacity 0.5s ease-in-out" 
  };

  return (
    <div className="desktop-main">
      
      <img
        className="branching-logic-icon"
        alt=""
        src={images[currentImageIndex]}
        onClick={handleSwipe} 
        style={imageStyle} 
      />
      {/* <div className="div">
        <img className="image-icon" alt="" src="/image@2x.png" />
        <div className="ceramic-installation">ceramic installation</div>
        <div className="expert-ceramic-installation">
          Expert ceramic installation, enhancing spaces with durability and
          style
        </div>
      </div> */}
      <FrameComponent />
      <Header/>
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
