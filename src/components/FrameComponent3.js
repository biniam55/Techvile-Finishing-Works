import { Link } from "react-router-dom";
import "./FrameComponent3.css";

const FrameComponent3 = () => {
  return (
    <section className="gallery-inner">
      <div className="frame-parent17">
        <header className="fyn-container">
          <h3 className="fyn2">FYN</h3>
          <nav className="frame-nav">
            <div className="home-wrapper">
             <Link to={"/"}><h3 className="home1">HOME</h3></Link> 
            </div>
            <div className="gallery-wrapper">
              <h3 className="gallery9">GALLERY</h3>
            </div>
            <h3 className="service3">SERVICE</h3>
            <h3 className="testimonials2">TESTIMONIALS</h3>
          </nav>
        </header>
        <div className="container">
          <img
            className="container-child"
            loading="lazy"
            alt=""
            src="/rectangle-6@2x.png"
          />
          <h1 className="gallery-we-have-container5">
            <p className="gallery10"> Gallery</p>
            <p className="we-have-solutions4">
              We Have Solutions for All Your Space Related Issues!
            </p>
          </h1>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent3;
