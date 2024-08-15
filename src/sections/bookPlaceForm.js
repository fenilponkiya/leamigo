import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";

export const BookPlaceForm = () => {
  return (
    <Card className="max-w-md h-max rounded-lg shadow-md px-6 py-4 pt-8">
      <CardContent className="space-y-4 p-0">
        <div className="text-sm">
          From{" "}
          <span className="text-[var(--foreground)] font-semibold text-md">
            $1,200
          </span>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center p-2">
            <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
            <div className="ml-4">
              <span className="block font-semibold text-sm">From</span>
              <span className="text-xs">February 05 ~ March 14</span>
            </div>
          </div>
          <Separator className="bg-[var(--border)]" />
          <div className="flex items-center p-2">
            <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
            <div className="ml-4">
              <span className="block font-semibold text-sm">Time</span>
              <span className="text-xs">Choose time</span>
            </div>
          </div>
        </div>

        <div>
          <CardHeader className="p-0">
            <CardTitle>
              <span className="text-[var(--foreground)] font-semibold text-sm leading-5">
                Tickets
              </span>
            </CardTitle>
          </CardHeader>
          <div className="space-y-3 mt-2">
            <div className="flex items-center justify-between">
              <div className="text-xs">
                Adult (18+ years){" "}
                <span className="font-semibold text-xs">$282.00</span>
              </div>
              <div className="flex items-center">
                <div className="border border-[var(--input)] rounded-full w-6 h-6 flex items-center justify-center -left-10 top-0">
                  +
                </div>
                <span className="mx-2 text-xs">3</span>
                <div className="border border-[var(--input)] rounded-full w-6 h-6 flex items-center justify-center">
                  -
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs">
                Youth (13-17 years){" "}
                <span className="font-semibold text-xs">$168.00</span>
              </div>
              <div className="flex items-center">
                <div className="border border-[var(--input)] rounded-full w-6 h-6 flex items-center justify-center -left-10 top-0">
                  +
                </div>
                <span className="mx-2 text-xs">2</span>
                <div className="border border-[var(--input)] rounded-full w-6 h-6 flex items-center justify-center">
                  -
                </div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div className="text-xs">
                Children (0-12 years){" "}
                <span className="font-semibold text-xs">$168.00</span>
              </div>
              <div className="flex items-center">
                <div className="border border-[var(--input)] rounded-full w-6 h-6 flex items-center justify-center -left-10 top-0">
                  +
                </div>
                <span className="mx-2 text-xs">4</span>
                <div className="border border-[var(--input)] rounded-full w-6 h-6 flex items-center justify-center">
                  -
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <CardHeader className="p-0">
            <CardTitle>
              <span className="text-[var(--foreground)] font-semibold text-sm leading-5">
                Add Extra
              </span>
            </CardTitle>
          </CardHeader>
          <div className="space-y-3 mt-2">
            <div className="flex items-center justify-between">
              <div>
                <Checkbox id="service-per-booking" />
                <label className="pl-2 text-xs">Add Service per booking</label>
              </div>
              <span className="text-xs">$40</span>
            </div>
            <div className="flex items-center justify-between">
              <div>
                <Checkbox />
                <label className="pl-2 text-xs">Add Service per person</label>
              </div>

              <span className="text-xs">$40</span>
            </div>
            <div className="pl-6 flex content-center">
              <div className="text-xs ">
                Adult: <span className="font-semibold">$17.00 </span>
                &nbsp;
              </div>

              <div className="text-xs">
                - Youth:<span className="font-semibold"> $14.00</span>
              </div>
            </div>
            <Separator className="mt-2 bg-[var(--border)]" />
          </div>
        </div>

        <div className="flex justify-between text-md font-semibold py-3">
          <span className="text-md font-normal">Total:</span>
          <span>$530.00</span>
        </div>
      </CardContent>

      <CardFooter className="p-0 pb-2">
        <Button className=" w-full bg-[var(--primary)] text-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--primary)] border hover:border-[var(--primary)] mt-4 md:mt-0 text-xs">
          Book now{" "}
        </Button>
      </CardFooter>
    </Card>
  );
};
