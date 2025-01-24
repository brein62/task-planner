import Header from "@/components/common/Header";
import SidebarNav from "@/components/common/sidebar/SidebarNav";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SidebarNav />
      </div>
      <div className="flex-grow flex flex-col md:overflow-y-auto">
        <Header />
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
