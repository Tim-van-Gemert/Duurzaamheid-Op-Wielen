"use client"
import { React } from "react";
import Hero from './components/modules/hero';

export default function Home() {
  return (
    <main className="flex flex-col h-full min-h-screen overflow-hidden">
      <Hero />
    </main>
  );
}
