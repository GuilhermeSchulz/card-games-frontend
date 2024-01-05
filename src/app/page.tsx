"use client";
import { Header } from "@/components/Header";
import { PlayGame } from "@/components/PlayGame";
import { Loader } from "@/components/loaderFire/loader";
import { Service } from "@/controller/Service.controller";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import "./globals.css";
export default function Home() {
  const api = new Service();
  const router = useRouter();
  // console.log(cards);
  async function getTheCards() {
    const cards = await api.getCards();
    console.log(cards);
  }
  useEffect(() => {
    getTheCards();
  }, []);
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
