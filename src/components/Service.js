import React from 'react'
import "./Service.css"
function Service() {
  return (
    <div className='datasorter'>
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
  )
}

export default Service