// import Name1 from "./Name1";
// import Email from "./Email";
// import PhioneNumber from "./PhioneNumber";
import emailjs from "emailjs-com";
import Button from "./Button";
import MapsFullMap from "./MapsFullMap";
import "./ShapeSet.css";
import { useState } from "react";

const ShapeSet = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    PhoneNumber: "",
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const timeoutDuration = 3000;
  const handleSubmit = (e) => {
    e.preventDefault();

    const { Name, Email, PhoneNumber } = formData;
    if (!emailRegex.test(Email)) {
      setErrorMessage("Please enter a valid email address.");
      setSuccessMessage("");
      return;
    }
    const serviceID = "service_qrt71ed";
    const templateID = "template_0011xd3";
    const userID = "8kzIEe9Tvk3UMTcm2"; 

    emailjs
      .sendForm(serviceID, templateID, e.currentTarget, userID)
      .then((result) => {
        console.log("Email sent successfully:", result);
        setSuccessMessage("Message sent successfully!");
        setErrorMessage("");
        setTimeout(() => {
          setSuccessMessage("");
        }, 5000);

      })
      .catch((error) => {
        console.error("Email send failed:", error);
        setErrorMessage("Message failed to send. Please try again later.");
        setSuccessMessage("");
      });
    setTimeout(() => {
      setFormData({ Name: "", Email: "", PhoneNumber: "" }); 
    }, timeoutDuration);
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <section className="shape-set1">
      <div className="button-bank-parent">
        <div className="button-bank">
          <div className="contact-form-5">
            <form className="icon-inventory" onSubmit={handleSubmit}>
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
                <div className="frame-parent16">
                  <div className="name-parent">
                    {/* <Name1 /> */}
                    <input
                      className="name"
                      placeholder="Name"
                      type="text"
                      name="Name"
                      value={formData.Name}
                      onChange={handleChange}
                      required
                    />
                    {/* <Email /> */}
                    <input
                      className="email"
                      placeholder="Email"
                      type="text"
                      name="Email"
                      value={formData.Email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  {/* <PhioneNumber /> */}
                  <input
                    className="phoneNumber"
                    placeholder="Phone Number"
                    type="text"
                    name="PhoneNumber"
                    value={formData.PhoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="video-viewport">
                <Button />
                <div className="success-message">
                {successMessage && (
                  <p className="successMessage">{successMessage}</p>
                )}

                {errorMessage && (
                  <p className="errorMessage">{errorMessage}</p>
                )}
                </div> 
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
