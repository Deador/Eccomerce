import axios from "axios";

export default class GetInfo {
    static async getTypes() {
        const response = await axios.get(
            "http://localhost:5000/api/type"
        );
        return response;
    }
}