import { SquareBox } from "@/common/sqaureBox";
import { tourData } from "@/utils/data";
import React from "react";

export const TourBasicDettails = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {tourData.map(({ title, des }, index) => (
        <div key={index} className="flex items-center">
          <SquareBox />
          <div className="ml-2">
            <h6 className="font-semibold text-sm mb-1">{title}</h6>
            <h6 className="font-light text-[var(--secondary-dark)] text-xs">
              {des}
            </h6>
          </div>
        </div>
      ))}
    </div>
  );
};
