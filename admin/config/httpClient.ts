import axios from "axios";

const apiUrl = 'http://host.docker.internal:3002'

export const httpClient = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
  withCredentials: true,
})
