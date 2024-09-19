import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import TourPackages from "./../../components/tourPackages/TourPackages";
import ExtraPagesHeader from "./../../components/extraPagesHeader/ExtraPagesHeader";
import FaqComponent from "../../components/faq/FaqComponent";

function PackagePage() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="package-page">
      <ExtraPagesHeader title="Bizning tur paketlarimiz" />
      <div className="container">
        <TourPackages />
        <FaqComponent />
      </div>
    </div>
  );
}

export default PackagePage;
