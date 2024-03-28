import { useMemo } from "react";
import "./ErrorHandler.css";

const ErrorHandler = ({
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
  const errorHandlerStyle = useMemo(() => {
    return {
      alignSelf: groupIconAlignSelf,
      flex: groupIconFlex,
    };
  }, [groupIconAlignSelf, groupIconFlex]);

  const titleStyle = useMemo(() => {
    return {
      margin: propMargin,
    };
  }, [propMargin]);

  const title1Style = useMemo(() => {
    return {
      margin: propMargin1,
    };
  }, [propMargin1]);

  const title2Style = useMemo(() => {
    return {
      margin: propMargin2,
    };
  }, [propMargin2]);

  const title3Style = useMemo(() => {
    return {
      margin: propMargin3,
    };
  }, [propMargin3]);

  const title4Style = useMemo(() => {
    return {
      margin: propMargin4,
    };
  }, [propMargin4]);

  const title5Style = useMemo(() => {
    return {
      margin: propMargin5,
    };
  }, [propMargin5]);

  return (
    <div className="error-handler" style={errorHandlerStyle}>
      <div className="list">
        <div className="interaction-state" />
        <div className="list-item-container">
          <div className="leading-item">
            <img
              className="emoji-symbols-icon"
              alt=""
              src="/emoji-symbols.svg"
            />
          </div>
          <div className="text-container">
            <div className="overline" />
            <div className="title2" style={titleStyle}>
              Diverse Portfolio
            </div>
            <div className="secondary-text">Secondary Text</div>
          </div>
          <div className="trailing-item">
            <img
              className="chevron-right-icon"
              alt=""
              src="/chevron-right.svg"
            />
          </div>
        </div>
        <div className="divider">
          <div className="divider1" />
        </div>
      </div>
      <div className="map">
        <div className="list1">
          <div className="interaction-state1" />
          <div className="list-item-container1">
            <div className="leading-item1">
              <img
                className="emoji-symbols-icon1"
                alt=""
                src="/emoji-symbols.svg"
              />
            </div>
            <div className="text-container1">
              <div className="overline1" />
              <div className="title3" style={title1Style}>
                Diverse Portfolio
              </div>
              <div className="secondary-text1">Secondary Text</div>
            </div>
            <div className="trailing-item1">
              <img
                className="chevron-right-icon1"
                alt=""
                src="/chevron-right.svg"
              />
            </div>
          </div>
          <div className="divider2">
            <div className="divider3" />
          </div>
        </div>
        <div className="circuit">
          <div className="list2">
            <div className="interaction-state2" />
            <div className="list-item-container2">
              <div className="leading-item2">
                <img
                  className="emoji-symbols-icon2"
                  alt=""
                  src="/emoji-symbols.svg"
                />
              </div>
              <div className="text-container2">
                <div className="overline2" />
                <div className="title4" style={title2Style}>
                  Diverse Portfolio
                </div>
                <div className="secondary-text2">Secondary Text</div>
              </div>
              <div className="trailing-item2">
                <img
                  className="chevron-right-icon2"
                  alt=""
                  src="/chevron-right.svg"
                />
              </div>
            </div>
            <div className="divider4">
              <div className="divider5" />
            </div>
          </div>
          <div className="system">
            <div className="list3">
              <div className="interaction-state3" />
              <div className="list-item-container3">
                <div className="leading-item3">
                  <img
                    className="emoji-symbols-icon3"
                    alt=""
                    src="/emoji-symbols.svg"
                  />
                </div>
                <div className="text-container3">
                  <div className="overline3" />
                  <div className="title5" style={title3Style}>
                    Diverse Portfolio
                  </div>
                  <div className="secondary-text3">Secondary Text</div>
                </div>
                <div className="trailing-item3">
                  <img
                    className="chevron-right-icon3"
                    alt=""
                    src="/chevron-right.svg"
                  />
                </div>
              </div>
              <div className="divider6">
                <div className="divider7" />
              </div>
            </div>
            <div className="data-aggregator">
              <div className="list4">
                <div className="interaction-state4" />
                <div className="list-item-container4">
                  <div className="leading-item4">
                    <img
                      className="emoji-symbols-icon4"
                      alt=""
                      src="/emoji-symbols.svg"
                    />
                  </div>
                  <div className="text-container4">
                    <div className="overline4" />
                    <div className="title6" style={title4Style}>
                      Diverse Portfolio
                    </div>
                    <div className="secondary-text4">Secondary Text</div>
                  </div>
                  <div className="trailing-item4">
                    <img
                      className="chevron-right-icon4"
                      alt=""
                      src="/chevron-right.svg"
                    />
                  </div>
                </div>
                <div className="divider8">
                  <div className="divider9" />
                </div>
              </div>
              <div className="pattern-matcher">
                <div className="list5">
                  <div className="interaction-state5" />
                  <div className="list-item-container5">
                    <div className="leading-item5">
                      <img
                        className="emoji-symbols-icon5"
                        alt=""
                        src="/emoji-symbols.svg"
                      />
                    </div>
                    <div className="text-container5">
                      <div className="overline5" />
                      <div className="title7" style={title5Style}>
                        {title}
                      </div>
                      <div className="secondary-text5">Secondary Text</div>
                    </div>
                    <div className="trailing-item5">
                      <img
                        className="chevron-right-icon5"
                        alt=""
                        src="/chevron-right.svg"
                      />
                    </div>
                  </div>
                  <div className="divider10">
                    <div className="divider11" />
                  </div>
                </div>
                <div className="feature-extractor">
                  <img
                    className="feature-extractor-child"
                    alt=""
                    src="/group-304.svg"
                  />
                  <img
                    className="feature-extractor-item"
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
