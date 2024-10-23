import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

function Projects() {
  const { data1 } = useContext(userContext);

  return (
    <section className="w-screen bg-white relative dark:bg-darkbg2 dark:text-white font-playfair">
      <header>
        <h1 className="text-[36px] py-[50px] font-inter font-medium">
          {data1.projects.mainTitle}
        </h1>
      </header>
      <article className="lg:w-4/6 2xl:w-[1070px] w-5/6 mx-auto">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
          autoHeight={true}
        >
          {Object.values(data1.projects.section).map((base, index) => {
            return (
              <SwiperSlide key={index} className="projectsbg">
                <div className="text-start lg:pt-7 lg:px-9 pt-4 px-5 rounded-lg flex flex-col gap-3 justify-between mb-20 flex-[0_0_1]">
                  <div className="flex flex-col gap-1">
                    <p className="text-[29px] font-bold py-2">{base.title}</p>
                    <p className="lg:w-5/6  font-inter text-[16px]">
                      {base.des}
                    </p>
                    <div className="flex flex-wrap gap-3 py-5">
                      {base.prog.map((pr, index) => {
                        return (
                          <p
                            key={index}
                            className="bg-white dark:bg-[#525252] p-2 px-4 rounded-full font-bold text-[16px]"
                          >
                            {pr}
                          </p>
                        );
                      })}
                    </div>
                    <div className="font-inter font-semibold text-[20px] flex justify-between">
                      <a href={base.link.github.url}>{base.link.github.name}</a>
                      <a href={base.link.app.url}>
                        {base.link.app.name}{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="w-[12px]"
                        />
                      </a>
                    </div>
                  </div>
                  <div className="bottom-[-28px] relative">
                    <img src="/pcsample.png" className="relative" />
                    <img
                      src={base.image}
                      className="absolute top-[-18px] lg:top-[-28px] scale-[0.7]"
                    />
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </article>
    </section>
  );
}

export default Projects;
