import axios from "axios";
import { API_URL } from "../API_URL";

const getAll = () =>
  axios.get(`${API_URL}/chairs`).then((res) => {
    return res.data;
  });

const get = (id) =>
  axios.get(`${API_URL}/chairs/${id}`).then((res) => {
    return res.data;
  });

export default {
  getAll,
  get,
};
