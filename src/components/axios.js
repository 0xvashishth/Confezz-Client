import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://confezz-server.onrender.com/',
});

export default instance;