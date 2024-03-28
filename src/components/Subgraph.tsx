import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./Subgraph.module.css";

export type SubgraphType = {
  star2?: string;
  star3?: string;
  star4?: string;
  star5?: string;
  star6?: string;
  iWillLetMyMumKnowAboutThi?: string;
  samri?: string;
  ellipse1?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinHeight?: CSSProperties["minHeight"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
  propLineHeight?: CSSProperties["lineHeight"];
  propPadding1?: CSSProperties["padding"];
  propMinWidth?: CSSProperties["minWidth"];
};

const Subgraph: FunctionComponent<SubgraphType> = ({
  star2,
  star3,
  star4,
  star5,
  star6,
  iWillLetMyMumKnowAboutThi,
  samri,
  ellipse1,
  propFlex,
  propMinHeight,
  propAlignSelf,
  propPadding,
  propLineHeight,
  propPadding1,
  propMinWidth,
}) => {
  const subgraphStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minHeight: propMinHeight,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinHeight, propAlignSelf]);

  const starsStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const iWillLetStyle: CSSProperties = useMemo(() => {
    return {
      lineHeight: propLineHeight,
    };
  }, [propLineHeight]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const samriStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.subgraph} style={subgraphStyle}>
      <div className={styles.starsWrapper}>
        <div className={styles.stars} style={starsStyle}>
          <img
            className={styles.starsChild}
            loading="lazy"
            alt=""
            src={star2}
          />
          <img className={styles.starsItem} loading="lazy" alt="" src={star3} />
          <img
            className={styles.starsInner}
            loading="lazy"
            alt=""
            src={star4}
          />
          <img className={styles.starIcon} alt="" src={star5} />
          <img className={styles.starsChild1} alt="" src={star6} />
        </div>
      </div>
      <h1 className={styles.iWillLet} style={iWillLetStyle}>
        {iWillLetMyMumKnowAboutThi}
      </h1>
      <div className={styles.frameParent} style={frameDivStyle}>
        <div className={styles.samriWrapper}>
          <h3 className={styles.samri} style={samriStyle}>
            {samri}
          </h3>
        </div>
        <img
          className={styles.logo5ff3c18e1Icon}
          loading="lazy"
          alt=""
          src="/logo5ff3c18e-1.svg"
        />
      </div>
      <img
        className={styles.subgraphChild}
        loading="lazy"
        alt=""
        src={ellipse1}
      />
    </div>
  );
};

export default Subgraph;
