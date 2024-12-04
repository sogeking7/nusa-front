import HomePage from "@/components/ui/Home";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative flex min-h-[100svh] flex-col bg-[#CACACA]">
        <section
          className="absolute w-full h-[302px] bg-cover bg-no-repeat bg-center scale-x-[-1]"
          style={{ backgroundImage: "url('/top-background.jpeg')" }}
        ></section>
        <section>
          <HomePage />
        </section>
      </div>
    </>
  );
}
