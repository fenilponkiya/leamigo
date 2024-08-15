import Timeline from "@/common/timeline";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { DatePickerWithRange } from "../calendar";
import { Faq } from "../faq";
import { Review } from "../reviews";
import { TourBasicDettails } from "../tourBasicDetails";
import { TourFacilitiesList } from "../tourFacilitiesList";
import { TourOverView } from "../tourOverview";
import { UserReview } from "../userReview";
import { CommentForm } from "../commnetForm";
import { SuggestedPlace } from "../suggestedPlace";

import { BookPlaceForm } from "../bookPlaceForm";
import { events } from "@/utils/data";

export const TourInfo = () => {
  useEffect(() => {
    const initMap = () => {
      const location = { lat: -34.397, lng: 150.644 };
      const map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: location,
      });
      new google.maps.Marker({
        position: location,
        map: map,
      });
    };

    const script = document.createElement("script");
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAw2sm8WMirEO9GcH2uLKd-XSbCRqbTdCQ&callback=initMap`;
    script.async = true;
    script.defer = true;
    window.initMap = initMap;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
      delete window.initMap;
    };
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3  gap-8">
        <div className="col-span-1 md:col-span-2">
          <TourBasicDettails />
          <TourOverView />
          <Separator className="my-4 mt-7 bg-[var(--border)]" />
          <TourFacilitiesList />
          <Separator className="my-4 bg-[var(--border)]" />
          <Timeline events={events} />
          <p className="font-bold my-6 text-2xl ">Tour Map</p>
          <div id="map" style={{ height: "400px", width: "100%" }}></div>
          <Separator className="my-4 mt-8 bg-[var(--border)]" />
          <DatePickerWithRange
            className={
              "w-fit rounded-sm border bg-card text-card-foreground shadow-sm"
            }
          />
          <Separator className="my-4 mt-8 bg-[var(--border)]" />
          <Faq />
          <Separator className="my-4 mt-8 bg-[var(--border)]" />

          <Review />
          <UserReview />
          <CommentForm />
        </div>
        <div className="grid grid-cols-1">
          <BookPlaceForm />
        </div>
      </div>
      <SuggestedPlace />
    </>
  );
};
