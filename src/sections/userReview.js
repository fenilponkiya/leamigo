import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { reviewImagePath } from "@/utils/data";

export const UserReview = () => {
  return (
    <>
      {Array(3)
        .fill(null)
        .map((_, index) => {
          return (
            <div key={index} className="mb-4">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center">
                  <Avatar>
                    <AvatarImage className="bg-[var(--border)]" />
                    <AvatarFallback className="bg-[var(--foreground)] text-[var(--input)] text-xs">
                      A.T
                    </AvatarFallback>
                  </Avatar>
                  <span className="ml-6 text-xs font-semibold">Ali Tufan</span>
                </div>
                <div>
                  <span className="text-xs font-thin text-[var(--secondary-dark)]">
                    April 2023
                  </span>
                </div>
              </div>
              <span className="text-xs font-semibold ml-20 leading-6">
                Take this tour! Its fantastic!
              </span>
              <p className="text-xs leading-6 mb-4">
                Great for 4-5 hours to explore. Really a lot to see and tons of
                photo spots. Even have a passport for you to collect all the
                stamps as a souvenir. Must see for a Harry Potter fan.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-5 w-fit mb-4">
                {reviewImagePath.map((path) => {
                  return <img className="" src={path} />;
                })}
              </div>
              <Badge className="text-xs font-normal">Helpful</Badge>
              <Badge className={"text-xs font-normal"}>Not Helpful</Badge>
            </div>
          );
        })}
      <Button className="bg-[var(--background)] text-[var(--primary)] border border-[var(--primary)] hover:bg-[var(--primary)] hover:text-[var(--card)] mt-4 md:mt-0 text-xs">
        See more reviews
      </Button>
    </>
  );
};
