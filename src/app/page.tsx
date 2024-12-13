import { Button } from "@/components/ui/button";
import { Container } from "@/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] bg-[#CACACA]">
      <div
        className="absolute h-[250px] w-full bg-cover bg-center bg-no-repeat md:h-[302px]"
        style={{ backgroundImage: "url('/image-cover-1.png')" }}
      ></div>
      <Container
        variant={"largePadded"}
        className="relative min-h-[100svh] max-w-screen-xl"
      >
        <div className="relative flex h-[250px] flex-col justify-center gap-4 md:h-[302px] md:flex-row md:justify-end md:gap-0">
          <img
            src={"/logo-lg.png"}
            alt="rezerv-logo"
            className="absolute size-[117px] translate-y-1/3 max-md:right-0 max-md:top-0 md:bottom-0 md:left-0 md:size-[243px] md:translate-y-1/2"
          />
          <div className="flex flex-col justify-center text-[32px] uppercase leading-[32px] tracking-wide text-[#D9D9D9] md:w-[450px] md:text-[60px] md:leading-[70px]">
            <h1>Analytical</h1>
            <h1>monitoring</h1>
            <h1>system</h1>
          </div>
          <h2 className="text-[10px] text-[#FFFFFF99] md:hidden md:text-[#525252]">
            РГП на ПХВ «Резерв» Комитета <br />
            по государственным <br />
            материальным резервам Министерства <br />
            по чрезвычайным ситуациям Республики Казахстан
          </h2>
        </div>
        <div className="flex w-full justify-between gap-6 pt-[calc(243px/6)]">
          <div className="flex items-end max-md:hidden md:max-w-[450px]">
            <h2 className="text-[#FFFFFF99] md:text-lg md:text-[#525252]">
              РГП на ПХВ «Резерв» Комитета по государственным материальным
              резервам Министерства по чрезвычайным ситуациям Республики
              Казахстан
            </h2>
          </div>
          <div className="md:max-w-[450px] md:flex-shrink-0">
            <p className="mb-[80px] text-[#525252] max-md:text-center md:mb-[250px] md:text-lg">
              Централизованное отображение данных, полученных от разных
              интеграторов со всех филиалов и транслирование данных в реальном
              времени
            </p>
            <Link href={"/auth/login"}>
              <Button
                variant={"link"}
                className="h-12 w-full rounded-full border border-[#525252] px-10 py-5 text-sm text-[#525252] hover:bg-[#525252] hover:text-white hover:no-underline max-md:w-full md:h-16 md:max-w-sm md:text-base"
              >
                Вход
              </Button>
            </Link>
          </div>
        </div>
        <p className="absolute bottom-6 w-full text-sm tracking-tight text-[#1C1C1D99] max-md:left-0 max-md:text-center">
          © 2024 AMS. All rights reserved.
        </p>
      </Container>
    </div>
  );
}
