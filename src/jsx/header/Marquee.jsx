import { useState, useEffect } from "react";

const Marquee = ({ reverse }) => {
  const [ulClassName, setUlClassName] = useState(
    "header-companies-marquee__content",
  );

  useEffect(() => {
    if (reverse) {
      setUlClassName(
        "header-companies-marquee__content header-companies-marquee__content-reverse",
      );
    }
  }, [reverse]);

  return (
    <div className="header-companies-marquee">
      <ul className={ulClassName}>
        <li>
          <img
            src="../../assets/Amazon.svg"
            alt="Amazon logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Dribble.svg"
            alt="Dribble logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Hubspot.svg"
            alt="Hubspot logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Notion.svg"
            alt="Notion logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Netflix.svg"
            alt="Netflix logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Zoom.svg"
            alt="Zoom logo"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
      <ul className={ulClassName} aria-hidden="true">
        <li>
          <img
            src="../../assets/Amazon.svg"
            alt="Amazon logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Dribble.svg"
            alt="Dribble logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Hubspot.svg"
            alt="Hubspot logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Notion.svg"
            alt="Notion logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Netflix.svg"
            alt="Netflix logo"
            loading="lazy"
            decoding="async"
          />
        </li>
        <li>
          <img
            src="../../assets/Zoom.svg"
            alt="Zoom logo"
            loading="lazy"
            decoding="async"
          />
        </li>
      </ul>
    </div>
  );
};

export default Marquee;
