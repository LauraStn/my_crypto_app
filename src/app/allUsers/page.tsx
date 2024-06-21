import UserTable from "@/Components/UserTable/UserTable";
import React from "react";
const page = () => {
  return (
    <main className=" px-7 bg-bitcoin bg-cover bg-no-repeat bg-fixed p-4">
      <UserTable min={0} max={99} isVisible={false} />
    </main>
  );
};

export default page;
