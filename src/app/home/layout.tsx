import AppHeader from "@/components/layouts/AppHeader";
import { AppMobilebar } from "@/components/layouts/AppMobilebar";
import { AppSidebar } from "@/components/layouts/AppSidebar";
import { Container } from "@/ui/Container";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-cols-[104px_1fr] lg:grid-cols-[120px_1fr] grid-rows-[90px_1fr_90px] w-full min-h-screen bg-[#1C1C1D] text-white">
      <div className="col-span-2">
        <AppHeader />
      </div>
      <div className="col-span-1 max-md:hidden">
        <AppSidebar />
      </div>
      <div className="col-span-2 md:col-span-1">
        <Container variant={"largePadded"} className="py-6 lg:py-8">
          {children}
        </Container>
      </div>
      <div className="col-span-2 md:hidden">
        <AppMobilebar />
      </div>
    </div>
  );
}
