import { PaginationComponent } from "../pagination";
import { TourPlaceCard } from "../tourPlaceCard";
import { TourTypeFilter } from "../tourType";

export const Tours = () => {
  return (
    <>
      <p className="font-bold my-6 text-3xl ">
        Explore all things to do in Phuket
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-3 lg:col-span-1">
          <TourTypeFilter />
        </div>
        <div className="col-span-3 lg:col-span-2">
          <TourPlaceCard />
        </div>
      </div>
      <PaginationComponent />
    </>
  );
};
