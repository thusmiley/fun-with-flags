"use client";

import Filter from "@/components/Filter";
import Search from "@/components/Search";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <main className="min-h-screen px-4 mx-auto pt-6 pb-[65px]">
      <section className="space-y-10">
        <Search />
        <Filter />
      </section>
    </main>
  );
}
