import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Ellipse from "../assets/Ellipse.svg";
import { data } from "./data";

function Introduce() {
  return (
    <section className="w-screen bg-[#F4F4F4] overflow-hidden relative">
      <span className="absolute border-[55px] border-[#D9D9D9] rounded-full left-[471px] top-[-40px]"></span>
      <span className="absolute border w-[217px] h-[59px] bg-secondColor rounded-full left-[1400px] top-[540px]"></span>
      <img
        className="absolute w-[121px] top-[620px] left-[1050px]"
        src={Ellipse}
      />
      <div className="w-8/12 flex justify-between items-center mx-auto ">
        <div className="flex flex-col w-[610px] mt-[151px]">
          <div className="flex flex-col items-start text-start relative">
            <h2 className="text-[30px] text-[#000000] ">
              {data.en.hero.title} 👋
            </h2>
            <h1 className="text-[42px] text-[#0A0A14] font-medium mt-3 relative z-50">
              {data.en.hero.description}
            </h1>
            <span className="absolute border rounded-md w-[148px] h-[31px] bg-secondColor left-[-10px] top-[95px] z-0"></span>
          </div>
          <footer className="flex flex-col items-start my-10">
            <div className="flex gap-5">
              <FontAwesomeIcon
                className="w-[34px] h-[36px]"
                icon={faLinkedinIn}
              />
              <FontAwesomeIcon className="w-[34px] h-[36px]" icon={faGithub} />
            </div>
            <p className="text-[18px] text-start w-9/12 mt-3 my-10">
              {data.en.hero.subDescription}
            </p>
          </footer>
        </div>
        <img
          className="w-[341px] mt-[60px] shadow-[-18px_-18px_0px_0px_rgba(233,37,119,1)] rounded-[30px]"
          src="../../src/assets/IntroducePhoto.svg"
        />
      </div>
    </section>
  );
}

export default Introduce;
