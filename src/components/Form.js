import FrameComponent12 from "./FrameComponent12";
import "./Form.css";

const Form = () => {
  return (
    <form className="form2">
      <div className="welcome-back-container">
        <div className="welcome-back2">Welcome back</div>
        <h3 className="title28">Create an account</h3>
      </div>
      <div className="frame-parent47">
        <div className="frame-parent48">
          <div className="email-frame">
            <div className="email5">Email</div>
          </div>
          <div className="input-text-frame">
            <div className="input-text7">
              <div className="context6">abebe@gmail.com</div>
              <div className="iconeye-wrapper5">
                <img className="iconeye7" alt="" src="/iconeye.svg" />
              </div>
            </div>
          </div>
        </div>
        <FrameComponent12
          title="Password"
          contextPlaceholder="Enter your password"
          forgot1
          frameDiv
          propAlignSelf="stretch"
          propPadding="unset"
          propFlex="unset"
          propHeight="16px"
          propWidth="0px"
          propWidth1="calc(100% - 54px)"
          propMinWidth="93px"
        />
      </div>
      <div className="button-group">
        <button className="button6">
          <div className="login-now4">Create account</div>
        </button>
        <button className="button7">
          <img
            className="icongoogle-original1"
            alt=""
            src="/icongoogle--original1.svg"
          />
          <div className="login-now5">Continue with Google</div>
        </button>
        <div className="already-logged-in">
          <div className="already-have-an1">Already have an account ?</div>
          <div className="log-in1">Log in</div>
        </div>
      </div>
    </form>
  );
};

export default Form;
