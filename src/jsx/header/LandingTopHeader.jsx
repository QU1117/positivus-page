import Marquee from "./Marquee";

const LandingTopHeader = () => {
  return (
    <>
      <header>
        <section>
          <header className="header-title-text">
            <h1>Navigating the digital landscape for success</h1>
          </header>

          <img
            className="header-megaphone-image"
            src="../../assets/Megaphone.svg"
            alt="Megaphone"
          />

          <p className="header-main-text">
            Our digital marketing agency helps businesses grow and succeed
            online through a range of services including SEO, PPC, social media
            marketing, and content creation.
          </p>

          <div className="button-container">
            <button type="button" className="primary-button">
              Book a consultation
            </button>
          </div>

          <Marquee />
          <Marquee reverse={true} />
        </section>
      </header>
    </>
  );
};

export default LandingTopHeader;
