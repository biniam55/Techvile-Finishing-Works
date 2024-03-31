import { Link } from "react-router-dom";
import Component from "./Component";
import "./ConnectionPoint.css";

const ConnectionPoint = () => {
  return (
    <section className="connection-point Services" id="Services">
      <div className="frame-parent13">
        <div className="fyn-group">
          <h1 className="fyn1"></h1>
          <div className="data-sorter">
            {/* <div className="logic-operator">
              <header className="signal-receiver">
              <h1 className="fyn1">FYN</h1>
                <div className="signal-transmitter">
                  <h1 className="home">HOME</h1>
                </div>
                <div className="signal-transmitter1">
                  <Link to="/gallery"><h1 className="gallery6">GALLERY</h1></Link>
                </div>
                <h1 className="service2">SERVICE</h1>
                <h1 className="testimonials">TESTIMONIALS</h1>
                
                <Link to={"/dashboard"}><h1 className="testimonials">DASHBOARD</h1></Link>
              </header>
            </div> */}
            <div className="value-calculator">
              <div className="flow-controller">
                <div className="data-visualizer">
                  <div className="logic-visualizer" />
                  <div className="custom-component-parent">
                    <div className="custom-component" />
                    <Link to={"/gallery"}><div className="gallery7">Gallery</div></Link>
                  </div>
                </div>
                <div className="data-linker">
                  <img
                    className="alignment-helper-icon"
                    loading="lazy"
                    alt=""
                    src="/vector-4.svg"
                  />
                </div>
              </div>
            </div>
            <h1 className="our-service">Our Service</h1>
          </div>
        </div>
        <div className="color-manager-parent">
          <div className="color-manager">
            <Component
              image="/image-1@2x.png"
              painting="Painting "
              precisionPaintingServiceT="Precision painting service: transforming spaces with vibrant colors and expertise."
            />
            <div className="rotation-control">
              <div className="alignment-tool">
                <img
                  className="image-icon6"
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <div className="layer-organizer-wrapper">
                  <div className="layer-organizer">
                    <h2 className="marble-and-granite1">marble and granite</h2>
                    <h3 className="exquisite-marble-and1">
                      Exquisite marble and granite craftsmanship, elevating
                      spaces with timeless beauty.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <Component
              image="/image@2x.png"
              painting="ceramic installation"
              precisionPaintingServiceT="Expert ceramic installation, enhancing spaces with durability and style"
              propHeight="308px"
              propWidth="222px"
            />
          </div>
          <div className="frame-wrapper5">
            <img
              className="frame-child7"
              loading="lazy"
              alt=""
              src="/group-316.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConnectionPoint;
