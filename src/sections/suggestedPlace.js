import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { suggestedPlaceData } from "@/utils/data";
import React from "react";

export const SuggestedPlace = () => {
  return (
    <>
      <p className="font-bold my-6 text-2xl ">You might also like...</p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-10">
        {suggestedPlaceData.map(
          ({ image, place, title, review, duration, price }, index) => {
            return (
              <div className="grid grid-cols-1" key={index}>
                <Card className="max-w-fit rounded-lg p-2">
                  <div className="relative w-full">
                    <img
                      src={image}
                      alt="Tour Image"
                      className="w-full h-full object-cover"
                    />
                    <img
                      src={"white-round.svg"}
                      className="w-20 h-20 absolute"
                      style={{ bottom: "-45px", right: "-20px" }}
                    />
                  </div>
                  <div className="text-[var(--secondary-dark)] text-xs py-2 pt-3 pl-5">
                    {place}
                  </div>
                  <CardContent className="p-0 px-2">
                    <CardHeader className="mb-2 p-0">
                      <CardTitle className="text-sm font-semibold leading-tight">
                        {title}
                      </CardTitle>
                    </CardHeader>
                    <div className="flex items-center text-sm mb-2">
                      <span className="font-light text-xs text-center w-full">
                        {review}
                      </span>
                    </div>
                    <Separator className="my-2 bg-[var(--border)]" />
                    <CardFooter className="flex justify-between text-xs p-0 py-1">
                      <span className="pl-5">{duration}</span>
                      <span className="font-semibold ">From {price}</span>
                    </CardFooter>
                  </CardContent>
                </Card>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};
