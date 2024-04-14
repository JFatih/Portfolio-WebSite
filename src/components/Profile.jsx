import Ellipse2 from "../assets/Ellipse2.svg";
import { data } from "../mocks/data";

function Profile() {
  return (
    <section className="w-screen bg-[#F4F4F4] overflow-hidden relative dark:bg-[#2A262B] dark:text-white">
      <img
        className="absolute w-[120px] top-[-30px] right-[-35px]"
        src={Ellipse2}
      />
      <header>
        <p className="text-[36px] my-[50px] font-medium">
          {data.en.profile.mainTitle}
        </p>
      </header>
      <article className="w-4/6 flex justify-between mx-auto ">
        <div className="w-[508px] rounded-xl bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] p-[40px] mb-[100px] dark:bg-[#525252]">
          <header>
            <p className="text-secondColor text-start  text-[24px]">
              {data.en.profile.baseInfo.title}
            </p>
          </header>
          <div className="flex ">
            <div>
              {Object.values(data.en.profile.baseInfo.data).map((data) => {
                return (
                  <div
                    key={data.name}
                    className="flex flex-column text-start mt-[20px]"
                  >
                    <p className="w-1/2 font-semibold">{data.name}</p>
                    <p className="w-1/2">{data.value}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="w-[476px] p-[40px] text-start">
          <p className="text-[24px] mb-[20px] relative z-50">
            {data.en.profile.aboutMe.title}
            <span className="absolute rounded-md w-[90px] h-[18px] bg-[#82BBFF] left-[-10px] top-[20px] z-[-1]"></span>
          </p>
          <p className="text-[18px] mb-[15px]">
            {data.en.profile.aboutMe.description1}
          </p>
          <p className="text-[18px]">{data.en.profile.aboutMe.description2}</p>
        </div>
      </article>
    </section>
  );
}

export default Profile;
