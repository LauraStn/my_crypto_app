"use client";

import { CryptoProps } from "@/Utils/types";
import { useRouter } from "next/router";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { ErrorMsg } from "../Error/Error";
import Link from "next/link";
import { createCrypto } from "@/Service/crypto";

export const CryptoForm = () => {
  //   const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<CryptoProps>();

  const onSubmit: SubmitHandler<CryptoProps> = (data) =>
    createCrypto(data)
      .then((res) => {
        //   if (res.status !== undefined) {
        //     if (typeof window !== "undefined") {
        //       window.localStorage.setItem("token", res.data.access_token);
        //       push("/login");
        //     }
        //   } else {
        //     toast.error("Failed !");
        //   }
      })
      .catch((e) => toast.error(e));
  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-white  rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center text-gray-700 dark:text-black 0 mb-8">
        Create a crypto
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="name"
            className="text-sm text-gray-700 dark:text-black mr-2"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("name", { required: true })}
          />
          {errors.name && <ErrorMsg error={"Name"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="value"
            className="text-sm text-gray-700 dark:text-black mr-2"
          >
            Value:
          </label>
          <input
            type="number"
            id="value"
            className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("value", { valueAsNumber: true, required: true })}
          />{" "}
          {errors.value && <ErrorMsg error={"Value"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="quantity"
            className="text-sm text-gray-700 dark:text-black mr-2"
          >
            Quantity:
          </label>
          <input
            type="number"
            id="quantity"
            className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("quantity", { valueAsNumber: true, required: true })}
          />
          {errors.quantity && <ErrorMsg error={"Quantity"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="image"
            className="text-sm text-gray-700 dark:text-black mr-2"
          >
            Picture:
          </label>
          <input
            type="text"
            id="image"
            className="w-full px-3 dark:text-black dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("image", { required: true })}
          />
          {errors.image && <ErrorMsg error={"Image"} />}
        </div>
        <input
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-black font-medium py-2 px-4 rounded-md shadow-sm"
          value="Send"
        />
      </form>
    </div>
  );
};
