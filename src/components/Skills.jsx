import { data } from "./data";
import Ellipse from "../assets/Ellipse.svg";
import Ellipse2 from "../assets/Ellipse2.svg";

function Skills() {
  return (
    <>
      <section className="w-screen bg-white overflow-hidden relative">
        <img
          className="absolute w-[120px] top-[-60px] right-[350px]"
          src={Ellipse}
        />
        <img
          className="absolute w-[120px] bottom-[-90px] right-[-15px]"
          src={Ellipse2}
        />
        <span className="absolute border w-[218px] h-[60px] bg-[#525252] rounded-full left-[-100px] bottom-[50px]"></span>
        <div>
          <p className="text-[48px] my-[50px]">{data.en.skills.title}</p>
          <div className="flex flex-row gap-[20px] justify-center mb-[100px] relative">
            {Object.values(data.en.skills.programmes).map((program) => {
              return (
                <div key={program.name}>
                  <img src={program.image} />
                  <p className="text-[24px] text-[#777777]">{program.name}</p>
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
