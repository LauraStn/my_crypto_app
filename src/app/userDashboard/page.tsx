"use client";

import UserDollarsCard from "@/Components/Cards/UserDollarsCard";
import { UserCryptoTable } from "@/Components/UserCryptoTable/UserCryptoTable";
import UserTradesTable from "@/Components/UserTrades/UserTradesTable";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center gap-4 justify-between bg-bitcoin dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <UserDollarsCard />
      <UserCryptoTable />
      <UserTradesTable />
    </main>
  );
};
export default page;
