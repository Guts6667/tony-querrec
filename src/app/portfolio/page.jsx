export default function Reportage() {
  return (
    <main className="flex min-h-screen flex-col gap-[48px] items-center sm:items-start xl:ml-[360px] mt-[48px] ">
      {/* <h1 className="text-[36px] text-center self-center">Portfolio</h1> */}

      <div className="flex flex-col gap-[24px] mt-[48px]">
        <span className="text-[24px]">Portfolio Fine-Arts :</span>

        <div className="flex gap-[24px] ">
          <a
            href="/portfolios/PORTFOLIO FINE ART_TONY QUERREC_2026.pdf"
            download={"/portfolios/PORTFOLIO FINE ART_TONY QUERREC_2026.pdf"}
            className="text-[24px] mt-[48px] px-[48px] py-[12px] border-solid border-[2px] border-black w-fit self-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 ease-in-out active:scale-90"
          >
            Télécharger{" "}
          </a>
          <a
            href="/portfolios/PORTFOLIO FINE ART_TONY QUERREC_2026.pdf"
            target="_blank"
            rel="noopener"
            className="text-[24px] mt-[48px] px-[48px] py-[12px] border-solid border-[2px] border-black w-fit self-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 ease-in-out active:scale-90"
          >
            Voir Portfolio{" "}
          </a>
        </div>
      </div>
      <div className="border-solid border-b-[1.5px] border-black w-[100%] xl:w-[50%] "></div>
      <div className="flex flex-col gap-[24px] ">
        <span className="text-[24px]">Portfolio Portraits :</span>
        <div className="flex gap-[24px]">
          <a
            href="/portfolios/PORTFOLIO FINE ART_TONY QUERREC_2026.pdf"
            download={"/portfolios/PORTFOLIO PORTRAITS_TONY QUERREC_2026.pdf"}
            className="text-[24px] mt-[48px] px-[48px] py-[12px] border-solid border-[2px] border-black w-fit self-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 ease-in-out active:scale-90"
          >
            Télécharger{" "}
          </a>
          <a
            href="/portfolios/PORTFOLIO PORTRAITS_TONY QUERREC_2026.pdf"
            target="_blank"
            rel="noopener"
            className="text-[24px] mt-[48px] px-[48px] py-[12px] border-solid border-[2px] border-black w-fit self-center hover:bg-black hover:text-white transition-all duration-300 hover:scale-110 ease-in-out active:scale-90"
          >
            Voir Portfolio{" "}
          </a>
        </div>
      </div>
    </main>
  );
}
