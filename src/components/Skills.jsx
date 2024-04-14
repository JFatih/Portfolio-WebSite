import { data } from "../mocks/data";

function Skills() {
  return (
    <>
      <section className="w-screen bg-white overflow-hidden relative dark:bg-[#484148]">
        <span className="absolute border-[60px] border-[#D9D9D9] dark:border-[#525252] rounded-full top-[-60px] right-[350px]"></span>
        <span className="absolute border-[40px] border-white dark:border-[#484148] rounded-full top-[-40px] right-[370px]"></span>
        <span className="absolute border-[60px] border-[#EA2678] dark:border-[#EA2678] rounded-full bottom-[-90px] right-[-35px]"></span>
        <span className="absolute border-[40px] border-white dark:border-[#484148] rounded-full bottom-[-70px] right-[-15px]"></span>
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
