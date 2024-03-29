import { Link } from "react-router-dom";
import ErrorHandler from "./ErrorHandler";
import "./Filter.css";

const Filter = () => {
  return (
    <div className="filter">
      <div className="sort">
        <div className="search1">
          <h1 className="our-gallery">Our Gallery</h1>
        </div>
        <div className="combiner">
          <div className="splitter">
            <div className="transformer">
              <img
                className="image-icon7"
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
            </div>
            <div className="processor-chain">
              <img
                className="image-icon8"
                loading="lazy"
                alt=""
                src="/image-5@2x.png"
              />
              <div className="output-dispenser">
                <img
                  className="output-dispenser-child"
                  loading="lazy"
                  alt=""
                  src="/group-303@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="rule-builder">
            <div className="decision-maker">
              <div className="logic-operator1">
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
                <div className="priority-queue">
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
              <div className="decision-maker-inner">
                <div className="group-div">
                  <div className="frame-child8" />
                  <Link to={"/gallery"}><div className="view-gallery">View Gallery</div></Link>
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
