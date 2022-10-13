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
    const data = await axios.post("http://localhost:5000/api/product", device)
}

export const getAllProduct = async () => {
    const data = await axios.get("http://localhost:5000/api/product");
    return data;
}