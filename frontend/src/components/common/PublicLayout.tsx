import LightDarkSelector from "./LightDarkSelector";

export function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col md:flex-row md:overflow-hidden">
      <div className="flex-grow flex flex-col md:overflow-y-auto">
        <header className="p-5 border border-solid border-b-gray-300">
          <div className="flex items-center gap-3">
            <div className="flex-1"></div>
            <LightDarkSelector />
          </div>
        </header>
        <main className="flex-grow p-6">{children}</main>
      </div>
    </div>
  );
}
