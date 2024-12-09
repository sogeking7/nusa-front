import AppHeader from "@/components/layouts/app-header";

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid w-full min-h-screen bg-[#1C1C1D] text-white">
      <AppHeader />
      {children}
    </div>
  );
}
