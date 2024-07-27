import Marquee from "./Marquee";

const LandingTopHeader = () => {
  return (
    <>
      <header>
        <Marquee />
        <Marquee reverse={true} />
      </header>
    </>
  );
};

export default LandingTopHeader;
