import NavBar from "@/components/NavBar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-zinc-900 flex flex-col min-h-screen text-gray-200">
      <NavBar />
      {children}
    </div>
  );
}