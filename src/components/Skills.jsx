import { useContext } from "react";
import { userContext } from "../context/userContext";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

function Skills() {
  const { data1 } = useContext(userContext);
  return (
    <>
      <section className="w-screen bg-white overflow-hidden relative dark:bg-darkbg2 py-5">
        <span className="roundcircle border-[60px] border-[#D9D9D9] dark:border-[#525252]  top-[-60px] right-[350px]"></span>
        <span className="roundcircle border-[40px] border-white dark:border-darkbg2  top-[-40px] right-[370px]"></span>
        <span className="roundcircle border-[60px] border-pink1 dark:border-pink1  bottom-[-90px] right-[-35px]"></span>
        <span className="roundcircle border-[40px] border-white dark:border-darkbg2  bottom-[-70px] right-[-15px]"></span>
        <span className="roundcircle w-[218px] h-[60px] bg-[#525252]  left-[-100px] bottom-[55px]"></span>
        <div className="lg:w-8/12 w-9/12 2xl:w-[1107px] mx-auto">
          <p className="text-[48px] my-[2vw] dark:text-bg1 relative">
            {data1.skills.title}
          </p>
          <Swiper
            slidesPerView={2.5}
            spaceBetween={10}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 3.5,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 5.5,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 6.5,
                spaceBetween: 10,
              },
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {Object.values(data1.skills.programmes).map((program, index) => {
              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col mb-5 ">
                    <img src={program.image} className="rounded-lg" />
                    <p className="lg:text-[16px] text-[#777777] dark:text-bg1 mb-[3vw]">
                      {program.name}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default Skills;
