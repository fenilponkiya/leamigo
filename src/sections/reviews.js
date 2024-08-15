import React from "react";

export const Review = () => {
  return (
    <div className="mb-8">
      <p className="font-bold my-6 text-2xl ">Customer Reviews</p>

      <div className="bg-[var(--table-header)] p-2 px-8 flex justify-between  items-center rounded-t-xl">
        <div className="flex-col ml-6">
          <div>
            <span className="text-sm font-semibold">Overall Rating</span>
          </div>
          <div>
            <span className="text-xs">Excellent</span>
          </div>
        </div>
        <div>
          <span className="text-sm font-semibold">5.0</span>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2  mt-2">
        <div className="bg-[var(--table-content)] col-span-1 p-2 px-8 flex items-center justify-between">
          <div className="flex-col ml-6">
            <div>
              <span className="text-sm font-semibold">Location</span>
            </div>
            <div>
              <span className="text-xs">Excellent</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <div className="bg-[var(--table-content)] col-span-1 p-2 px-8 flex items-center justify-between">
          <div className="flex-col ml-6">
            <div>
              <span className="text-sm font-semibold">Amenities</span>
            </div>
            <div>
              <span className="text-xs">Excellent</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2  mt-2">
        <div className="bg-[var(--table-content)] col-span-1 p-2 px-8 flex items-center justify-between">
          <div className="flex-col ml-6">
            <div>
              <span className="text-sm font-semibold">Food</span>
            </div>
            <div>
              <span className="text-xs">Excellent</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <div className="bg-[var(--table-content)] col-span-1 p-2 px-8 flex items-center justify-between">
          <div className="flex-col ml-6">
            <div>
              <span className="text-sm font-semibold">Price</span>
            </div>
            <div>
              <span className="text-xs">Excellent</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2  mt-2">
        <div className="bg-[var(--table-content)] col-span-1 p-2 px-8 flex items-center justify-between rounded-bl-xl">
          <div className="flex-col ml-6">
            <div>
              <span className="text-sm font-semibold">Rooms</span>
            </div>
            <div>
              <span className="text-xs">Excellent</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
        <div className="bg-[var(--table-content)] col-span-1 p-2 px-8 flex items-center justify-between rounded-br-xl">
          <div className="flex-col ml-6">
            <div>
              <span className="text-sm font-semibold">Tours Operator</span>
            </div>
            <div>
              <span className="text-xs">Excellent</span>
            </div>
          </div>
          <div>
            <span className="text-sm font-semibold">5.0</span>
          </div>
        </div>
      </div>
    </div>
  );
};
