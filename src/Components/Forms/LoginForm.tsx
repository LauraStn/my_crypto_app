"use client";
import { login } from "@/Service/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { push } = useRouter();

  async function handleSubmit() {
    setError("");

    if (!email || !password) {
      setError("All fields are required");
    } else {
      let loginData = {
        email: email,
        password: password,
      };

      const logged = await login(loginData);
      if (logged.status !== undefined) {
        if (typeof window !== "undefined") {
          window.localStorage.setItem("role", logged.data.user.Role.name);
          window.localStorage.setItem("token", logged.data.access_token);
          push("/crypto");
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      } else {
        toast.error("Wrong credentials !");
      }

      // try {
      //   login(loginData).then((res: any) => {
      //     if (res.status !== undefined) {
      //       if (typeof window !== "undefined") {
      //         window.localStorage.setItem("token", res.data.access_token);
      //         push("/crypto");
      //       }
      //     } else {
      //       toast.error("Wrong credentials !");
      //     }
      //   });
      // } catch (e) {
      //   setError("Credentials taken");
      // }
    }
  }

  return (
    <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md px-8 py-10 flex flex-col items-center">
      <h1 className="text-xl font-bold text-center text-gray-700 mb-8">
        Login to your account
      </h1>
      <form action="#" className="w-full flex flex-col gap-4">
        <div className="flex items-start flex-col justify-start">
          <label htmlFor="email" className="text-sm text-gray-700  mr-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-3 dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex items-start flex-col justify-start">
          <label htmlFor="password" className="text-sm text-gray-700  mr-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            required
            className="w-full px-3 dark:bg-white py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-sm"
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Login
        </button>
      </form>

      <div className="mt-4 text-center">
        <span className="text-sm text-gray-500">
          Don&apos;t have an account?
        </span>{" "}
        <Link href="/register">
          <button className="text-blue-500 hover:text-blue-600">
            Register
          </button>
        </Link>
      </div>
    </div>
  );
};
