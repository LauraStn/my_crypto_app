import axios from "axios";

export async function buyOffer(id_offer: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, { id_offer: id_offer }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function getAllTrades() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}trade/all`;

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
