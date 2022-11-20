import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://Confezz-Server.vashishth-patel.repl.co',
});

export default instance;