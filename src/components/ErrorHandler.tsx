import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ErrorHandler.module.css";

export type ErrorHandlerType = {
  title?: string;

  /** Style props */
  groupIconAlignSelf?: CSSProperties["alignSelf"];
  groupIconFlex?: CSSProperties["flex"];
  propMargin?: CSSProperties["margin"];
  propMargin1?: CSSProperties["margin"];
  propMargin2?: CSSProperties["margin"];
  propMargin3?: CSSProperties["margin"];
  propMargin4?: CSSProperties["margin"];
  propMargin5?: CSSProperties["margin"];
};

const ErrorHandler: FunctionComponent<ErrorHandlerType> = ({
  title,
  groupIconAlignSelf,
  groupIconFlex,
  propMargin,
  propMargin1,
  propMargin2,
  propMargin3,
  propMargin4,
  propMargin5,
}) => {
  const errorHandlerStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: groupIconAlignSelf,
      flex: groupIconFlex,
    };
  }, [groupIconAlignSelf, groupIconFlex]);

  const titleStyle: CSSProperties = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const title1Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const title2Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  const title3Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin3,
    };
  }, [propMargin3]);

  const title4Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin4,
    };
  }, [propMargin4]);

  const title5Style: CSSProperties = useMemo(() => {
    return {
      margin: propMargin5,
    };
  }, [propMargin5]);

  return (
    <div className={styles.errorHandler} style={errorHandlerStyle}>
      <div className={styles.list}>
        <div className={styles.interactionState} />
        <div className={styles.listItemContainer}>
          <div className={styles.leadingItem}>
            <img
              className={styles.emojiSymbolsIcon}
              alt=""
              src="/emoji-symbols.svg"
            />
          </div>
          <div className={styles.textContainer}>
            <div className={styles.overline} />
            <div className={styles.title} style={titleStyle}>
              Diverse Portfolio
            </div>
            <div className={styles.secondaryText}>Secondary Text</div>
          </div>
          <div className={styles.trailingItem}>
            <img
              className={styles.chevronRightIcon}
              alt=""
              src="/chevron-right.svg"
            />
          </div>
        </div>
        <div className={styles.divider}>
          <div className={styles.divider1} />
        </div>
      </div>
      <div className={styles.map}>
        <div className={styles.list1}>
          <div className={styles.interactionState1} />
          <div className={styles.listItemContainer1}>
            <div className={styles.leadingItem1}>
              <img
                className={styles.emojiSymbolsIcon1}
                alt=""
                src="/emoji-symbols.svg"
              />
            </div>
            <div className={styles.textContainer1}>
              <div className={styles.overline1} />
              <div className={styles.title1} style={title1Style}>
                Diverse Portfolio
              </div>
              <div className={styles.secondaryText1}>Secondary Text</div>
            </div>
            <div className={styles.trailingItem1}>
              <img
                className={styles.chevronRightIcon1}
                alt=""
                src="/chevron-right.svg"
              />
            </div>
          </div>
          <div className={styles.divider2}>
            <div className={styles.divider3} />
          </div>
        </div>
        <div className={styles.circuit}>
          <div className={styles.list2}>
            <div className={styles.interactionState2} />
            <div className={styles.listItemContainer2}>
              <div className={styles.leadingItem2}>
                <img
                  className={styles.emojiSymbolsIcon2}
                  alt=""
                  src="/emoji-symbols.svg"
                />
              </div>
              <div className={styles.textContainer2}>
                <div className={styles.overline2} />
                <div className={styles.title2} style={title2Style}>
                  Diverse Portfolio
                </div>
                <div className={styles.secondaryText2}>Secondary Text</div>
              </div>
              <div className={styles.trailingItem2}>
                <img
                  className={styles.chevronRightIcon2}
                  alt=""
                  src="/chevron-right.svg"
                />
              </div>
            </div>
            <div className={styles.divider4}>
              <div className={styles.divider5} />
            </div>
          </div>
          <div className={styles.system}>
            <div className={styles.list3}>
              <div className={styles.interactionState3} />
              <div className={styles.listItemContainer3}>
                <div className={styles.leadingItem3}>
                  <img
                    className={styles.emojiSymbolsIcon3}
                    alt=""
                    src="/emoji-symbols.svg"
                  />
                </div>
                <div className={styles.textContainer3}>
                  <div className={styles.overline3} />
                  <div className={styles.title3} style={title3Style}>
                    Diverse Portfolio
                  </div>
                  <div className={styles.secondaryText3}>Secondary Text</div>
                </div>
                <div className={styles.trailingItem3}>
                  <img
                    className={styles.chevronRightIcon3}
                    alt=""
                    src="/chevron-right.svg"
                  />
                </div>
              </div>
              <div className={styles.divider6}>
                <div className={styles.divider7} />
              </div>
            </div>
            <div className={styles.dataAggregator}>
              <div className={styles.list4}>
                <div className={styles.interactionState4} />
                <div className={styles.listItemContainer4}>
                  <div className={styles.leadingItem4}>
                    <img
                      className={styles.emojiSymbolsIcon4}
                      alt=""
                      src="/emoji-symbols.svg"
                    />
                  </div>
                  <div className={styles.textContainer4}>
                    <div className={styles.overline4} />
                    <div className={styles.title4} style={title4Style}>
                      Diverse Portfolio
                    </div>
                    <div className={styles.secondaryText4}>Secondary Text</div>
                  </div>
                  <div className={styles.trailingItem4}>
                    <img
                      className={styles.chevronRightIcon4}
                      alt=""
                      src="/chevron-right.svg"
                    />
                  </div>
                </div>
                <div className={styles.divider8}>
                  <div className={styles.divider9} />
                </div>
              </div>
              <div className={styles.patternMatcher}>
                <div className={styles.list5}>
                  <div className={styles.interactionState5} />
                  <div className={styles.listItemContainer5}>
                    <div className={styles.leadingItem5}>
                      <img
                        className={styles.emojiSymbolsIcon5}
                        alt=""
                        src="/emoji-symbols.svg"
                      />
                    </div>
                    <div className={styles.textContainer5}>
                      <div className={styles.overline5} />
                      <div className={styles.title5} style={title5Style}>
                        {title}
                      </div>
                      <div className={styles.secondaryText5}>
                        Secondary Text
                      </div>
                    </div>
                    <div className={styles.trailingItem5}>
                      <img
                        className={styles.chevronRightIcon5}
                        alt=""
                        src="/chevron-right.svg"
                      />
                    </div>
                  </div>
                  <div className={styles.divider10}>
                    <div className={styles.divider11} />
                  </div>
                </div>
                <div className={styles.featureExtractor}>
                  <img
                    className={styles.featureExtractorChild}
                    alt=""
                    src="/group-304.svg"
                  />
                  <img
                    className={styles.featureExtractorItem}
                    loading="lazy"
                    alt=""
                    src="/group-305.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorHandler;
