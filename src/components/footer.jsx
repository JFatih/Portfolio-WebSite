import { useSelector } from "react-redux";

function Footer() {
  const { title, accounts } = useSelector((store) => ({
    title: store.footer.title,
    accounts: store.footer.accounts,
  }));
  return (
    <footer className="w-screen bg-white overflow-hidden relative pt-[50px] pb-[100px] dark:bg-[#484148] dark:text-white">
      <section className="flex gap-10 justify-center">
        <p className="text-[42px] w-[30%]  text-end font-medium relative z-[50]">
          {title}
          <span className="absolute rounded-md w-[275px] h-[18px] bg-[#82BBFF] top-[44px] left-[150px] z-[-1]"></span>
        </p>
        <div className="flex flex-col text-start  text-[24px] [&>*:nth-child(1)]:text-[#1769FF] [&>*:nth-child(3)]:text-[#0077B5] [&>*:nth-child(4)]:text-[#AF0C48] dark:[&>*:nth-child(2)]:text-white">
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
