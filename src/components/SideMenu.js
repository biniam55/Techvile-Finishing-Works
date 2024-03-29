import { Link } from "react-router-dom";
import "./SideMenu.css";

const SideMenu = () => {
  return (
    <div className="side-menu1">
      <div className="side-menu-item" />
      <div className="dashboard-f-r-a-m-e-parent">
        <div className="dashboard-f-r-a-m-e">
          <img
            className="setting-1-icon1"
            loading="lazy"
            alt=""
            src="/setting-1-1.svg"
          />
        </div>
        <h2 className="dashboard8">Dashboard</h2>
        <div className="v01-container">
          <div className="v011">v.01</div>
        </div>
      </div>
      <div className="side-menu-inner1">
        <div className="icon-24-outline-key-squa-group">
          <img
            className="icon-24-outline-key-squa1"
            loading="lazy"
            alt=""
            src="/icon--24--outline--keysquare-1.svg"
          />
          <div className="manage-posts-dashboard">
            <Link to={"/dashboard2"}><div className="dashboard9">Dashboard</div></Link>
          </div>
        </div>
      </div>
      <div className="frame-parent32">
        <div className="rectangle-parent6">
          <div className="frame-child11" />
          <img className="frame-icon17" alt="" src="/frame3.svg" />
          <div className="manage-posts-wrapper">
            <div className="manage-posts">Manage Posts</div>
          </div>
        </div>
        <div className="frame-wrapper11">
          <div className="frame-parent33">
            <div className="frame-wrapper12">
              <img
                className="frame-icon18"
                loading="lazy"
                alt=""
                src="/frame3.svg"
              />
            </div>
            <div className="gallery15">Gallery</div>
          </div>
        </div>
      </div>
      <div className="frame-parent34">
        <div className="ellipse-group">
          <img className="frame-child12" alt="" src="/ellipse-8-1@2x.png" />
          <div className="frame-wrapper13">
            <div className="frame-parent35">
              <div className="abebe-container">
                <div className="abebe1">Abebe</div>
              </div>
              <div className="admin1">Admin</div>
            </div>
          </div>
        </div>
        <div className="chevron-down-2-container">
          <img
            className="chevron-down-2-icon2"
            alt=""
            src="/chevrondown-2-1.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
