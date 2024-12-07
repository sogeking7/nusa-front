"use client";

import { Container } from "@/ui/Container";
import { Button } from "./button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WelcomePage = () => {
  const router = useRouter();
  return (
    <Container>
      <div className="h-[302px] relative px-0 md:mb-80">
        <Image
          width={243}
          height={243}
          src={"/rezerv-logo.svg"}
          alt="rezerv-logo"
          className="absolute w-[117px] h-[117px] md:w-[243px] md:h-[243px] md:top-[181px] md:left-[100px] right-4 top-7"
        />
        {/* <div className="absolute max-w-[447px] top-[53px] right-[40px] flex flex-col gap-[77px] text-wrap break-words"> */}
        <h1 className="text-[#D9D9D9] text-wrap break-words absolute top-[26px] left-[24px] max-w-[219px] md:max-w-[447px] md:top-[53px] md:right-[40px] md:left-auto md:leading-[70px] md:text-[60px] text-[32px] leading-[32px] tracking-wide uppercase">
          Analytical monitoring system
        </h1>
        <p className="absolute md:left-auto left-0 text-center right-0 top-[330px] md:max-w-[447px] md:text-left md:top-[340px] text-wrap break-words md:right-[40px] text-[#525252] tracking-tight md:text-lg">
          Централизованное отображение данных, полученных от разных интеграторов
          со всех филиалов и транслирование данных в реальном времени
        </p>
        {/* </div> */}
      </div>

      <div className="lg:px-20 flex justify-between mb-10">
        <h2 className="md:static absolute text-[#FFFFFF99] md:max-w-[448px] text-[10px] max-w-[250px] left-[24px] top-[140px] md:text-[#525252] md:text-base md:leading-[24px] text-wrap break-words">
          РГП на ПХВ «Резерв» Комитета по государственным материальным резервам
          Министерства по чрезвычайным ситуациям Республики Казахстан
        </h2>
        <Button
          onClick={() => router.push("/auth/login")}
          variant={"link"}
          size={"2xl"}
          className="absolute mx-8 left-0 right-0 top-[486px] md:static border border-[#525252] text-[#525252] hover:bg-[#525252] hover:text-white transition-all"
        >
          Вход
        </Button>
      </div>

      <div className="pb-9">
        <span className="text-center absolute bottom-3 left-0 right-0 md:static text-[#1C1C1D99] tracking-tight">
          © 2024 AMS. All rights reserved.
        </span>
      </div>
    </Container>
  );
};

export default WelcomePage;
