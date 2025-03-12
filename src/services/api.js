import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

const token = `eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbiIsImlhdCI6MTc0MTc0MTY2NCwiZXhwIjoxNzQxNzQ1MjY0fQ.vSoX4XRCgLcsbVDzew6V5AsyCsijf8AvDsIEg_yB8bI`;

api.interceptors.request.use(
    (config) => {

        //const token = localStorage.getItem('authToken');

        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
export default api;
