import WelcomePage from "@/components/ui/Home";

export default function Home() {
  return (
    <>
      <div className="font-inter relative flex min-h-[100svh] flex-col bg-[#CACACA]">
        <section
          className="absolute w-full h-full lg:h-[302px] bg-cover bg-no-repeat bg-center"
          style={{ backgroundImage: "url('/image-cover-1.png')" }}
        ></section>
        <section>
          <WelcomePage />
        </section>
      </div>
    </>
  );
}
