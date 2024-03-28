import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import "./MobileGallery.css";

const MobileGallery = () => {
  return (
    <div className="mobile-gallery">
      <header className="mobile-gallery-inner">
        <div className="fyn-parent">
          <div className="fyn">FYN</div>
          <img
            className="gallery-with-solutions"
            loading="lazy"
            alt=""
            src="/frame4.svg"
          />
        </div>
      </header>
      <section className="gallery-title-parent">
        <img
          className="gallery-title-icon"
          loading="lazy"
          alt=""
          src="/rectangle-61@2x.png"
        />
        <div className="gallery-we-have-container3">
          <p className="gallery4"> Gallery</p>
          <p className="we-have-solutions2">{`We Have Solutions for All Your Space Related `}</p>
        </div>
      </section>
      <FrameComponent9 />
      <FrameComponent9
        propPadding="var(--padding-0) var(--padding-15xl) var(--padding-5xs) var(--padding-7xl)"
        propPadding1="var(--padding-0) var(--padding-0) var(--padding-5xl)"
        propBackgroundImage="url('/pictures8@3x.png')"
        propWidth="276px"
      />
      <FrameComponent8 />
    </div>
  );
};

export default MobileGallery;
