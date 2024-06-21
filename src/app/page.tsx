"use client";

import AccordionExpandDefault from "@/Components/Accordion/Accordion";
import AdminCodeTable from "@/Components/AdminPromoCode/AdminCodeTable";
import { PromoCodeProps } from "@/Utils/types";

export default function Home(promoCode: PromoCodeProps) {
  return (
    <main className="flex min-h-screen dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed flex-col items-center justify-between p-24">
      <h1 className="overscroll-none text-2xl font-bold bg-gradient-to-r from-cyan-300 to-lime-400 bg-clip-text text-transparent">
        Welcome to CrypToo, the best website for trading cryptocurrency !
      </h1>
    </main>
  );
}
