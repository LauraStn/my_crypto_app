import { CryptoProps } from "@/Utils/types";
import axios from "axios";

export async function getAllCryptos() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/all`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function createCrypto(cryptoProps: CryptoProps) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        name: cryptoProps.name,
        quantity: Number(cryptoProps.quantity),
        value: Number(cryptoProps.value),
        image: cryptoProps.image,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function buyCrypto(id: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/buy`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        id_crypto: id,
        amount: amount,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
      // throw new Error(e);
    });
}

export async function searchCrypto(name: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/search/${name}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function getCryptoHistory(crypto_id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/history/${crypto_id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/x-www-form-urlencoded;charset=utf-8",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .get(
      url,

      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function sellCrypto(id: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}crypto/sell`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(
      url,
      {
        id_crypto: id,
        amount: amount,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
      // throw new Error(e);
    });
}
