import SideMenu1 from "../components/SideMenu1";
import SideMenu from "../components/SideMenu";
import FrameComponent5 from "../components/FrameComponent5";
import "./Dashboard.css";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const handleImageChange = (e) => {
    e.preventDefault();
    // console.log(e.target.files[0]);
    setImage(e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
  };
  const handleUpload = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("image", image);

    try {
      const result = await axios.post(
        "http://localhost:5000/upload-image",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setSuccessMessage("Image uploaded successfully!");
      setTimeout(() => {
        setSuccessMessage("");
      }, 3000);
    } catch (error) {
      setErrorMessage("Error uploading image. Please try again later.");
      console.error("Error uploading image:", error);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    }
  };

  return (
    <div className="dashboard">
      <div className="gallery-we-have-container2">
        <p className="gallery3"> Gallery</p>
        <p className="we-have-sltions">
          We Have Sltions for All Your Related Issues!
        </p>
      </div>
      <main className="dashboard-httpsbitlyavi">
        {/* <SideMenu1 /> */}
        <div className="post-image-wrapper">
          <h2 className="post-image">{`Post Image `}</h2>
        </div>
        <div className="dashboard-httpsbitlyavi-inner">
          <img className="frame-child" alt="" src="/ellipse-62.svg" />
        </div>
      </main>
      <div className="dashboard-httpsbitlyavi1">
        <SideMenu />
        <div className="forgot2">Forgot？</div>
        <div className="dashboard-httpsbitlyavi-child">
          <div className="manage-post-parent">
            <h2 className="manage-post">{`Manage Post  `}</h2>
            <div className="frame-wrapper">
              <form className="frame-parent5" onSubmit={handleUpload}>
                <div className="vector-wrapper"></div>
                <div className="upload-image-button-wrapper">
                  <div className="upload-image-button">
                    <div className="login-now-button1">
                      <input
                        className="input-box"
                        type="text"
                        value={title}
                        placeholder="Title"
                        onChange={(e) => setTitle(e.target.value)}
                      />
                      <input
                        className="input-box"
                        type="text"
                        value={description}
                        placeholder="Description(optional)"
                        onChange={(e) => setDescription(e.target.value)}
                      />
                      <div className="choose-file">
                        <label
                          className="choose-file-btn"
                          htmlFor="image-upload"
                        >
                          Choose Image
                        </label>
                        <input
                          id="image-upload"
                          type="file"
                          accept="image/*"
                          onChange={handleImageChange}
                        />
                        {imageUrl && (
                          <img
                            src={imageUrl}
                            alt="Selected Image"
                            className="selected-image"
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="button-wrapper">
                  <button type="submit" className="button">
                    <div className="upload-btn">Upload</div>
                  </button>
                  <Link to="/gallery" className="link-button">
                    Go to Gallery
                  </Link>
                </div>
                {successMessage && (
                  <div className="success-message">{successMessage}</div>
                )}
                {errorMessage && (
                  <div className="error-message">{errorMessage}</div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
