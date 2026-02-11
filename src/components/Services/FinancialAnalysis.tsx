import React from "react";
import AboutServiceSection from "./AboutServiceSection";
import Services from "../Home/Services";
import FinancialAnalysisImage from "../../../public/images/financialimage.png";
import Review from "../Shared/Review";
import Achievements from "./Achievements";
import {
  financialAnalysisAchievements,
  financialAnalysisServices,
} from "@/lib/data";

const FinancialAnalysis = () => {
  return (
    <div>
      <AboutServiceSection
        title="FINANCIAL ANALYSIS"
        subTitle="Clarity in Every Number. Confidence in Every Decision"
        description="We help you understand your numbers, optimize your financial strategy, and scale smarter. From forecasting to fundraising and investor prep, Hacyon delivers real-time insights, expert support, and tailored financial tools"
        image={FinancialAnalysisImage}
      />
      <Services
        title="Strategic Financial Services"
        services={financialAnalysisServices}
      />
      <Achievements
        title="Case Studies"
        achievements={financialAnalysisAchievements}
      />
      <Review />
    </div>
  );
};

export default FinancialAnalysis;
