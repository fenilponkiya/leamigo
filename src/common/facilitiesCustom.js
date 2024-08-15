export const TourFacilitiesCustom = ({ title, isGreen }) => {
  return (
    <div className="flex mb-3">
      <img
        src={isGreen ? "green-round.svg" : "orange-round.svg"}
        className="mr-3"
      />
      <span className="text-xs md:text-xs lg:text-xs">{title}</span>
    </div>
  );
};
