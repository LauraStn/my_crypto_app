import axios from "axios";

export async function getAllOffers() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/all`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
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

export async function updateOffer(
  id_offer: string,
  id_crypto: string,
  amount: number
) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/update/${id_offer}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(url, { id_crypto: id_crypto, amount: amount }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function createOffer(crypto_id: string, amount: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, { id_crypto: crypto_id, amount: amount }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function deleteOffer(crypto_id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}offer/delete/${crypto_id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .delete(url, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
