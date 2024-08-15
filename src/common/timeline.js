const Timeline = () => {
  return (
    <>
      <p className="font-bold my-6 text-2xl ">Itinerary</p>
      <ol class="relative border-s-2 border-dashed border-[var(--primary)]">
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-[var(--primary)] rounded-full -start-3 "></span>
          <h3 class="flex items-center mb-1 font-semibold text-sm">
            Day 1: Airport Pick Up{" "}
          </h3>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 border-2 border-[var(--primary)] bg-[var(--background)] rounded-full -start-2 "></span>
          <h3 class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            Day 2: Temples & River Cruise{" "}
          </h3>
        </li>
        <li class="ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 border-2 border-[var(--primary)] bg-[var(--background)] rounded-full -start-2 "></span>
          <h3 class="mb-3 text-sm font-semibold text-gray-900 dark:text-white ">
            Day 3: Massage & Overnight Train{" "}
          </h3>

          <p class="font-normal text-sm leading-6 mb-5">
            Like on all of our trips, we can collect you from the airport when
            you land and take you directly to your hotel. The first Day is just
            a check-in Day so you have this freedom to explore the city and get
            settled in.
          </p>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 border-2 border-[var(--primary)] bg-[var(--background)] rounded-full -start-2 "></span>
          <h3 class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            Day 4: Khao Sok National Park
          </h3>
        </li>{" "}
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 border-2 border-[var(--primary)] bg-[var(--background)] rounded-full -start-2 "></span>
          <h3 class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            Day 5: Travel to Koh Phangan{" "}
          </h3>
        </li>
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-4 h-4 border-2 border-[var(--primary)] bg-[var(--background)] rounded-full -start-2 "></span>
          <h3 class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            Day 6: Morning Chill & Muay Thai Lesson{" "}
          </h3>
        </li>{" "}
        <li class="mb-10 ms-6">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-[var(--primary)] rounded-full -start-3 "></span>
          <h3 class="mb-1 text-sm font-semibold text-gray-900 dark:text-white">
            Day 7: Island Boat Trip{" "}
          </h3>
        </li>
      </ol>
    </>
  );
};

export default Timeline;
