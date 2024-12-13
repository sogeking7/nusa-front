import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] bg-[#CACACA]">
      <div
        className="absolute w-full h-[250px] md:h-[302px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/image-cover-1.png')" }}
      ></div>
      <Container
        variant={"largePadded"}
        className="max-w-screen-xl min-h-[100svh] relative "
      >
        <div className="h-[250px] md:h-[302px] relative flex gap-4 md:gap-0 md:flex-row flex-col justify-center md:justify-end">
          <img
            src={"/logo-lg.png"}
            alt="rezerv-logo"
            className="absolute size-[117px] md:size-[243px] max-md:top-0 max-md:right-0 md:bottom-0 md:left-0 translate-y-1/3 md:translate-y-1/2"
          />
          <div className="md:w-[450px] text-[#D9D9D9] flex flex-col justify-center md:leading-[70px] md:text-[60px] text-[32px] leading-[32px] tracking-wide uppercase">
            <h1>Analytical</h1>
            <h1>monitoring</h1>
            <h1>system</h1>
          </div>
          <h2 className="text-[#FFFFFF99] md:text-[#525252] text-[10px] md:hidden">
            РГП на ПХВ «Резерв» Комитета <br />
            по государственным <br />
            материальным резервам Министерства <br />
            по чрезвычайным ситуациям Республики Казахстан
          </h2>
        </div>
        <div className="flex w-full gap-6 justify-between pt-[calc(243px/6)]">
          <div className="md:max-w-[450px] flex items-end max-md:hidden">
            <h2 className="text-[#FFFFFF99] md:text-[#525252] md:text-lg">
              РГП на ПХВ «Резерв» Комитета по государственным материальным
              резервам Министерства по чрезвычайным ситуациям Республики
              Казахстан
            </h2>
          </div>
          <div className="md:max-w-[450px] md:flex-shrink-0">
            <p className="max-md:text-center text-[#525252] md:text-lg mb-[80px] md:mb-[250px]">
              Централизованное отображение данных, полученных от разных
              интеграторов со всех филиалов и транслирование данных в реальном
              времени
            </p>
            <Link href={"/auth/login"}>
              <Button
                variant={"link"}
                className="md:max-w-sm w-full border h-12 md:h-16 rounded-full py-5 px-10 text-sm md:text-base max-md:w-full border-[#525252] text-[#525252] hover:bg-[#525252] hover:text-white"
              >
                Вход
              </Button>
            </Link>
          </div>
        </div>
        <p className="text-sm max-md:text-center w-full max-md:left-0 absolute bottom-6 text-[#1C1C1D99] tracking-tight">
          © 2024 AMS. All rights reserved.
        </p>
      </Container>
    </div>
  );
}
