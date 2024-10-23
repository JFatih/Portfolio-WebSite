import { userContext } from "../context/userContext";
import { useContext } from "react";

function Footer() {
  const { data1 } = useContext(userContext);
  return (
    <footer className="w-screen bg-white overflow-hidden relative pt-[50px] pb-[100px] dark:bg-darkbg2 dark:text-white font-inter">
      <section className="flex md:flex-row flex-col gap-10 justify-center items-center 2xl:w-[1300px] mx-auto">
        <p className="sm:text-[42px] text-[30px] sm:w-[500px] w-9/12 text-end font-medium relative z-[50] ">
          {data1.footer.title}
          <span className="absolute rounded-md lg:w-[250px] w-[180px] lg:h-[18px] h-[10px] bg-[#82BBFF] sm:top-[40px] top-[30px] sm:right-[50px] right-[10px] z-[-1]"></span>
        </p>
        <div className="flex md:flex-col md:gap-0 text-start gap-2 text-[24px] footerlinkbg flex-wrap justify-center px-10 md:px-0">
          {Object.values(data1.footer.accounts).map((data, index) => {
            return (
              <a href={data.link} key={index} className="font-medium">
                {data.name}
              </a>
            );
          })}
        </div>
      </section>
    </footer>
  );
}
export default Footer;
