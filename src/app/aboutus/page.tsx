import React from "react";
import CompanyHistory from "./_components/CompanyHistory";
import Timeline from "./_components/Timeline";
import Team from "./_components/Team";
import Culture from "./_components/Culture";

const AboutUs = () => {
  return (
    <div className="mx-auto">
      <CompanyHistory />
      <Timeline />
      <Team />
      <Culture />
    </div>
  );
};

export default AboutUs;
