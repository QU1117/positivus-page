import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LandingTop from "./header/LandingTop";

const Landing = () => {
  return <LandingTop />;
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(
  <StrictMode>
    <Landing />
  </StrictMode>,
);
