import "./aboutUs.css";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ExtraPagesHeader from "./../../components/extraPagesHeader/ExtraPagesHeader";
import ExperienceAbout from "./../../components/experienceAbot/ExperienceAbout";
import AgencyResults from "./../../components/agencyResults/AgencyResults";
import Teams from "./../../components/teams/Teams";
import Opinion from "./../../components/opinion/Opinion";
import Partners from "./../../components/partners/Partners";

import kabah_1 from "../../images/kabah_1.jpg";
import kabah_2 from "../../images/kabah_2.jpg";

function AboutUs() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="about-us">
      {/* ExtraPagesHeader */}
      <ExtraPagesHeader title="Biz haqimizda" />

      {/* ExperienceAbout */}
      <div className="about-us-experience agency-experience2 container">
        <div className="images">
          <img src={kabah_2} alt="" />
          <img src={kabah_1} alt="" />
        </div>
        <div className="about">
          <ExperienceAbout />
        </div>
      </div>

      {/* AgencyResults */}
      <AgencyResults />

      {/* teams */}
      <Teams />

      {/* opinion */}
      <Opinion />

      {/* partners */}
      <Partners/>
    </div>
  );
}

export default AboutUs;
