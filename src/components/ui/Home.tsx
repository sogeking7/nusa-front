"use client";

import { Container } from "@/ui/Container";
import { Button } from "./button";
import Image from "next/image";
import { useRouter } from "next/navigation";

const WelcomePage = () => {
  const router = useRouter();
  return (
    <>
      <Container className="h-[302px] relative px-0 mb-96">
        <Image
          width={243}
          height={243}
          src={"/rezerv-logo.svg"}
          alt="rezerv-logo"
          className="absolute top-[181px] left-[100px]"
        />
        <div className="absolute max-w-[447px] top-[53px] right-[40px] flex flex-col gap-[77px] text-wrap break-words">
          <h1 className="text-[#D9D9D9] leading-[70px] text-[60px] tracking-wide uppercase">
            Analytical monitoring system
          </h1>
          <p className="text-[#525252] tracking-tight text-lg">
            Централизованное отображение данных, полученных от разных
            интеграторов со всех филиалов и транслирование данных в реальном
            времени
          </p>
        </div>
      </Container>

      <Container className="lg:px-20 flex justify-between mb-10">
        <h2 className="max-w-[448px] text-[#525252] text-base leading-[24px] break-words">
          РГП на ПХВ «Резерв» Комитета по государственным материальным резервам
          Министерства по чрезвычайным ситуациям Республики Казахстан
        </h2>
        <Button
          onClick={() => router.push("/auth/login")}
          variant={"link"}
          size={"2xl"}
          className=" border border-[#525252] text-[#525252] hover:bg-[#525252] hover:text-white transition-all"
        >
          Вход
        </Button>
      </Container>

      <Container className="pb-9">
        <span className="text-[#1C1C1D99] tracking-tight">
          © 2024 AMS. All rights reserved.
        </span>
      </Container>
    </>
  );
};

export default WelcomePage;
