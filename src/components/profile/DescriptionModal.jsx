import { useContext } from "react";
import { userContext } from "../../context/userContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

function DescriptionModal() {
  const { data1 } = useContext(userContext);

  const closeDescription = () => {
    document.querySelector("dialog").close();
  };

  return (
    <dialog className="rounded-xl lg:w-4/6 p-7 font-inter font-semibold text-[16px] leading-6 bg-bg1 dark:bg-darkbg2 shadow-xl">
      <div className="flex flex-col  ">
        <div className="text-end">
          <p
            className="cursor-pointer dark:text-white"
            onClick={closeDescription}
          >
            <FontAwesomeIcon icon={faX} />
          </p>
        </div>
        <div className="mx-auto text-start lg:w-11/12 dark:text-white">
          <p className="text-center text-[25px] text-pink1 font-playfair dark:text-pink1">
            {data1.profile.aboutMe.title}
          </p>
          <hr className="border-t border-gray-300 my-4 dark:border-darkbg1" />
          <p>{data1.profile.aboutMe.description1}</p>
          <hr className="border-t border-gray-300 my-4 dark:border-darkbg1" />
          <p>{data1.profile.aboutMe.description2}</p>
        </div>
      </div>
    </dialog>
  );
}

export default DescriptionModal;
