import { useContext } from "react";
import { userContext } from "../context/userContext";

function Skills() {
  const { data1 } = useContext(userContext);
  return (
    <>
      <section className="w-screen bg-white overflow-hidden relative dark:bg-darkbg2">
        <span className="roundcircle border-[60px] border-[#D9D9D9] dark:border-[#525252]  top-[-60px] right-[350px]"></span>
        <span className="roundcircle border-[40px] border-white dark:border-darkbg2  top-[-40px] right-[370px]"></span>
        <span className="roundcircle border-[60px] border-pink1 dark:border-pink1  bottom-[-90px] right-[-35px]"></span>
        <span className="roundcircle border-[40px] border-white dark:border-darkbg2  bottom-[-70px] right-[-15px]"></span>
        <span className="roundcircle w-[218px] h-[60px] bg-[#525252]  left-[-100px] bottom-[50px]"></span>
        <div>
          <p className="text-[48px] my-[5vh] dark:text-bg1 relative">
            {data1.skills.title}
          </p>
          <div className="flex flex-row flex-wrap  items-center	 gap-[20px] justify-center mb-[10vh] relative ">
            {Object.values(data1.skills.programmes).map((program, index) => {
              return (
                <div key={index}>
                  <img src={program.image} />
                  <p className="lg:text-[24px] text-[#777777] dark:text-bg1 mb-[2vh]">
                    {program.name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Skills;
