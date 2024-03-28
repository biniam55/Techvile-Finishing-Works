import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import "./SignIn.css";

const SignIn = () => {
  return (
    <div className="sign-in">
      <h1 className="gallery-we-have-container1">
        <p className="gallery2"> Gallery</p>
        <p className="we-have-solutions1">
          We Have Solutions for All Your Space Related Issues!
        </p>
      </h1>
      <section className="sign-in-inner">
        <div className="frame-parent1">
          <img
            className="frame-icon1"
            loading="lazy"
            alt=""
            src="/frame2.svg"
          />
          <div className="form-container">
            <form className="form1">
              <div className="welcome-back-group">
                <div className="welcome-back1">Welcome back</div>
                <h2 className="title1">Create an account</h2>
              </div>
              <div className="frame-parent2">
                <div className="frame-parent3">
                  <div className="email-container">
                    <div className="email1">Email</div>
                  </div>
                  <div className="input-text-container">
                    <div className="input-text2">
                      <div className="login-now-button">abebe@gmail.com</div>
                      <div className="iconeye-frame">
                        <img className="iconeye2" alt="" src="/iconeye.svg" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="frame-parent4">
                  <div className="password-group">
                    <div className="password1">Password</div>
                    <div className="forgot1" />
                  </div>
                  <div className="input1">
                    <div className="input-text3">
                      <div className="context2">Enter your password</div>
                      <div className="iconeye-wrapper1">
                        <img className="iconeye3" alt="" src="/iconeye.svg" />
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

export default SignIn;
