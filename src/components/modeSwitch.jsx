import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/action/DataAction";

const ModeSwitch = ({ toogleMode, darkMode, navLan, changeLang }) => {
  const dispatch = useDispatch();
  const { language, darkMode1, specialWords } = useSelector((store) => ({
    language: store.language,
    darkMode1: store.darkMode1,
    specialWords: store.language.specialWords,
  }));

  const languageHandler = () => {
    dispatch(changeLanguage(language.changedata));
    changeLang(language.changedata);
  };

  const formatText = (text) => {
    const trPattern = new RegExp(
      `(?<=\\b)(${specialWords.join("|")})(?=\\b)`,
      "gi"
    );
    const enPattern = new RegExp(
      `(?<=\\b)(${specialWords.join("|")})(?=\\b)`,
      "gi"
    );
    const pattern =
      JSON.parse(localStorage.getItem("Language")) === "tr"
        ? trPattern
        : enPattern;

    return text.split(pattern).map((part, index) => {
      if (specialWords.includes(part.toUpperCase())) {
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
    <div className="my-[4vh] 2xl:w-[1107px] flex lg:justify-end w-8/12 gap-2 mx-auto relative z-50 lg:text-[15px] text-[12px]  text-[#777777] dark:text-[#D9D9D9] justify-center ">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={toogleMode}
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
        <span className="ms-3">{darkMode ? darkMode1.on : darkMode1.off}</span>
      </label>

      <button onClick={languageHandler}>| {formatText(language.name)}</button>
    </div>
  );
};

export default ModeSwitch;
