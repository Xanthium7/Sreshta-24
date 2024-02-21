import { Landing } from "./landing/Landing";
import LandingMobile from "./landing/LandingMobile";
import Main from "./gallery/Main";
import EventsPreviewMain from "./eventsPreview/EventsPreviewMain";
import AboutPreviewMain from "./aboutPreview/AboutPreviewMain";
import Bot from "../bot";
const TechMain = () => {
  return (
    <div>
      <div className="md:block hidden bg-tech-bg">
        <Landing />
      </div>
      <div className=" bg-tech-bg md:hidden">
        <LandingMobile />
      </div>
      <EventsPreviewMain />
      <Bot />
      <Main />
      <AboutPreviewMain />
    </div>
  );
};

export default TechMain;
