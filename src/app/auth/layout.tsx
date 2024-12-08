import { Container } from "@/ui/Container";
import Image from "next/image";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section
        className="absolute w-full h-[215px] bg-cover bg-no-repeat bg-center"
        style={{ backgroundImage: "url('/image-cover-1.png')" }}
      ></section>
      <Container className="pb-10">
        <div className="relative px-0 md:mb-80">
          <Image
            width={243}
            height={243}
            src={"/rezerv-logo.svg"}
            alt="rezerv-logo"
            className="absolute w-[117px] h-[117px] md:w-[243px] md:h-[243px] md:top-[181px] md:left-[100px] right-4 top-7"
          />
        </div>
      </Container>
      <main className="min-h-[100svh] bg-[#1C1C1D] w-full flex justify-center items-center">
        {children}
      </main>
    </>
  );
}
