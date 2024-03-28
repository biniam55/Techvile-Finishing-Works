import { FunctionComponent } from "react";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  return (
    <section className={styles.rectangleParent}>
      <footer className={styles.rectangle} />
      <div className={styles.reflectionReflector} />
      <div className={styles.shadowShaper}>
        <div className={styles.blurBuilder}>
          <div className={styles.brightnessBooster}>
            <div className={styles.contrastController}>
              <div className={styles.saturationSifter}>
                <div className={styles.hueHueger}>
                  <h1 className={styles.aboutUs}>About Us</h1>
                  <h2 className={styles.craftingExcellenceThroughContainer}>
                    <p className={styles.craftingExcellenceThrough}>
                      Crafting excellence through precision and passion, we
                      redefine spaces with our expert finishing works
                    </p>
                  </h2>
                </div>
                <div className={styles.opacityOptimizer}>
                  <h1 className={styles.contactInfo}>Contact Info</h1>
                  <div className={styles.dataContainer}>
                    <h2 className={styles.rdFloorSomewhere}>
                      3rd Floor somewhere, Addis Ababa
                    </h2>
                    <div className={styles.div}>0965325142</div>
                    <h2 className={styles.fyngmailcom}>fyn@gmail.com</h2>
                  </div>
                </div>
              </div>
              <div className={styles.imageLinkList}>
                <h1 className={styles.ourCompany}>Our Company</h1>
                <div className={styles.testimonialsParent}>
                  <h2 className={styles.testimonials}>Testimonials</h2>
                  <div className={styles.radioButtonRow}>
                    <h2 className={styles.contact}>{`Contact     `}</h2>
                    <h2 className={styles.gallery}>Gallery</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.tableDataCluster}>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/frame-1.svg"
            />
            <img
              className={styles.frameIcon1}
              loading="lazy"
              alt=""
              src="/frame-2.svg"
            />
            <img
              className={styles.frameIcon2}
              loading="lazy"
              alt=""
              src="/frame-3.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.listItemBunch}>
        <div className={styles.sliderControlBank} />
        <div className={styles.checkboxGathering}>
          <h2 className={styles.copyright2024}>
            Copyright © 2024 FYN finishing work
          </h2>
        </div>
      </div>
    </section>
  );
};

export default GroupComponent;
