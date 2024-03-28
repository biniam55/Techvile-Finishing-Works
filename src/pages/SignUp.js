import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <h1 className="gallery-we-have-container">
        <p className="gallery1"> Gallery</p>
        <p className="we-have-solutions">
          We Have Solutions for All Your Space Related Issues!
        </p>
      </h1>
      <section className="sign-up-inner">
        <div className="frame-parent">
          <img className="frame-icon" loading="lazy" alt="" src="/frame2.svg" />
          <div className="form-wrapper">
            <form className="form">
              <div className="welcome-back-parent">
                <div className="welcome-back">Welcome back</div>
                <h2 className="title">Create an account</h2>
              </div>
              <div className="frame-group">
                <div className="frame-container">
                  <div className="email-wrapper">
                    <div className="email">Email</div>
                  </div>
                  <div className="input-text-wrapper">
                    <div className="input-text">
                      <div className="context">abebe@gmail.com</div>
                      <div className="iconeye-wrapper">
                        <img className="iconeye" alt="" src="/iconeye.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-div">
                  <div className="password-parent">
                    <div className="password">Password</div>
                    <div className="forgot" />
                  </div>
                  <div className="input">
                    <div className="input-text1">
                      <div className="context1">Enter your password</div>
                      <div className="iconeye-container">
                        <img className="iconeye1" alt="" src="/iconeye.svg" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <FrameComponent4 />
            </form>
          </div>
        </div>
      </section>
      <GroupComponent3 />
    </div>
  );
};

export default SignUp;
