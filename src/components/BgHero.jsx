import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import ModeSwitch from "./modeSwitch";
import { useSelector } from "react-redux";

function BgHero({ toogleMode, darkMode, navLan, changeLang }) {
  const { title, description, subDescription, specialWords } = useSelector(
    (store) => ({
      title: store.hero.title,
      description: store.hero.description,
      subDescription: store.hero.subDescription,
      specialWords: store.hero.specialWords,
    })
  );

  const formatText = (text) => {
    const trChars = "çğıöşüÇĞİÖŞÜ";
    const enChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

    const trPattern = new RegExp(
      `(?<=\\b|[${trChars}])(${specialWords.join("|")})(?=\\b|[^${trChars}])`,
      "gi"
    );
    const enPattern = new RegExp(
      `(?<=\\b|[${enChars}])(${specialWords.join("|")})(?=\\b|[^${enChars}])`,
      "gi"
    );
    const pattern =
      JSON.parse(localStorage.getItem("Language")) === "tr"
        ? trPattern
        : enPattern;

    return text.split(pattern).map((part, index) => {
      if (specialWords.includes(part)) {
        return (
          <span
            className={`text-pink1 ${index === 5 ? "underline" : ""}`}
            key={index}
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <section className="w-screen bg-bg1 overflow-hidden relative dark:bg-darkbg1 font-inter">
      <ModeSwitch
        toogleMode={toogleMode}
        darkMode={darkMode}
        navLan={navLan}
        changeLang={changeLang}
      />
      <span className="roundcircle border-[55px] border-[#D9D9D9] xl:left-[471px] left-[100px] top-[-40px]"></span>
      <span className="roundcircle w-[218px] h-[60px] bg-pink1 right-[-60px]  bottom-[9vw]"></span>
      <span className="roundcircle border-[60px] border-[#D9D9D9] dark:border-[#525252]  bottom-[-60px] right-[350px]"></span>
      <span className="roundcircle border-[40px] border-bg1 dark:border-darkbg1  bottom-[-40px] right-[370px]"></span>
      <div className="lg:w-8/12 w-9/12 2xl:w-[1107px] flex lg:justify-between items-center mx-auto dark:text-[#FFFFFF] mb-[6vw] xl:flex-row flex-col-reverse mt-[6vw] gap-4">
        <div className="flex flex-col lg:w-[610px] ">
          <div className="flex flex-col items-start text-start relative ">
            <h2 className="lg:text-[30px] sm:text[18px] text-[#000000] dark:text-[#FFFFFF]">
              {title} 👋
            </h2>
            <div className="relative">
              <h1 className="lg:text-[42px] sm:text[30px] text-[#0A0A14] dark:text-[#FFFFFF] font-medium mt-3 z-50 relative">
                {description}
              </h1>
              <span className="absolute rounded-md w-[9vw] h-[1.5vw] bg-pink1 left-[-10px] sm:top-[7.5vh] z-0 top-[28px]"></span>
            </div>
          </div>
          <footer className="flex flex-col items-start my-10">
            <div className="flex gap-5">
              <FontAwesomeIcon
                className="w-[34px] h-[36px]"
                icon={faLinkedinIn}
              />
              <FontAwesomeIcon className="w-[34px] h-[36px]" icon={faGithub} />
            </div>
            <p className="lg:text-[18px] text-start sm:w-9/12 mt-3 my-10 relative">
              {formatText(subDescription)}
            </p>
          </footer>
        </div>
        <img
          className="lg:w-[341px] w-[250px] shadow-[-18px_-18px_0px_0px_rgba(233,37,119,1)] rounded-[30px] relative"
          src="../../src/assets/IntroducePhoto.svg"
        />
      </div>
    </section>
  );
}

export default BgHero;
