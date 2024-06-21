import { LoginProps, RegisterProps } from "@/Utils/types";
import axios from "axios";
import toast from "react-hot-toast";

export async function registerUser(registerProps: RegisterProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signup`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",

      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        email: registerProps.email,
        firstName: registerProps.firstName,
        lastName: registerProps.lastName,
        pseudo: registerProps.pseudo,
        city: registerProps.city,
        password: registerProps.password,
        promoCode: registerProps.promoCode,
        age: Number(registerProps.age),
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
      //   throw new Error(e);
    });
}

export async function login(loginProps: LoginProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}auth/signin`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  return axios
    .post(
      url,
      {
        email: loginProps.email,
        password: loginProps.password,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
      // return res;
    });
}
