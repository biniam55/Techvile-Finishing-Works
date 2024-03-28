import { FunctionComponent } from "react";
import SideMenu1 from "../components/SideMenu1";
import SideMenu from "../components/SideMenu";
import FrameComponent5 from "../components/FrameComponent5";
import styles from "./Dashboard.module.css";

const Dashboard: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.galleryWeHaveContainer}>
        <p className={styles.gallery}> Gallery</p>
        <p className={styles.weHaveSltions}>
          We Have Sltions for All Your Related Issues!
        </p>
      </div>
      <main className={styles.dashboardHttpsbitlyavi}>
        <SideMenu1 />
        <div className={styles.postImageWrapper}>
          <h2 className={styles.postImage}>{`Post Image `}</h2>
        </div>
        <div className={styles.dashboardHttpsbitlyaviInner}>
          <img className={styles.frameChild} alt="" src="/ellipse-62.svg" />
        </div>
      </main>
      <div className={styles.dashboardHttpsbitlyavi1}>
        <SideMenu />
        <div className={styles.forgot}>Forgot？</div>
        <div className={styles.dashboardHttpsbitlyaviChild}>
          <div className={styles.managePostParent}>
            <h2 className={styles.managePost}>{`Manage Post  `}</h2>
            <div className={styles.frameWrapper}>
              <div className={styles.frameParent}>
                <div className={styles.vectorWrapper}>
                  <img
                    className={styles.frameItem}
                    loading="lazy"
                    alt=""
                    src="/ellipse-62.svg"
                  />
                </div>
                <div className={styles.uploadImageButtonWrapper}>
                  <div className={styles.uploadImageButton}>
                    <div className={styles.loginNowButton}>
                      <FrameComponent5 title="Title" context="....." />
                      <FrameComponent5
                        title="Description(optional)"
                        context="....."
                        propAlignSelf="stretch"
                        propPosition="unset"
                        propTop="unset"
                        propLeft="unset"
                        propWidth="unset"
                      />
                    </div>
                    <div className={styles.frameGroup}>
                      <div className={styles.uploadImageWrapper}>
                        <img
                          className={styles.uploadImageIcon}
                          loading="lazy"
                          alt=""
                          src="/upload-image.svg"
                        />
                      </div>
                      <img
                        className={styles.frameInner}
                        loading="lazy"
                        alt=""
                        src="/frame-300.svg"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.buttonWrapper}>
                  <div className={styles.button}>
                    <div className={styles.loginNow}>Upload</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FrameComponent5
        title="Add new"
        context="Image"
        propAlignSelf="unset"
        propPosition="absolute"
        propTop="237px"
        propLeft="487px"
        propWidth="555px"
      />
      <img
        className={styles.chevronDown2Icon}
        loading="lazy"
        alt=""
        src="/chevrondown-2-2.svg"
      />
    </div>
  );
};

export default Dashboard;
