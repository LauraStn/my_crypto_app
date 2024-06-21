"use client";
import { registerUser } from "@/Service/auth";
import { RegisterProps } from "@/Utils/types";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { ErrorMsg } from "../Error/Error";
import toast from "react-hot-toast";

export const RegisterForm = () => {
  const { push } = useRouter();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<RegisterProps>();

  const onSubmit: SubmitHandler<RegisterProps> = (data) =>
    registerUser(data)
      .then((res: any) => {
        if (res.status !== undefined) {
          push("/login");
        } else {
          toast.error(res.response.data.message);
        }
      })
      .catch((e) => toast.error(e));
  return (
    <div className="max-w-lg mx-auto bg-white dark:bg-white  rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center text-gray-700  0 mb-8">
        Create an account
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-4"
      >
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="firstName" className="text-sm text-gray-700  mr-2">
            First Name:
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full px-3  dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("firstName", { required: true })}
          />
          {errors.firstName && <ErrorMsg error={"first name"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="lastName" className="text-sm text-gray-700  mr-2">
            Last Name:
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full px-3  dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("lastName", { required: true })}
          />{" "}
          {errors.lastName && <ErrorMsg error={"last name"} />}
        </div>
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="age" className="text-sm text-gray-700  mr-2">
            Age:
          </label>
          <input
            type="number"
            id="age"
            className="w-full px-3  dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("age", { required: true })}
          />{" "}
          {errors.age && <ErrorMsg error={"age"} />}
        </div>
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="pseudo" className="text-sm text-gray-700  mr-2">
            Pseudo:
          </label>
          <input
            type="text"
            id="pseudo"
            className="w-full px-3  dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("pseudo", { required: true })}
          />
          {errors.pseudo && <ErrorMsg error={"pseudo"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="city" className="text-sm text-gray-700  mr-2">
            City:
          </label>
          <input
            type="text"
            id="city"
            className="w-full px-3  dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("city", { required: true })}
          />
          {errors.city && <ErrorMsg error={"city"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="email" className="text-sm text-gray-700  mr-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className="w-full px-3  dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("email", { required: true })}
          />
          {errors.email && <ErrorMsg error={"email"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="password" className="text-sm text-gray-700  mr-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className="w-full px-3  dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("password", { required: true })}
          />
          {errors.password && <ErrorMsg error={"password"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label
            htmlFor="confirmPassword"
            className="text-sm text-gray-700  mr-2"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmPassword"
            className="w-full px-3 dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("confirmPassword", {
              required: true,
              validate: (value) =>
                value === watch("password") || "The passwords do not match",
            })}
          />
          {errors.password && <ErrorMsg error={"confirm password"} />}
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="promoCode" className="text-sm text-gray-700 mr-2">
            Code Promo:
          </label>
          <input
            type="text"
            id="promoCode"
            className="w-full px-3 dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            {...register("promoCode", { required: false })}
          />
        </div>
        <input
          type="submit"
          className="bg-blue-500 cursor-pointer hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          value="Register"
        />
      </form>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500 ">Already have an account?</span>{" "}
        <Link href="/login">
          <button className="text-blue-500 hover:text-blue-600"> Login</button>
        </Link>
      </div>
    </div>
  );
};
