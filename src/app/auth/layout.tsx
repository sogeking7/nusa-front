import { cn } from "@/lib/utils";
import { Container } from "@/ui/Container";
import Link from "next/link";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-[100svh] w-full bg-[#1C1C1D]">
      <div className="absolute h-[215px] w-full bg-main-page-mobile bg-cover bg-center bg-no-repeat md:h-[300px] md:bg-main-page-desktop"></div>
      <Container className="relative h-[215px] max-w-screen-lg md:h-[300px]">
        <Link href="/">
          <img
            src={"/rezerv-logo.svg"}
            alt="rezerv-logo"
            className={cn(
              "size-24 md:size-44",
              "absolute max-md:right-4 max-md:top-0 max-md:translate-y-1/3 md:left-6 md:top-1/2 md:-translate-y-1/2",
            )}
          />
        </Link>
      </Container>
      <Container className="relative flex max-w-screen-lg justify-between gap-20 pt-10 max-md:flex-col max-md:items-center">
        {children}
        <div className="max-w-lg max-md:hidden">
          <h1 className="text-wrap break-words text-5xl uppercase leading-snug tracking-wide text-[#D9D9D9]">
            Analytical monitoring system
          </h1>
          <p className="mt-12 text-sm text-[#525252]">
            Централизованное отображение данных, полученных от разных
            интеграторов со всех филиалов и транслирование данных в реальном
            времени
          </p>
        </div>
      </Container>
    </div>
  );
}
