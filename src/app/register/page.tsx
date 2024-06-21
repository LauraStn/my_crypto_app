import { RegisterForm } from "@/Components/Forms/RegisterForm";
import React from "react";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between dark:bg-bitcoin bg-cover bg-no-repeat bg-fixed p-24">
      <RegisterForm />
    </main>
  );
};
export default page;
