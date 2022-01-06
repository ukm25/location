import axios from "axios"
export const getData = () => {
    return axios.get("https://provinces.open-api.vn/api/?depth=3");
}