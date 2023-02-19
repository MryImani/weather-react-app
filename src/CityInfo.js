import React from "react";
import CityInfoDesktopshow from "./CityInfoDesktopShow";
import CityName from "./CityName";
export default function CityInfo() {
  return (
    <div className="row cityInfo">
      <CityInfoDesktopshow />
      <CityName CityName="Mashhad" country="Iran" />
    </div>
  );
}
