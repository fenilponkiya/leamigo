import { TourFacilitiesCustom } from "@/common/facilitiesCustom";
import { facililtiesData1, facililtiesData2 } from "@/utils/data";
import React from "react";

export const TourFacilitiesList = () => {
  return (
    <>
      <p className="font-bold my-6 text-2xl ">What's included </p>
      <div className="grid grid-cols-1 md:grid-cols-2  gap-8">
        <div className="col-span-1 md:col-span-1">
          {facililtiesData1.map((title) => {
            return <TourFacilitiesCustom isGreen={true} title={title} />;
          })}
        </div>
        <div className="col-span-1 md:col-span-1">
          {facililtiesData2.map((title) => {
            return <TourFacilitiesCustom title={title} />;
          })}
        </div>
      </div>
    </>
  );
};
