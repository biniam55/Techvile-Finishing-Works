import { FunctionComponent } from "react";
import ErrorHandler from "./ErrorHandler";
import styles from "./Filter.module.css";

const Filter: FunctionComponent = () => {
  return (
    <div className={styles.filter}>
      <div className={styles.sort}>
        <div className={styles.search}>
          <h1 className={styles.ourGallery}>Our Gallery</h1>
        </div>
        <div className={styles.combiner}>
          <div className={styles.splitter}>
            <div className={styles.transformer}>
              <img
                className={styles.imageIcon}
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className={styles.processorChain}>
              <img
                className={styles.imageIcon1}
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
              <div className={styles.outputDispenser}>
                <img
                  className={styles.outputDispenserChild}
                  loading="lazy"
                  alt=""
                  src="/group-303@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.ruleBuilder}>
            <div className={styles.decisionMaker}>
              <div className={styles.logicOperator}>
                <ErrorHandler title="Transparent Pricing" />
                <ErrorHandler
                  title="Diverse Portfolio"
                  groupIconAlignSelf="stretch"
                  groupIconFlex="unset"
                  propMargin="0"
                  propMargin1="0"
                  propMargin2="0"
                  propMargin3="0"
                  propMargin4="0"
                  propMargin5="0"
                />
                <div className={styles.priorityQueue}>
                  <ErrorHandler
                    title="Experienced Team"
                    groupIconAlignSelf="unset"
                    groupIconFlex="1"
                    propMargin="0"
                    propMargin1="0"
                    propMargin2="0"
                    propMargin3="0"
                    propMargin4="0"
                    propMargin5="0"
                  />
                </div>
              </div>
              <div className={styles.decisionMakerInner}>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.viewGallery}>View Gallery</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
