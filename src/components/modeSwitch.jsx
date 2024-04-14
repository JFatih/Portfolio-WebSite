import { faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { data } from "../mocks/data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ModeSwitch = ({ toogleMode, darkMode }) => {
  return (
    <div className="my-[60px] flex justify-end w-[1000px] gap-2 mx-auto">
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          checked={darkMode}
          onChange={toogleMode}
        />
        <div className="w-11 h-6 bg-secondColor rounded-full dark:bg-[#000000] peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full    after:absolute after:top-0.5 after:start-[2px]  after:bg-secondColor dark:after:bg-black after:rounded-full after:h-5 after:w-5   flex justify-between items-center">
          <FontAwesomeIcon icon={faMoon} className="text-white pl-1" />
          <FontAwesomeIcon icon={faSun} className="text-[#FFE86E] pr-1" />
        </div>
        <span className="ms-3  font-[15px] text-[#777777] dark:text-[#D9D9D9]">
          {darkMode ? data.en.darkMode.on : data.en.darkMode.off}
        </span>
      </label>
      {"|"}
      <label>Dil türkçe</label>
    </div>
  );
};

export default ModeSwitch;
