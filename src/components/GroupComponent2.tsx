import { FunctionComponent } from "react";
import styles from "./GroupComponent2.module.css";

const GroupComponent2: FunctionComponent = () => {
  return (
    <footer className={styles.rectangleParent}>
      <div className={styles.rectangle} />
      <div className={styles.rectangle1} />
      <div className={styles.frameParent}>
        <div className={styles.rectangleGroup}>
          <div className={styles.rectangle2} />
          <div className={styles.frameWrapper}>
            <div className={styles.ourCompanyTitleParent}>
              <div className={styles.ourCompanyTitle}>
                <div className={styles.frameGroup}>
                  <div className={styles.frameContainer}>
                    <div className={styles.aboutUsParent}>
                      <h2 className={styles.aboutUs}>About Us</h2>
                      <div
                        className={styles.craftingExcellenceThroughContainer}
                      >
                        <p className={styles.craftingExcellenceThrough}>
                          Crafting excellence through precision and passion, we
                          redefine spaces with our expert finishing works
                        </p>
                      </div>
                    </div>
                    <div className={styles.contactInfoParent}>
                      <h2 className={styles.contactInfo}>Contact Info</h2>
                      <div className={styles.rdFloorSomewhereAddisAbabParent}>
                        <div className={styles.rdFloorSomewhere}>
                          3rd Floor somewhere, Addis Ababa
                        </div>
                        <div className={styles.div}>0965325142</div>
                        <div className={styles.fyngmailcom}>fyn@gmail.com</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ourCompanyParent}>
                    <h2 className={styles.ourCompany}>Our Company</h2>
                    <div className={styles.testimonialsCaption}>
                      <div className={styles.testimonials}>Testimonials</div>
                      <div className={styles.contactParent}>
                        <div className={styles.contact}>{`Contact     `}</div>
                        <div className={styles.gallery}>Gallery</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameDiv}>
                <img
                  className={styles.frameIcon}
                  loading="lazy"
                  alt=""
                  src="/frame1.svg"
                />
                <img
                  className={styles.frameIcon1}
                  loading="lazy"
                  alt=""
                  src="/frame-11.svg"
                />
                <img
                  className={styles.frameIcon2}
                  loading="lazy"
                  alt=""
                  src="/frame-21.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.rectangle3} />
        </div>
        <div className={styles.copyright2024FynFinishingWrapper}>
          <div className={styles.copyright2024}>
            Copyright © 2024 FYN finishing work
          </div>
        </div>
      </div>
    </footer>
  );
};

export default GroupComponent2;
