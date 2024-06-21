import axios from "axios";

export async function getAllPromoCodes() {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/all`;

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

export async function createPromoCode(name: string, value: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/create`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .post(url, { name: name, value: value }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}

export async function deletePromoCode(id: string) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/delete/${id}`;

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

export async function updatePromoCode(id: string, name: string, value: number) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}promoCode/update/${id}`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  return axios
    .patch(url, { name: name, value: value }, axiosConfig)
    .then((res) => {
      return res;
    })
    .catch((e) => {
      return e;
    });
}
