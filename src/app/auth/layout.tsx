import { Container } from "@/ui/Container";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <main className="min-h-[100svh] w-full bg-[#1C1C1D]">
        <section
          className="h-[302px] w-full bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/image-cover-1.png')" }}
        ></section>
        <Container>
          <img
            src={"/rezerv-logo.svg"}
            alt="rezerv-logo"
            className="absolute right-4 top-7 size-[117px] md:left-[106px] md:top-[41px] md:size-[243px]"
          />
        </Container>
        <Container
          variant={"largePadded"}
          className="relative flex max-w-screen-xl flex-col justify-between gap-20 py-16 max-lg:items-center md:py-20 lg:flex-row"
        >
          {children}
          <div className="hidden w-full flex-col gap-20 px-4 lg:flex lg:max-w-lg">
            <h1 className="text-wrap break-words text-[32px] uppercase leading-[32px] tracking-wide text-[#D9D9D9] md:text-[60px] md:leading-[70px]">
              Analytical monitoring system
            </h1>
            <p className="text-wrap break-words tracking-tight text-[#525252] md:text-lg">
              Централизованное отображение данных, полученных от разных
              интеграторов со всех филиалов и транслирование данных в реальном
              времени
            </p>
          </div>
          <span className="absolute bottom-3 left-2 hidden text-center tracking-tight text-[#1C1C1D99] md:absolute">
            © 2024 AMS. All rights reserved.
          </span>
        </Container>
      </main>
    </>
  );
}
