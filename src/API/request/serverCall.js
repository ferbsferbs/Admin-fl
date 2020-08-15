import { BASE_URL_API_DEV } from "../../utils/constants";

export async function postRequest(path, obj) {
  let params = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(obj),
  };

  return await fetch(BASE_URL_API_DEV + path, params).then((res) => {
    return res.headers.get("token");
  });
}

export async function getRequest(path) {
  let obj = {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
  };
  console.warn(obj);
  return await fetch(BASE_URL_API_DEV + path, obj)
    .then((res) => res.json())
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
}

export async function postRequestToken(path, obj) {
  if (localStorage.getItem("token") == null) {
    return Promise.reject("Sin Token");
  }
  let params = {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(obj),
  };

  return await fetch(BASE_URL_API_DEV + path, params).then((res) => {
    return res.headers.get("token");
  });
}
export async function putRequestToken(path, obj) {
  if (localStorage.getItem("token") == null) {
    return Promise.reject("Sin Token");
  }
  let params = {
    method: "PUT",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(obj),
  };

  return await fetch(BASE_URL_API_DEV + path, params).then((res) => {
    return res.headers.get("token");
  });
}
export async function deleteRequestToken(path, obj) {
  if (localStorage.getItem("token") == null) {
    return Promise.reject("Sin Token");
  }
  let params = {
    method: "DELETE",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
    body: JSON.stringify(obj),
  };

  return await fetch(BASE_URL_API_DEV + path, params).then((res) => {
    return res.headers.get("token");
  });
}


export async function getRequestToken(path) {
  if (localStorage.getItem("token") == null) {
    return Promise.reject("Sin Token");
  }
  let obj = {
    method: "GET",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  return await fetch(BASE_URL_API_DEV + path, obj)
    .then((res) => res.json())
    .then((res) => Promise.resolve(res))
    .catch((err) => Promise.reject(err));
}
