import React, { useEffect, useState } from "react";
import axios from "axios";
import "./FrameComponent2.css";

const FrameComponent2 = () => {
  const [galleryData, setGalleryData] = useState([]);

  useEffect(() => {
    getImageData();
  }, []);

  const getImageData = async () => {
    try {
      const response = await axios.get("https://vercel.com/binis-projects/techvile-finishing-backend/get-gallery");
      const sortedData = response.data.data.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
      // const limitedData = sortedData.slice(0, 9);
      setGalleryData(sortedData);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };

  return (
    <section className="gallery-child">
      <div className="frame-parent18">
        <div className="background-parent">
        {galleryData.length === 0 ? (
            <div className="no-data-message"><h1>No data available</h1></div>
          ) : (
          <div className="grid-container">
            {galleryData.map((item, index) => (
              <div className="grid-item" key={index}>
                <div className="background">
                  <img
                    src={require(`../images/${item.image}`)}
                    alt={item.title}
                    height={100}
                    width={100}
                  />
                  {/* <div className="pictures">
                    <div className="div8" />
                    <div className="pictures-child">
                      <img src={item.image} alt={item.title} />
                    </div>
                  </div> */}
                  <div className="background-inner">
                    <div className="title-parent">
                      <div className="title8">{item.title}</div>
                      <div className="something-short-and">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
