"use client";

import React from "react";
import { OfferTable } from "@/Components/OfferTable/OfferTable";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-bitcoin dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <OfferTable />
    </main>
  );
};
export default page;
