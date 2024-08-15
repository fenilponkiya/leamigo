import React from "react";

export const SquareBox = (props) => {
  return (
    <div
      className="border border-[var(--input)] rounded-sm w-12 h-12 p-4"
      {...props}
    />
  );
};
