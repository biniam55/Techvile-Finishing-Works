import MobileSignIn1 from "../components/MobileSignIn1";
import FrameComponent13 from "../components/FrameComponent13";
import "./MobileSignIn.css";

const MobileSignIn = () => {
  return (
    <div className="mobile-sign-in">
      <MobileSignIn1 />
      <section className="rectangle-group">
        <div className="frame-child2" />
        <div className="frame-child3" />
        <div className="frame-wrapper2">
          <div className="frame-parent10">
            <div className="about-us-group">
              <b className="about-us1">About Us</b>
              <div className="crafting-excellence-through-container1">
                <p className="crafting-excellence-through1">
                  Crafting excellence through precision and passion, we redefine
                  spaces with our expert finishing works
                </p>
              </div>
            </div>
            <div className="contact-info-group">
              <div className="contact-info1">Contact Info</div>
              <div className="rd-floor-somewhere1">
                3rd Floor somewhere, Addis Ababa
              </div>
              <div className="div3">0965325142</div>
              <div className="fyngmailcom1">fyn@gmail.com</div>
            </div>
          </div>
        </div>
        <FrameComponent13 />
      </section>
    </div>
  );
};

export default MobileSignIn;
