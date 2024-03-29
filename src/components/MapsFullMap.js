import "./MapsFullMap.css";

const MapsFullMap = () => {
  return (
    <div className="maps-full-map">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.473747961054!2d38.79982797501057!3d9.020474489122368!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b855cd643a691%3A0x5ce3922436b4f99a!2sMegenagna!5e0!3m2!1sen!2set!4v1711717051388!5m2!1sen!2set"
        width="600"
        height="450"
        style={{ border: '0' }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
      <div className="form-flow">
        {/* <img
          className="controls-google-logo-color"
          loading="lazy"
          alt=""
          src="/controls--google-logo--color.svg"
        /> */}
        {/* <div className="controls-google-maps-byline">
          <div className="color-canvas">
            <div className="color-canvas-child" />
            <div className="map-data-2019">Map data @2019 Google</div>
          </div>
          <div className="color-canvas1">
            <div className="color-canvas-item" />
            <div className="terms-of-use">Terms of Use</div>
          </div>
          <div className="color-canvas2">
            <div className="color-canvas-inner" />
            <div className="report-a-map">Report a map error</div>
          </div>
        </div> */}
      </div>
      <div className="align-assistant">
        <div className="controls-map-type">
          <div className="eraser" />
          <div className="blender">
            <div className="map1">Map</div>
          </div>
          <div className="pen-palette" />
          <div className="blender1">
            <div className="satellite">Satellite</div>
          </div>
        </div>
        {/* <div className="controls">
          <img
            className="controls-zoom-controls"
            loading="lazy"
            alt=""
            src="/controls--zoom-controls@2x.png"
          />
          <div className="controls-street-view">
            <div className="distribution-dispenser" />
            <img
              className="pegman-offscreen-2x-icon"
              alt=""
              src="/pegmanoffscreen2x@2x.png"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default MapsFullMap;
