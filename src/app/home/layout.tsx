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
    <div className="full grid min-h-[100svh] grid-cols-[80px_1fr] grid-rows-[auto_1fr] bg-[#1C1C1D] pt-16 text-white">
      <div className="col-span-2">
        <AppHeader />
      </div>
      <div className="relative col-span-1 h-full max-md:hidden">
        <AppSidebar />
      </div>
      <div className="col-span-2 h-full md:col-span-1">
        <Container className="h-full py-6">{children}</Container>
      </div>
      <div className="col-span-2 md:col-span-1 md:hidden">
        <AppMobilebar />
      </div>
    </div>
  );
}
