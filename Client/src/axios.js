import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

export const makeRequest=axios.create({
    baseURL: `${API_URL}/api/`,
    withCredentials: true,
})