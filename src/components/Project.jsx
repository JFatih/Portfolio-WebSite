import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { data } from "../mocks/data";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

function Projects() {
  const { mainTitle, section } = useSelector((store) => ({
    mainTitle: store.projects.mainTitle,
    section: store.projects.section,
  }));

  return (
    <section className="w-screen bg-white overflow-hidden relative dark:bg-darkbg2 dark:text-white font-inter">
      <header>
        <h1 className="text-[36px] my-[50px] font-medium">{mainTitle}</h1>
      </header>
      <article className="lg:w-4/6 2xl:w-[1070px] w-5/6 mx-auto flex lg:justify-center gap-5 projectsbg lg:overflow-x-hidden overflow-x-scroll">
        {Object.values(section).map((base, index) => {
          return (
            <div
              className={`flex-shrink-0 lg:w-6/12 w-[300px] h-[700px] rounded-xl p-[50px] relative mb-[100px] text-start`}
              key={index}
            >
              <h5 className="font-bold text-[29px] my-[10px] font-playfair">
                {base.title}
              </h5>
              <p className="text-[16px] mb-[20px] lg:w-10/12">{base.des}</p>
              <div className="flex gap-2 text-center mb-[20px] flex-wrap lg:w-3/4 items-center">
                {base.prog.map((pr, index) => {
                  return (
                    <p
                      key={index}
                      className=" w-[82px] h-[32px] rounded-xl bg-white dark:bg-[#525252] font-bold flex justify-center items-center"
                    >
                      {pr}
                    </p>
                  );
                })}
              </div>
              <div className="text-[20px] font-semibold flex justify-between mb-[20px] ">
                <a href={base.link.github.url}>{base.link.github.name}</a>
                <a href={base.link.app.url}>
                  {base.link.app.name}{" "}
                  <FontAwesomeIcon icon={faArrowRight} className="w-[12px]" />
                </a>
              </div>
              <img
                src={base.image}
                className="absolute bottom-[-45px] left-[0px]"
              />
            </div>
          );
        })}
      </article>
    </section>
  );
}

export default Projects;
