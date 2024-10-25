import { useContext } from "react";
import { userContext } from "../context/userContext";

function Experience() {
  const { data1 } = useContext(userContext);
  const lang = localStorage.getItem("Language");
  console.log(typeof lang);

  return (
    <section className="w-screen bg-bg1 dark:bg-darkbg1 text-black dark:text-white font-inter py-[3vw]">
      <div className="lg:w-8/12 w-9/12 mx-auto">
        <p className="text-[36px] font-medium mb-6">{data1.experience.title}</p>
        {Object.values(data1.experience.exp).map((data, index) => {
          return (
            <div
              className="flex lg:flex-row flex-col items-start gap-6 p-6 border rounded-xl shadow-lg bg-white dark:bg-darkbg2 dark:border-darkbg1 text-start max-w-4xl mx-auto"
              key={index}
            >
              <img
                src={data.firmImg}
                alt={data.firm}
                className="w-24 h-24 rounded-lg object-cover shadow-md"
              />
              <div className="flex flex-col">
                <p className="text-[24px] font-semibold">{data.title}</p>
                <p className="text-[20px] text-gray-700 dark:text-gray-300">
                  {data.firm}
                </p>
                <div className="flex items-center text-[16px] gap-2 text-gray-500 dark:text-gray-400 my-1">
                  <p>{data.startTime}</p>
                  <span> - </span>
                  <p>
                    {data.endTime || lang === `"tr"` ? "Halen" : "Currently"}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-[16px] text-gray-500 dark:text-gray-400">
                  <p>{data.location}</p>
                  <span>·</span>
                  <p>{data.locationType}</p>
                </div>
                <p className="text-[16px] mt-4">{data.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Experience;
