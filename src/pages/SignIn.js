import React, { useState } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import "./SignIn.css";
import { Link } from "react-router-dom";
const SignIn = ({ handleSubmit, loggedIn, setLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

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
          <Link to={"/"}>
            <img
              className="frame-icon1"
              loading="lazy"
              alt=""
              src="/frame2.svg"
            />
          </Link>
          <div className="form-container">
            <form className="form1" onSubmit={handleSubmit}>
              <div className="welcome-back-group">
                <div className="welcome-back1">Welcome back</div>
                <h2 className="title1">Admin Login</h2>
              </div>
              <div className="frame-parent2">
                <div className="frame-parent3">
                  <div className="email-container">
                    <div className="email1">Email</div>
                  </div>
                  <div className="input-text-container">
                    <input
                      className="input-text2"
                      placeholder="admin@example.com"
                      type="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>
                <div className="frame-parent4">
                  <div className="password-group">
                    <div className="password1">Password</div>
                    <div className="forgot1" />
                  </div>
                  <div className="input1">
                    <input
                      className="input-text3"
                      placeholder="Enter your password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <div className="iconeye-wrapper1">
                      <img
                        className="iconeye3"
                        alt=""
                        src={showPassword ? "/iconeye.svg" : "/image.png"}
                        onClick={togglePasswordVisibility}
                      />
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
