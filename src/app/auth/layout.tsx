import { Container } from "@/ui/Container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-[100svh] bg-[#1C1C1D] w-full">
        <section
          className="w-full h-[302px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/image-cover-1.png')" }}
        ></section>
        <Container>
          <img
            src={"/rezerv-logo.svg"}
            alt="rezerv-logo"
            className="absolute size-[117px] md:size-[243px] md:top-[41px] md:left-[106px] right-4 top-7"
          />
        </Container>
        <Container
          variant={"largePadded"}
          className="max-w-screen-xl relative py-16 md:py-20 flex lg:flex-row flex-col max-lg:items-center gap-20 justify-between"
        >
          {children}
          <div className="hidden lg:flex flex-col gap-20 w-full lg:max-w-lg px-4">
            <h1 className="text-[#D9D9D9] text-wrap break-words md:leading-[70px] md:text-[60px] text-[32px] leading-[32px] tracking-wide uppercase">
              Analytical monitoring system
            </h1>
            <p className=" text-wrap break-words text-[#525252] tracking-tight md:text-lg">
              Централизованное отображение данных, полученных от разных
              интеграторов со всех филиалов и транслирование данных в реальном
              времени
            </p>
          </div>
          <span className="text-center absolute hidden bottom-3 left-2 md:absolute text-[#1C1C1D99] tracking-tight">
            © 2024 AMS. All rights reserved.
          </span>
        </Container>
      </main>
    </>
  );
}
