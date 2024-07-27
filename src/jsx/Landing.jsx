import { createRoot } from "react-dom/client";
import Marquee from "./header/Marquee";

const Landing = () => {
  return (
    <>
      <Marquee />
      <Marquee reverse={true} />
    </>
  );
};

const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<Landing />);
