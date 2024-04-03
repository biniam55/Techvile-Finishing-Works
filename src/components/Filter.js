import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ErrorHandler from "./ErrorHandler";
import "./Filter.css";
import axios from "axios";

const Filter = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://techvile-finishing-backend.vercel.app/get-gallery"
        );
        console.log("Fetched image data:", response.data);
        setGalleryData(response.data.data); // Assuming response.data contains image data
      } catch (error) {
        console.error("Error fetching image data:", error);
      }
    };

    fetchData();
  }, []);
  console.log("Gallery data:", galleryData);

  return (
    <section className="filter Gallery" id="Gallery">
      <div className="filter">
        <div className="sort">
          <div className="search1">
            <h1 className="our-gallery">Our Gallery</h1>
          </div>
          <div className="combiner">
            {galleryData.slice(0, 1).map((item, index) => (
              <div className="splitter" key={index}>
                <div className="transformer">
                  <img
                    className="image-icon7"
                    src={require(`../images/${item.image}`)}
                   alt={item.title}
                  />
                </div>
                <div className="processor-chain">
                  <img
                    className="image-icon8"
                    src={require(`../images/${item.image}`)}
                   alt={item.title}
                  />
                  <div className="output-dispenser">
                    <img
                      className="output-dispenser-child"
                      src={require(`../images/${item.image}`)}
                   alt={item.title}
                    />
                  </div>
                </div>
              </div>
           ))}

            <div className="rule-builder">
              <div className="decision-maker">
                <div className="logic-operator1">
                  <ErrorHandler title="" />
                  <ErrorHandler
                    title=""
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
                      title=""
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
                  <div className="">
                    <div className="frame-child8" />
                    {/* Link to the gallery page */}
                    <Link to="/gallery" className="view-gallery-link">
                      View Gallery
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Filter;