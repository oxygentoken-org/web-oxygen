// Components
import dynamic from "next/dynamic";

// Styles
import "./mainpage.css";
import "../../globals.css";

// Above-the-fold sections (eager)
import { PreLanding } from "./PreLanding";
import { Hero } from "./Hero";
import { Services } from "./Services";
import { BackgroundVideo } from "./BackgroundVideo";

// Below-the-fold sections: lazy-loaded into separate chunks.
// ssr: true keeps them server-rendered for SEO; only the client hydration
// chunk is split off, shrinking the initial JS payload above the fold.
const Tokens = dynamic(() => import("./Tokens").then((m) => m.Tokens), {
  ssr: true,
});
const Progress = dynamic(() => import("./Progress").then((m) => m.Progress), {
  ssr: true,
});
const Video = dynamic(() => import("./Video").then((m) => m.Video), {
  ssr: true,
});
const Partnerships = dynamic(() => import("../Partnerships/Partnerships"), {
  ssr: true,
});
const Quote = dynamic(() => import("./Quote").then((m) => m.Quote), {
  ssr: true,
});
const Footer = dynamic(() => import("../Footer/Footer"), { ssr: true });
const WhatsApp_Button = dynamic(
  () => import("../WhatsApp/WhatsApp_Button"),
  { ssr: true }
);

const MainPage = () => {
  return (
    <>
      <PreLanding />

      <BackgroundVideo />

      <Hero />
      <Services />
      <Tokens />
      <Progress />
      <Video />
      <Partnerships />
      <Quote />

      <Footer />
      <WhatsApp_Button />
    </>
  );
};

export default MainPage;
