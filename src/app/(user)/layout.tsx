import "@/app/globals.css";
export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="bg-blend-multiply bg-[url('/img/background.jpg')] bg-blue-300 h-screen w-full bg-center bg-no-repeat bg-cover flex items-center justify-center">
      {children}
    </main>
  );
}
