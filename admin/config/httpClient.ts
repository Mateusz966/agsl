import axios from "axios";

const apiUrl = 'http://localhost:3000/v1'

export const httpClient = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  withCredentials: true,
})
