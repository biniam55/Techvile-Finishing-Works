import SideMenu2 from "../components/SideMenu2";
import Product from "../components/Product";
import "./Dashboard2.css";

const Dashboard = () => {
  return (
    <div className="dashboard5">
      <div className="gallery-we-have-container4">
        <p className="gallery5"> Gallery</p>
        <p className="we-have-solutions3">
          We Have Solutions for All Your Related Issues!
        </p>
      </div>
      <main className="dashboard-httpsbitlyavi2">
        <SideMenu2 />
        <section className="anchor-point">
          <div className="anchor-point-inner">
            <div className="frame-parent11">
              <div className="frame-parent12">
                <div className="hello-abebe-wrapper">
                  <h2 className="hello-abebe">Hello Abebe 👋🏼,</h2>
                </div>
                <div className="search">
                  <div className="search-child" />
                  <img className="search-1-icon" alt="" src="/search-1.svg" />
                  <input
                    className="search-item"
                    placeholder="Search"
                    type="text"
                  />
                </div>
              </div>
              <div className="vector-group">
                <img className="frame-child4" alt="" src="/rectangle-15.svg" />
                <div className="frame-wrapper3">
                  <div className="service-group">
                    <div className="service1">Service</div>
                    <div className="div4">3</div>
                  </div>
                </div>
                <div className="line-wrapper">
                  <div className="line-div" />
                </div>
                <div className="frame-wrapper4">
                  <img className="frame-child5" alt="" src="/group-10.svg" />
                </div>
                <div className="shape-set">
                  <div className="contacts-parent">
                    <div className="contacts">Contacts</div>
                    <div className="div5">21</div>
                    <div className="icon-library">
                      <img
                        className="icon-library-child"
                        loading="lazy"
                        alt=""
                        src="/ellipse-62.svg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Product />
        </section>
      </main>
      <img
        className="vuesaxlinearprofile-2user-icon"
        loading="lazy"
        alt=""
        src="/vuesaxlinearprofile2user1.svg"
      />
      <img
        className="alignment-engine-icon"
        loading="lazy"
        alt=""
        src="/frame-23.svg"
      />
    </div>
  );
};

export default Dashboard;
