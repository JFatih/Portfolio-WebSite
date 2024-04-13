import { data } from "./data";

function Footer() {
  return (
    <footer className="w-screen bg-white overflow-hidden relative pt-[50px] pb-[100px]">
      <section className="flex gap-10 justify-center">
        <p className="text-[42px] w-[30%]  text-end font-medium relative z-[50]">
          {data.en.footer.title}
          <span className="absolute border rounded-md w-[275px] h-[18px] bg-[#82BBFF] top-[44px] left-[150px] z-[-1]"></span>
        </p>
        <div className="flex flex-col text-start  text-[24px]">
          {Object.values(data.en.footer.accounts).map((data) => {
            return (
              <a
                href={data.link}
                key={data}
                className={`${data.color} font-medium`}
              >
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
