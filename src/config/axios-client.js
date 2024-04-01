import axios from "axios";

const instance = axios.create();

instance.defaults.baseURL = "";

instance.defaults.headers = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export function getRequest(url, options) {
  return instance
    .get(`/${url}`, options)
    .then((response) => response)
    .catch((error) => error);
}

export function postRequest(url, payload, options) {
  return instance
    .post(`/${url}`, payload, options || {})
    .then((response) => response)
    .catch((error) => error);
}

export function putRequest(url, payload, options) {
  return instance
    .put(`/${url}`, payload, options || {})
    .then((response) => response)
    .catch((error) => error);
}

export function deleteRequest(url, payload, options) {
  return instance
    .delete(`/${url}`, payload, options || {})
    .then((response) => response)
    .catch((error) => error);
}
