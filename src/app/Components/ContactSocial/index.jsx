import Image from "next/image";

export default function ContactSocia() {
  return (
    <div className="flex gap-[48px] mt-[24px] justify-center w-full  ">
      <a
        href=""
        target="_blank"
        className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90"
      >
        <Image
          src="/images/icons/icon-linkedin.svg"
          width={35}
          height={35}
          alt="icon Linkedin"
        />
      </a>
      <a
        href=""
        target="_blank"
        className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90 "
      >
        <Image
          src="/images/icons/icon-instagram.svg"
          width={35}
          height={35}
          alt="icon Instagram"
        />
      </a>
      <a
        href=""
        target="_blank"
        className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90 "
      >
        <Image
          src="/images/icons/icon-behance.svg"
          width={35}
          height={35}
          alt="icon Behance"
        />
      </a>
      <a
        href="mailto:tony.querrec@gmail.com"
        target="_blank"
        className=" flex items-center justify-center border-[1.5px] border-black rounded-full w-[75px] h-[75px] transition-all duration-300 hover:scale-110 ease-in-out active:scale-90 "
      >
        <Image
          src="/images/icons/icon-mail.svg"
          width={35}
          height={35}
          alt="icon Mail"
        />
      </a>
    </div>
  );
}
