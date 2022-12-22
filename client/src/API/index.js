import axios from "axios";

const $host = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

const $authHost = axios.create({
    baseURL: process.env.REACT_APP_API_URL
});

export const authInterceptop = config => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};


// Для инстанса authHost добавляю интерцептор, который будет подставлять токен перед каждым запросом в header authorization
$authHost.interceptors.request.use(authInterceptop)

export {$host, $authHost};