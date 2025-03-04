import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Container } from "@/ui/Container";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative min-h-[100svh] bg-[#CACACA]">
      <div className="absolute h-[250px] w-full bg-main-page-mobile bg-cover bg-center bg-no-repeat md:h-[300px] md:bg-main-page-desktop"></div>
      <Container className="relative min-h-[100svh] max-w-screen-lg">
        <div className="relative flex h-[250px] flex-col justify-center gap-4 md:h-[300px] md:flex-row md:justify-end md:gap-0">
          {/* <img
            src={"/rezerv-logo.svg"}
            alt="rezerv-logo"
            className={cn(
              "size-24 md:size-44",
              "absolute translate-y-1/3 max-md:right-0 max-md:top-0 md:bottom-0 md:left-0 md:translate-y-1/2",
            )}
          /> */}
          {/* <div className="flex w-full max-w-sm flex-col justify-center text-3xl uppercase text-[#D9D9D9] md:text-5xl md:leading-snug">
            <h1>Analytical</h1>
            <h1>monitoring</h1>
            <h1>system</h1>
          </div> */}
          <h2 className="text-xs text-[#FFFFFF99] md:hidden md:text-[#525252]">
            РГП на ПХВ «Резерв» Комитета <br />
            по государственным <br />
            материальным резервам Министерства <br />
            по чрезвычайным ситуациям Республики Казахстан
          </h2>
        </div>
        <div className="flex w-full justify-center gap-12 pt-10 md:justify-between">
          <div className="flex items-end max-md:hidden md:max-w-[390px]">
            <h2 className="text-sm text-[#FFFFFF99] md:text-[#525252]">
              РГП на ПХВ «Резерв» Комитета по государственным материальным
              резервам Министерства по чрезвычайным ситуациям Республики
              Казахстан
            </h2>
          </div>
          <div className="w-full max-w-sm md:flex-shrink-0">
            <p className="mb-24 max-w-sm text-sm text-[#525252] max-sm:text-center">
              Централизованное отображение данных, полученных от разных
              интеграторов со всех филиалов и транслирование данных в реальном
              времени
            </p>
            <Link href={"/auth/login"}>
              <Button
                variant={"link"}
                className={cn(
                  "border border-[#525252] text-sm text-[#525252] hover:bg-[#525252] hover:text-white",
                  "w-full max-w-sm",
                )}
              >
                Вход
              </Button>
            </Link>
          </div>
        </div>
        <p className="absolute bottom-6 left-0 w-full text-xs tracking-tight text-[#1C1C1D99] max-md:text-center md:px-6 lg:px-8">
          © 2024 AMS. All rights reserved.
        </p>
      </Container>
    </div>
  );
}
