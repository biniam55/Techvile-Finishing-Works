import Name1 from "./Name1";
import Email from "./Email";
import PhioneNumber from "./PhioneNumber";
import Button from "./Button";
import MapsFullMap from "./MapsFullMap";
import "./ShapeSet.css";

const ShapeSet = () => {
  return (
    <section className="shape-set">
      <div className="button-bank-parent">
        <div className="button-bank">
          <div className="contact-form-5">
            <form className="icon-inventory">
              <div className="icon-inventory-child" />
              <div className="container-clust">
                <h1 className="connect-us">Connect US</h1>
              </div>
              <div className="path-plot">
                <div className="arc-archive">
                  <h2 className="fill-the-form">
                    Fill the form so that our team can reach out to you
                  </h2>
                </div>
                <div className="frame-parent13">
                  <div className="name-parent">
                    <Name1 />
                    <Email />
                  </div>
                  <PhioneNumber />
                </div>
              </div>
              <div className="video-viewport">
                <Button />
              </div>
            </form>
          </div>
        </div>
        <MapsFullMap />
      </div>
    </section>
  );
};

export default ShapeSet;
