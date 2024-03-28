import "./MapsFullMap.css";

const MapsFullMap = () => {
  return (
    <div className="maps-full-map">
      <img
        className="maps-zoom-levels-2-city"
        alt=""
        src="/maps--zoom-levels--2-city@2x.png"
      />
      <div className="form-flow">
        <img
          className="controls-google-logo-color"
          loading="lazy"
          alt=""
          src="/controls--google-logo--color.svg"
        />
        <div className="controls-google-maps-byline">
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
        </div>
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
        <div className="controls">
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
        </div>
      </div>
    </div>
  );
};

export default MapsFullMap;
