import FrameComponent11 from "../components/FrameComponent11";
import AllPostsContainer from "../components/AllPostsContainer";
import FrameComponent10 from "../components/FrameComponent10";
import "./Dashboard1.css";

const Dashboard = () => {
  return (
    <div className="dashboard1">
      <header className="dashboard-inner">
        <div className="dashboard-parent">
          <h2 className="dashboard2">Dashboard</h2>
          <img
            className="dashboard-title-icon"
            loading="lazy"
            alt=""
            src="/frame4.svg"
          />
        </div>
      </header>
      <img className="dashboard-child" alt="" src="/rectangle-16.svg" />
      <FrameComponent11 />
      <div className="dashboard-inner1">
        <div className="user-profile-icon-parent">
          <div className="user-profile-icon">
            <div className="vector-parent">
              <img className="rectangle-icon" alt="" src="/rectangle-15.svg" />
              <img
                className="frame-icon2"
                loading="lazy"
                alt=""
                src="/frame-22.svg"
              />
            </div>
          </div>
          <div className="service-parent">
            <h3 className="service">Service</h3>
            <div className="empty-label-wrapper">
              <div className="empty-label">3</div>
            </div>
          </div>
        </div>
      </div>
      <AllPostsContainer />
      <div className="posts-list">
        <h2 className="all-posts">All Posts</h2>
      </div>
      <FrameComponent10 />
    </div>
  );
};

export default Dashboard;
