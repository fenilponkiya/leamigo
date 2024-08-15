import { Badge } from "@/components/ui/badge";
import { ImageSec } from "./imageSec";
import { TourInfo } from "./Main/tourInfo";

export const TourHeroSection = () => {
  return (
    <>
      <p className="font-bold my-6 text-3xl md:w-2/3">
        Phi Phi Islands Adventure Day Trip with Seaview Lunch by V. Marine Tour
        <span className="text-sm font-light">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;4.8 (269)30K+ booked
        </span>
      </p>
      <div className="flex justify-end mb-4">
        <Badge className="text-sm font-thin">Share</Badge>
        <Badge className={"text-sm font-thin"}>Wishlist</Badge>
      </div>
      <ImageSec />
      <TourInfo />
    </>
  );
};
