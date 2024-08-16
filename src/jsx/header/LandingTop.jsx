import { useRef } from "react";
import Marquee from "./Marquee";

const LandingTop = () => {
  const navigationContainer = useRef();

  return (
    <>
      <header className="header-top-nav">
        <img
          className="Positivus-logo"
          src="../assets/Logo.svg"
          alt="Positivus logo"
        />

        <button
          className="burger-nav-btn"
          type="button"
          onClick={() => {
            navigationContainer.current.style.width = "100%";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
          }}
        >
          <img
            src="../../assets/burger-menu-icon.svg"
            alt="Burger menu icon"
          ></img>
        </button>

        <div className="top-navigation-container" ref={navigationContainer}>
          <button
            href="#"
            className="close-nav-btn"
            onClick={() => {
              navigationContainer.current.style.width = "0";
              document.body.style.backgroundColor = "#fff";
            }}
          >
            <img src="../../assets/x-lg.svg" alt="Close navigation button" />
          </button>
          <ul className="top-navigation-list">
            <li>
              <button>About us</button>
            </li>
            <li>
              <button>Services</button>
            </li>
            <li>
              <button>Use cases</button>
            </li>
            <li>
              <button>Pricing</button>
            </li>
            <li>
              <button>Blog</button>
            </li>
            <li>
              <button>Request a quote</button>
            </li>
          </ul>
        </div>
      </header>

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
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>

        <div className="booking-button-container">
          <button
            type="button"
            className="booking-button button-main-style button-primary"
          >
            Book a consultation
          </button>
        </div>
      </section>

      <Marquee />
      <Marquee reverse={true} />
    </>
  );
};

export default LandingTop;
