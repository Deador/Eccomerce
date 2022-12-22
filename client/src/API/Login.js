import axios from "axios";
import {$authHost, $host} from "./index";
import jwtDecode from "jwt-decode";

// Регистрация летит на бэк
export const registration = async (email, password) => {
    const response = await $host.post("api/user/registration", {email, password, role: "ADMIN"});
    localStorage.setItem("token", response.data.token) // Токен добавляю в локал
    return jwtDecode(response.data.token); // На клиент возвращаю расшифрованный токен (содержит id, email, роль) с помощью jwtDecode
};

export const login = async (email, password) => {
    const response = await $host.post("api/user/login", {email, password});
    localStorage.setItem("token", response.data.token)
    return jwtDecode(response.data.token);
};

// Проверка токена на валидность при перезагрузки страницы
export const check = async () => {
    const response = await $authHost.post("api/user/auth");
    localStorage.setItem("token", response.data.token)
    return jwtDecode(response.data.token);
};