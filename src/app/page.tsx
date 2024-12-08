import WelcomePage from "@/components/ui/Home";

export default function Home() {
  return (
    <>
      <div className="font-inter relative flex min-h-[100svh] flex-col bg-[#CACACA]">
        <div
          className="absolute w-full h-[215px] md:h-[302px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/image-cover-1.png')" }}
        ></div>
        <section className="bg-[#CACACA]">
          <WelcomePage />
        </section>
      </div>
    </>
  );
}
