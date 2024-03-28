import SideMenu1 from "../components/SideMenu1";
import SideMenu from "../components/SideMenu";
import FrameComponent5 from "../components/FrameComponent5";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="gallery-we-have-container2">
        <p className="gallery3"> Gallery</p>
        <p className="we-have-sltions">
          We Have Sltions for All Your Related Issues!
        </p>
      </div>
      <main className="dashboard-httpsbitlyavi">
        <SideMenu1 />
        <div className="post-image-wrapper">
          <h2 className="post-image">{`Post Image `}</h2>
        </div>
        <div className="dashboard-httpsbitlyavi-inner">
          <img className="frame-child" alt="" src="/ellipse-62.svg" />
        </div>
      </main>
      <div className="dashboard-httpsbitlyavi1">
        <SideMenu />
        <div className="forgot2">Forgot？</div>
        <div className="dashboard-httpsbitlyavi-child">
          <div className="manage-post-parent">
            <h2 className="manage-post">{`Manage Post  `}</h2>
            <div className="frame-wrapper">
              <div className="frame-parent5">
                <div className="vector-wrapper">
                  <img
                    className="frame-item"
                    loading="lazy"
                    alt=""
                    src="/ellipse-62.svg"
                  />
                </div>
                <div className="upload-image-button-wrapper">
                  <div className="upload-image-button">
                    <div className="login-now-button1">
                      <FrameComponent5 title="Title" context="....." />
                      <FrameComponent5
                        title="Description(optional)"
                        context="....."
                        propAlignSelf="stretch"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propWidth="unset"
                      />
                    </div>
                    <div className="frame-parent6">
                      <div className="upload-image-wrapper">
                        <img
                          className="upload-image-icon"
                          loading="lazy"
                          alt=""
                          src="/upload-image.svg"
                        />
                      </div>
                      <img
                        className="frame-inner"
                        loading="lazy"
                        alt=""
                        src="/frame-300.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className="button-wrapper">
                  <div className="button">
                    <div className="login-now">Upload</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5
        title="Add new"
        context="Image"
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="237px"
        propLeft="487px"
        propWidth="555px"
      />
      <img
        className="chevron-down-2-icon"
        loading="lazy"
        alt=""
        src="/chevrondown-2-2.svg"
      />
    </div>
  );
};

export default Dashboard;
