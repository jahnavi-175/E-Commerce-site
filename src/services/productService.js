import apiClient from "../api/apiClient"; 
import { mockProducts } from "../data/mockProducts";

const IS_DEV = true;

export const getAllProducts = async () => {
    if (IS_DEV) return mockProducts;
    const response = await apiClient.get("/products");
    return response.data;
};

export const getProductById = async (id) => {
    if (IS_DEV) return mockProducts.find((p) => p._id === id);
    const response = await apiClient.get(`/products/${id}`);
    return response.data;
};