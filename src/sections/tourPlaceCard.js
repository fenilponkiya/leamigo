import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Tour1 from "../../public/tour1.svg";
import Tour2 from "../../public/tour2.svg";
import Tour3 from "../../public/tour3.svg";
import Tour4 from "../../public/tour4.svg";
import Tour5 from "../../public/tour5.svg";
import Tour6 from "../../public/tour6.svg";

export const TourPlaceCard = () => {
  const toursImages = [
    { id: 1, name: Tour1 },
    { id: 2, name: Tour2 },
    { id: 3, name: Tour3 },
    { id: 4, name: Tour4 },
    { id: 5, name: Tour5 },
    { id: 6, name: Tour6 },
  ];
  return (
    <>
      <div className="flex justify-between mb-6">
        <h6 className="text-xs">1362 results</h6>
        <h6 className="text-xs">Sort by: Featured</h6>
      </div>
      {toursImages.map(({ name }, index) => {
        return (
          <Card
            className="flex flex-col sm:px-9 md:flex-row mb-4 md:px-0 lg:py-1"
            key={index}
          >
            <CardHeader className="md:w-1/3 flex-shrink-0 rounded-t-lg md:rounded-tr-none text-sm">
              <CardTitle className="text-sm text-[var(--card)] flex items-center justify-center md:justify-start">
                <Image
                  src={name}
                  alt="Image"
                  className="rounded-md object-cover w-full"
                />
              </CardTitle>
            </CardHeader>
            <div className="flex flex-col md:flex-row md:w-2/3 justify-between items-center">
              <CardContent className="flex-1 px-5 sm:p-2 md:p-0">
                <h6 className="text-sm font-semibold mb-2">
                  Phi Phi Islands Adventure Day Trip with Seaview Lunch by V.
                  Marine Tour
                </h6>
                <h6 className="text-xs font-semibold text-center mb-2">
                  4.8(269)
                </h6>
                <h6 className="text-xs mb-2">
                  The Phi Phi archipelago is a must-visit while in Phuket, and
                  this speedboat trip.
                </h6>
                <div className="flex justify-around">
                  <p className="text-[var(--primary)] text-xs">
                    Best Price Guarantee
                  </p>
                  <p className="text-[var(--primary)] text-xs">
                    Free Cancellation
                  </p>
                </div>
              </CardContent>
            </div>
            <CardFooter className="flex flex-col md:flex-row md:justify-between md:items-center md:w-1/3 py-8">
              <div className="flex flex-col justify-between h-full">
                <h6 className="text-xs w-full text-center">
                  2 Days and 1 Night
                </h6>
                <div className="flex flex-col space-y-1 mt-2 md:mt-0">
                  <h6 className="text-xs text-[var(--input)] text-center">
                    $1200
                  </h6>
                  <h6 className="text-xs text-[var(--foreground)] text-center ">
                    From $114
                  </h6>
                  <Button className="bg-[var(--background)] text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--card)] mt-4 md:mt-0">
                    View Details
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        );
      })}
    </>
  );
};
