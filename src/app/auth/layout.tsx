import { Container } from "@/ui/Container";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="font-inter min-h-[100svh] bg-[#1C1C1D] w-full flex flex-col items-center">
        <section
          className="w-full h-[302px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/image-cover-1.png')" }}
        ></section>
        <Container>
          <Image
            width={243}
            height={243}
            src={"/rezerv-logo.svg"}
            alt="rezerv-logo"
            className="absolute w-[117px] h-[117px] md:w-[243px] md:h-[243px] md:top-[41px] md:left-[106px] right-4 top-7"
          />
          <h2 className="md:absolute hidden md:top-10 md:right-10 md:max-w-[448px] text-[10px] max-w-[250px] md:text-[#FFFFFF99] md:text-base md:leading-[24px] text-wrap break-words">
            РГП на ПХВ «Резерв» Комитета по государственным материальным
            резервам Министерства по чрезвычайным ситуациям Республики Казахстан
          </h2>
        </Container>
        <div className="relative w-full md:mt-20 flex items-start justify-center gap-[185px]">
          {children}
          <div className="hidden md:flex flex-col gap-20">
            <h1 className="text-[#D9D9D9] text-wrap break-words max-w-[219px] md:max-w-[447px] md:leading-[70px] md:text-[60px] text-[32px] leading-[32px] tracking-wide uppercase">
              Analytical monitoring system
            </h1>
            <p className="md:max-w-[447px] text-wrap break-words text-[#525252] tracking-tight md:text-lg">
              Централизованное отображение данных, полученных от разных
              интеграторов со всех филиалов и транслирование данных в реальном
              времени
            </p>
          </div>
          <span className="text-center absolute hidden bottom-3 left-2 md:absolute text-[#1C1C1D99] tracking-tight">
            © 2024 AMS. All rights reserved.
          </span>
        </div>
      </main>
    </>
  );
}
