import axios from 'axios';

const api = axios.create({
    withCredentials: true,
    baseURL: 'https://localhost:8080',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    }
});

export const get = (data, url) => {
    return api.get(`${url}`, data)
        .then(res => res.data)
        .catch(err => console.log(err));
}

export const post = (data, url) => {
    return api.post(`${url}`, data)
        .then(res => res.data)
        .catch(err => console.log(err));
}