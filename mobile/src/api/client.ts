import axios from 'axios';
const baseUrl = 'http://10.0.2.2:3000';

export default axios.create({
  baseURL: baseUrl,
});
