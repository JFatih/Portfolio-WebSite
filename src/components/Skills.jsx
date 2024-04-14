import { data } from "../mocks/data";
import Ellipse from "../assets/Ellipse.svg";
import Ellipse2 from "../assets/Ellipse2.svg";

function Skills() {
  return (
    <>
      <section className="w-screen bg-white overflow-hidden relative dark:bg-[#484148]">
        <img
          className="absolute w-[120px] top-[-60px] right-[350px]"
          src={Ellipse}
        />
        <img
          className="absolute w-[120px] bottom-[-90px] right-[-35px]"
          src={Ellipse2}
        />
        <span className="absolute w-[218px] h-[60px] bg-[#525252] rounded-full left-[-100px] bottom-[50px]"></span>
        <div>
          <p className="text-[48px] my-[50px] dark:text-[#F4F4F4]">
            {data.en.skills.title}
          </p>
          <div className="flex flex-row gap-[20px] justify-center mb-[100px] relative">
            {Object.values(data.en.skills.programmes).map((program) => {
              return (
                <div key={program.name}>
                  <img src={program.image} />
                  <p className="text-[24px] text-[#777777] dark:text-[#F4F4F4]">
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
