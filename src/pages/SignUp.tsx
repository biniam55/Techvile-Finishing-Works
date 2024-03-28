import { FunctionComponent } from "react";
import FrameComponent4 from "../components/FrameComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import styles from "./SignUp.module.css";

const SignUp: FunctionComponent = () => {
  return (
    <div className={styles.signUp}>
      <h1 className={styles.galleryWeHaveContainer}>
        <p className={styles.gallery}> Gallery</p>
        <p className={styles.weHaveSolutions}>
          We Have Solutions for All Your Space Related Issues!
        </p>
      </h1>
      <section className={styles.signUpInner}>
        <div className={styles.frameParent}>
          <img
            className={styles.frameIcon}
            loading="lazy"
            alt=""
            src="/frame2.svg"
          />
          <div className={styles.formWrapper}>
            <form className={styles.form}>
              <div className={styles.welcomeBackParent}>
                <div className={styles.welcomeBack}>Welcome back</div>
                <h2 className={styles.title}>Create an account</h2>
              </div>
              <div className={styles.frameGroup}>
                <div className={styles.frameContainer}>
                  <div className={styles.emailWrapper}>
                    <div className={styles.email}>Email</div>
                  </div>
                  <div className={styles.inputTextWrapper}>
                    <div className={styles.inputText}>
                      <div className={styles.context}>abebe@gmail.com</div>
                      <div className={styles.iconeyeWrapper}>
                        <img
                          className={styles.iconeye}
                          alt=""
                          src="/iconeye.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.frameDiv}>
                  <div className={styles.passwordParent}>
                    <div className={styles.password}>Password</div>
                    <div className={styles.forgot} />
                  </div>
                  <div className={styles.input}>
                    <div className={styles.inputText1}>
                      <div className={styles.context1}>Enter your password</div>
                      <div className={styles.iconeyeContainer}>
                        <img
                          className={styles.iconeye1}
                          alt=""
                          src="/iconeye.svg"
                        />
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
