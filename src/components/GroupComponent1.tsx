import { FunctionComponent } from "react";
import Subgraph from "./Subgraph";
import styles from "./GroupComponent1.module.css";

const GroupComponent1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.frameChild} />
      <div className={styles.inputSocket}>
        <div className={styles.outputSocket}>
          <h1 className={styles.whatOurClients}>What Our Clients Say</h1>
          <div className={styles.subgraphWrapper}>
            <Subgraph
              star2="/star-2.svg"
              star3="/star-3.svg"
              star4="/star-4.svg"
              star5="/star-5.svg"
              star6="/star-6.svg"
              iWillLetMyMumKnowAboutThi="I will let my mum know about this, she could really make use of software! Very easy to use. Since I invested in software I made over 100,000 dollars profits. I just can't get enough of software. I want to get a T-Shirt with software on it so I can show it off to everyone."
              samri="Samri"
              ellipse1="/ellipse-1@2x.png"
            />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <Subgraph
          star2="/star-2.svg"
          star3="/star-3.svg"
          star4="/star-4.svg"
          star5="/star-5.svg"
          star6="/star-6.svg"
          iWillLetMyMumKnowAboutThi="Website design did exactly what you said it does. Just what I was looking for. Nice work on your website design."
          samri="Robel Y"
          ellipse1="/ellipse-1-1@2x.png"
          propFlex="unset"
          propMinHeight="257px"
          propAlignSelf="stretch"
          propPadding="unset"
          propLineHeight="unset"
          propPadding1="unset"
          propMinWidth="52px"
        />
        <Subgraph
          star2="/star-2-2.svg"
          star3="/star-3-2.svg"
          star4="/star-4-2.svg"
          star5="/star-5-2.svg"
          star6="/star-6-2.svg"
          iWillLetMyMumKnowAboutThi="If you want real marketing that works and effective implementation - mobile app's got you covered."
          samri="Sol D"
          ellipse1="/ellipse-1-2@2x.png"
          propFlex="unset"
          propMinHeight="257px"
          propAlignSelf="stretch"
          propPadding="unset"
          propLineHeight="unset"
          propPadding1="unset"
          propMinWidth="36px"
        />
      </div>
    </div>
  );
};

export default GroupComponent1;
