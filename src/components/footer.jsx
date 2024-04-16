import { useSelector } from "react-redux";

function Footer() {
  const { title, accounts } = useSelector((store) => ({
    title: store.footer.title,
    accounts: store.footer.accounts,
  }));
  return (
    <footer className="w-screen bg-white overflow-hidden relative pt-[50px] pb-[100px] dark:bg-darkbg2 dark:text-white">
      <section className="flex md:flex-row flex-col gap-10 justify-center items-center 2xl:w-[1300px] mx-auto">
        <p className="sm:text-[42px] text-[30px] sm:w-[500px] w-9/12 text-end font-medium relative z-[50] ">
          {title}
          <span className="absolute rounded-md w-[250px] h-[18px] bg-[#82BBFF] top-[3vw] right-[0px] z-[-1]"></span>
        </p>
        <div className="flex md:flex-col md:gap-0 text-start gap-2 text-[24px] footerlinkbg flex-wrap justify-center">
          {Object.values(accounts).map((data, index) => {
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
