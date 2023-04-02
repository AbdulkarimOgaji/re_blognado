import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as TSwiper } from "swiper";
import "swiper/css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

export default function DeepDivesSlider(): JSX.Element {
  const [swiper, setSwiper] = useState<TSwiper | null>(null);
  const [nextDisabled, setNextDisabled] = useState(false);
  const [prevDisabled, setPrevDisabled] = useState(true);

  return (
    <div className="relative px-12">
      <Swiper
        slidesPerView={4}
        speed={2000}
        spaceBetween={30}
        breakpoints={{
          600: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          990: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className="deep-dives"
        onSwiper={setSwiper}
        onSlideChange={(sw) => {
          if (sw.activeIndex == 0) {
            setPrevDisabled(true);
          } else {
            setPrevDisabled(false);
          }
          if (sw.activeIndex == 4) {
            setNextDisabled(true);
          } else {
            setNextDisabled(false);
          }
        }}>
        {Array(8)
          .fill({})
          .map((_, idx) => (
            <SwiperSlide key={idx}>
              <Link to="/">
                <div className="relative mb-4 h-[342px] w-full after:absolute after:top-0 after:left-0 after:block after:h-full after:w-full after:bg-white after:opacity-0 after:duration-200 hover:after:opacity-25">
                  <img
                    src="/featured.jpg"
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <h4 className="text-lg font-semibold">
                  Is Uber’s Car share Better Than a Regular Ol’ Car Rental? We
                  Investigated
                </h4>
              </Link>{" "}
            </SwiperSlide>
          ))}
      </Swiper>
      <button
        onClick={() => swiper?.slidePrev()}
        className="absolute top-1/2 left-0 flex items-center duration-200 after:z-40 after:-ml-8 after:block after:h-1 after:w-10 after:origin-right after:scale-x-0 after:bg-black after:duration-200 hover:-translate-x-2 hover:after:scale-x-100 disabled:translate-x-0 disabled:opacity-25 disabled:after:opacity-0"
        disabled={prevDisabled}>
        <ChevronLeftIcon className="h-12 w-12" />
      </button>
      <button
        onClick={() => swiper?.slideNext()}
        disabled={nextDisabled}
        className="absolute top-1/2 right-0 flex items-center duration-200 before:z-40 before:-mr-8 before:block before:h-1 before:w-10 before:origin-left before:scale-x-0 before:bg-black before:duration-200 hover:translate-x-2 hover:before:scale-x-100 disabled:translate-x-0 disabled:opacity-25 disabled:before:opacity-0">
        <ChevronRightIcon className="h-12 w-12" />
      </button>
    </div>
  );
}
