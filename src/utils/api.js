import axios from 'axios';

let api = axios.create({
    // baseURL: 'http://localhost:5698',
    baseURL: 'https://backend-hackhaton-2023.vercel.app',
    timeout: 10000
})

export { api }