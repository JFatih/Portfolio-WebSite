import { useSelector } from "react-redux";

function Profile() {
  const { mainTitle, baseInfo, aboutMe } = useSelector((store) => ({
    mainTitle: store.profile.mainTitle,
    baseInfo: store.profile.baseInfo,
    aboutMe: store.profile.aboutMe,
  }));

  return (
    <section className="w-screen bg-bg1 overflow-hidden relative dark:bg-darkbg1 dark:text-white font-inter">
      <span className="roundcircle border-[60px] border-pink1 dark:border-pink1  top-[-30px] right-[-35px]"></span>
      <span className="roundcircle border-[40px] border-bg1 dark:border-darkbg1  top-[-10px] right-[-15px]"></span>
      <header>
        <p className="text-[36px] mt-[10vh] font-medium">{mainTitle}</p>
      </header>
      <article className="lg:w-4/6 w-5/6 2xl:w-[1107px] flex gap-5 mx-auto lg:flex-row flex-col my-[10vh] justify-center">
        <div className="xl:w-[508px] lg:w-6/12  rounded-xl bg-white shadow-[10px_10px_0px_0px_rgba(0,0,0,0.3)] p-[40px]  dark:bg-[#525252]">
          <header>
            <p className="text-pink1 text-start  text-[24px] font-playfair">
              {baseInfo.title}
            </p>
          </header>
          <div className="flex ">
            <div>
              {Object.values(baseInfo.data).map((data, index) => {
                return (
                  <div
                    key={index}
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
        <div className="xl:w-[476px] lg:w-6/12 p-[40px] text-start">
          <p className="text-[24px] mb-[20px] relative z-50 font-playfair">
            {aboutMe.title}
            <span className="absolute rounded-md w-[90px] h-[18px] bg-[#82BBFF] left-[-10px] top-[20px] z-[-1]"></span>
          </p>
          <p className="text-[18px] mb-[15px]">{aboutMe.description1}</p>
          <p className="text-[18px]">{aboutMe.description2}</p>
        </div>
      </article>
    </section>
  );
}

export default Profile;
