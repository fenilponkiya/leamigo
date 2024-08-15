export const ImageSec = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3  gap-4 mb-4 md:mb-8">
      <div className="col-span-1 md:col-span-2  flex">
        <img
          src="island1.svg"
          alt="Main Image"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="col-span-1 flex flex-col  gap-4 ">
        <div className="h-1/2">
          <img
            src="island23.svg"
            alt="Upper Image"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="flex flex-row gap-4 h-1/2">
          <div className="flex-1">
            <img
              src="island3.svg"
              alt="Lower Image 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1">
            <img
              src="island44.svg"
              alt="Lower Image 2"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
