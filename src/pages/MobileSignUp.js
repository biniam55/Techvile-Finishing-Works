import Form from "../components/Form";
import CopyrightSymbol from "../components/CopyrightSymbol";
import "./MobileSignUp.css";

const MobileSignUp = () => {
  return (
    <div className="mobile-sign-up">
      <div className="frame-frame">
        <img className="frame-icon4" loading="lazy" alt="" src="/frame5.svg" />
      </div>
      <main className="form-parent">
        <Form />
        <section className="rectangle-parent">
          <div className="rectangle-div" />
          <div className="frame-child1" />
          <div className="contact-mail-wrapper">
            <div className="contact-mail">
              <div className="about-us-parent">
                <b className="about-us">About Us</b>
                <div className="crafting-excellence-through-container">
                  <p className="crafting-excellence-through">
                    Crafting excellence through precision and passion, we
                    redefine spaces with our expert finishing works
                  </p>
                </div>
              </div>
              <div className="contact-info-parent">
                <div className="contact-info">Contact Info</div>
                <div className="rd-floor-somewhere">
                  3rd Floor somewhere, Addis Ababa
                </div>
                <div className="div2">0965325142</div>
                <div className="fyngmailcom">fyn@gmail.com</div>
              </div>
            </div>
          </div>
          <CopyrightSymbol />
        </section>
      </main>
    </div>
  );
};

export default MobileSignUp;
