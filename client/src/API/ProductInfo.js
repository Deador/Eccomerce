import axios from "axios";

export default class GetInfo {
    static async getTypes() {
        const response = await axios.get(
            "http://localhost:5000/api/type"
        );
        return response;
    }

    // Получить информацию по отдельному продукту
    static async getPageProduct(id) {
        const response = await axios.get(
            "http://localhost:5000/api/product/" + id
        );
        return response;
    }
}

export const crProduct = async (device) => {
    const response = await axios.post("http://localhost:5000/api/product", device)
}

export const getAllProduct = async () => {
    const response = await axios.get("http://localhost:5000/api/product");
    return response;
}

export const crType = async (type) => {
    const response = await axios.post("http://localhost:5000/api/type", type);
}

export const deleteProduct = async (id) => {
    const response = await axios.delete("http://localhost:5000/api/product/" + id);
    return response;
}

export const editProduct = async (device) => {
    const response = await axios.put("http://localhost:5000/api/product", device);
    return response;
}