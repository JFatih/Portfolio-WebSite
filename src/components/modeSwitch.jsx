import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { userContext } from "../context/userContext";
import { toast } from "react-toastify";

const ModeSwitch = () => {
  const { toggleMode, darkMode, changeLang, data1, language } =
    useContext(userContext);

  const languageHandler = () => {
    changeLang(data1.language.changedata);
    toast(
      language === "tr"
        ? "Türkçe Diline Başarıyla Çevrildi"
        : "Successfully Translated to English"
    );
  };

  const formatText = (text) => {
    const trPattern = new RegExp(
      `(?<=\\b)(${data1.language.specialWords.join("|")})(?=\\b)`,
      "gi"
    );
    const enPattern = new RegExp(
      `(?<=\\b)(${data1.language.specialWords.join("|")})(?=\\b)`,
      "gi"
    );
    const pattern =
      JSON.parse(localStorage.getItem("Language")) === "tr"
        ? trPattern
        : enPattern;

    return text.split(pattern).map((part, index) => {
      if (data1.language.specialWords.includes(part.toUpperCase())) {
        return (
          <span className={`text-red-500`} key={index}>
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="my-[4vh] 2xl:w-8/12 flex lg:justify-between lg:flex-row w-9/12 gap-2 mx-auto relative z-50 lg:text-[15px] text-[12px]  text-[#777777] dark:text-[#D9D9D9] flex-col-reverse justify-center items-center">
      <a
        href="https://drive.google.com/file/d/1yqKAsbGGU-CMD1dYay-FUHgSvmTojVOd/view?usp=sharing"
        className=" rounded-full py-1 px-3 bg-pink1 dark:bg-[#D9D9D9] dark:text-pink1 text-white font-semibold"
      >
        {data1.dowloadCv.name}
      </a>
      <div className="flex gap-1">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            className="sr-only peer"
            checked={darkMode}
            onChange={toggleMode}
          />
          <div className="w-11 h-6 bg-pink1 rounded-full dark:bg-[#000000] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full after:absolute   after:bg-pink1 dark:after:bg-black after:rounded-full    flex justify-between items-center ">
            <FontAwesomeIcon
              icon={faMoon}
              className="pl-1 text-pink1 dark:text-white"
            />
            <FontAwesomeIcon
              icon={faSun}
              className="text-[#FFE86E] dark:text-black pr-1"
            />
          </div>
          <span className="ms-3">
            {darkMode ? data1.darkMode1.on : data1.darkMode1.off}
          </span>
        </label>
        <span>|</span>
        <button onClick={languageHandler}>
          {formatText(data1.language.name)}
        </button>
      </div>
    </div>
  );
};

export default ModeSwitch;
