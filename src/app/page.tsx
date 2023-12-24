import { Header } from "@/components/Header";
import { PlayGame } from "@/components/PlayGame";
import { Loader } from "@/components/loaderFire/loader";
import "./globals.css";
export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Loader />
      </main>
      <PlayGame />
    </>
  );
}
