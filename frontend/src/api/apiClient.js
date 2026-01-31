import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://e-commerce-backend-rxb0.onrender.com",
});

export default apiClient;

