import "./FrameComponent4.css";
// import {
//   GoogleLogin,
//   GoogleLoginResponse,
//   GoogleLoginResponseOffline,
// } from "react-google-login";
const FrameComponent4 = () => {
  // const responseGoogle = (response) => {
  //   console.log(response);
  // };
  // const responseGoogleError = (error) => {
  //   console.error(error);
  // };
  return (
    <div className="button-parent">
      <button className="button3">
        <div className="login-now2">Login</div>
      </button>
      <div className="#">
        {" "}
        {/* <GoogleLogin
          clientId="YOUR_GOOGLE_CLIENT_ID"
          buttonText="Continue with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogleError}
          cookiePolicy={"single_host_origin"}
          className={"button4"}
        /> */}
      </div>

      <div className="already-have-an-account-parent">
        <div className="already-have-an">Already have an account ?</div>
        <div className="log-in">Log in</div>
      </div>
    </div>
  );
};

export default FrameComponent4;
