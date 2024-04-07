import { useEffect, useState } from "react";
import "./Product.css";
import axios from "axios"
import {format} from 'date-fns/format';
const Product = () => {
  const [ProductData, setProductData] = useState([]);
  useEffect(() => {
    getImageData();
  }, []);
  const getImageData = async () => {
    try {
      const response = await axios.get(
        "https://finishing-frontend-pmdy.vercel.app/get-gallery"
      );
      const sortedData = response.data.data.sort(
        (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
      );
      console.log(response.data)
      // const limitedData = sortedData.slice(0, 9);
      setProductData(sortedData);
      console.log(response.data.data);
    } catch (error) {
      console.error("Error fetching gallery data:", error);
    }
  };
  const handleRemoveItem = async (itemId) => {
    try {
      await axios.delete(`http://localhost:5000/products:id/${itemId}`);
      // Filter out the removed item from the productData state
      console.log('Item removed successfully');
      setProductData(productData.filter(item => item._id !== itemId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };
  return (
    <div className="product">
      <div className="image-assemble">
        <h3 className="all-posts1">All Posts</h3>
        <div className="path-intersect">
          <div className="frame-parent56">
            <div className="rectangle-parent14">
              <div className="frame-child31" />
              <img className="search-1-icon1" alt="" src="/search-1-1.svg" />
              <input className="frame-input" placeholder="Search" type="text" />
            </div>
            <div className="rectangle-parent15">
              <div className="frame-child32" />
              <div className="short-by-container">
                <span>{`Sorted by : `}</span>
                <span className="newest">Newest</span>
              </div>
              <img
                className="chevron-down-1-icon"
                alt=""
                src="/chevrondown-1.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="slide-transition">
        <div className="zoom-transition">
          <div className="wipe-transition">
            <div className="bounce-transition">
              <div className="frame-parent57">
                <div className="image-wrapper">
                  <div className="image">Image</div>
                </div>
                <div className="title-wrapper">
                  <div className="title30">Title</div>
                </div>
                <div className="date-wrapper">
                  <div className="date1">Date</div>
                </div>
                <div className="type-wrapper">
                  <div className="type">type</div>
                </div>
                <div className="action-wrapper">
                  <div className="action1">Action</div>
                </div>
              </div>
            </div>
            {/* <div className="backgrounds">
              <img className="backgrounds-child" loading="lazy" alt="" />
            </div> */}

            <div className="proximity">
              <div className="layouts">
              {ProductData.map((item, index) => (
                <div className="arrangements" key={index}>
                  
                    <div className="image-rotate-parent" >
                      <div className="image-r frame-child36">
                        <img
                          src={require(`../images/${item.image}`)}
                          alt={item.title}
                        />
                      </div>
                      <div className="image-rotate">
                        <div className="marvel">{item.title}</div>
                      </div>
                      <div className="shape-scale-y">
                        <div className="shape-transform">{format(new Date(item.createdAt), 'MM/dd/yyyy')}</div>
                      </div>
                      <div className="shape-mirror-v">
                        <div className="gallery20">Gallery</div>
                      </div>
                      <div className="remove-wrapper">
                        <div className="remove" onClick={() => handleRemoveItem(item._id)}>Remove</div>
                      </div>
                    </div>
                  
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="calculator">
        <div className="splitter1">
          <div className="splitter-inner">
            <img className="frame-child34" loading="lazy" alt="" />
          </div>
          <div className="frame-parent63">
            <div className="showing-data-1-to-8-of-8-entri-wrapper">
              <div className="showing-data-1">
                Showing data 1 to 8 of 8 entries
              </div>
            </div>
            <div className="frame-parent64">
              <div className="wrapper7">
                <div className="div32">{`<`}</div>
              </div>
              <div className="wrapper8">
                <div className="div33">1</div>
              </div>
              <div className="wrapper9">
                <div className="div34">2</div>
              </div>
              <div className="wrapper10">
                <div className="div35">3</div>
              </div>
              <div className="wrapper11">
                <div className="div36">{`>`}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="frame-parent65">
        <div className="frame-wrapper23">
          <div className="frame-parent66">
            <div className="frame-parent67">
              <img className="frame-child35" alt="" src="/group-10.svg" />
              <img
                className="frame-icon22"
                loading="lazy"
                alt=""
                src="/frame-12.svg"
              />
            </div>
            <div className="total-gallery-parent">
              <div className="total-gallery1">Total Gallery</div>
              <div className="div37">10</div>
              <div className="arrow-up-1-parent">
                <img
                  className="arrow-up-1-icon1"
                  loading="lazy"
                  alt=""
                  src="/arrowup-1.svg"
                />
                <div className="images-wrapper">
                  <div className="images2">Images</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shape-container" />
        <div className="color-palette-wrapper">
          <img
            className="color-palette-icon"
            loading="lazy"
            alt=""
            src="/frame-22.svg"
          />
        </div>
      </div> */}
    </div>
  );
};

export default Product;
