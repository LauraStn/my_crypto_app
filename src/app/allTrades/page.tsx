import TradeTable from "@/Components/TradeTable/TradeTable";
import React from "react";

const page = () => {
  return (
    <main className=" px-7 bg-bitcoin bg-cover bg-no-repeat bg-fixed p-4">
      <TradeTable min={0} max={99} isVisible={false} />
    </main>
  );
};
export default page;
