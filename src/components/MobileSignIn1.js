import "./MobileSignIn1.css";

const MobileSignIn1 = () => {
  return (
    <section className="mobile-sign-in1">
      <div className="frame-wrapper18">
        <img className="frame-icon21" loading="lazy" alt="" src="/frame5.svg" />
      </div>
      <form className="form3">
        <div className="welcome-back-parent1">
          <div className="welcome-back3">Welcome back</div>
          <h3 className="title29">Login to your account</h3>
        </div>
        <div className="button-instance-parent">
          <div className="button-instance">
            <div className="account-signup">
              <div className="email6">Email</div>
            </div>
            <div className="input-text-wrapper1">
              <div className="input-text8">
                <div className="password-field">abebe@gmail.com</div>
                <div className="iconeye-wrapper6">
                  <img className="iconeye8" alt="" src="/iconeye.svg" />
                </div>
              </div>
            </div>
          </div>
          <div className="button-instance1">
            <div className="password-container">
              <div className="password2">Password</div>
              <div className="forgot7">Forgot？</div>
            </div>
            <div className="input5">
              <div className="input-text9">
                <input
                  className="context7"
                  placeholder="Enter your password"
                  type="text"
                />
                <div className="iconeye-wrapper7">
                  <img className="iconeye9" alt="" src="/iconeye.svg" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="button-parent1">
          <button className="button8">
            <div className="login-now6">Login now</div>
          </button>
          <div className="dont-have-an-account-parent">
            <div className="dont-have-an">Don't have an account?</div>
            <div className="sign-up1">Sign up</div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default MobileSignIn1;
