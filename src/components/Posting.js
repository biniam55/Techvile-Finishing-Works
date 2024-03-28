import FrameComponent12 from "./FrameComponent12";
import "./Posting.css";

const Posting = () => {
  return (
    <form className="posting">
      <div className="forgot3">Forgot？</div>
      <section className="posting-inner">
        <div className="frame-parent7">
          <div className="dashboard-group">
            <div className="dashboard3">
              <div className="dashboard4">Dashboard</div>
              <div className="manage-post-wrapper">
                <div className="manage-post1">{`Manage Post  `}</div>
              </div>
            </div>
            <img
              className="frame-icon3"
              loading="lazy"
              alt=""
              src="/frame4.svg"
            />
          </div>
          <div className="frame-wrapper1">
            <div className="frame-parent8">
              <div className="frame-parent9">
                <div className="add-new-parent">
                  <div className="add-new">Add new</div>
                  <div className="forgot4">Forgot？</div>
                </div>
                <div className="input2">
                  <div className="input-text4">
                    <input
                      className="context3"
                      placeholder="Image"
                      type="text"
                    />
                    <div className="iconeye-wrapper2">
                      <img className="iconeye4" alt="" src="/iconeye.svg" />
                    </div>
                  </div>
                </div>
                <img
                  className="vector-icon"
                  loading="lazy"
                  alt=""
                  src="/vector2.svg"
                />
              </div>
              <FrameComponent12
                title="Title"
                forgot="Forgot？"
                contextPlaceholder="....."
                forgot1={false}
                frameDiv={false}
              />
            </div>
          </div>
          <div className="label-description-wrapper">
            <FrameComponent12
              title="Description(optional)"
              forgot="Forgot？"
              contextPlaceholder="....."
              forgot1={false}
              frameDiv={false}
              propAlignSelf="unset"
              propPadding="unset"
              propFlex="1"
              propHeight="unset"
              propWidth="68px"
              propWidth1="100%"
              propMinWidth="160px"
            />
          </div>
          <div className="button-container">
            <div className="upload-button-parent">
              <div className="upload-button">
                <img
                  className="upload-image-icon1"
                  loading="lazy"
                  alt=""
                  src="/upload-image1.svg"
                />
              </div>
              <img
                className="label-upload-icon"
                loading="lazy"
                alt=""
                src="/frame-300.svg"
              />
            </div>
          </div>
        </div>
      </section>
      <button className="button1">
        <div className="login-now1">Upload</div>
      </button>
    </form>
  );
};

export default Posting;
