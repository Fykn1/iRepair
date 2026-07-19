import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://trainee.fidelis.workers.dev/api',
  withCredentials: false,
  headers: {
    'Authorization': 'Bearer 4a74fca2-618c-4a96-8a19-5d58339ca87a',
    'Content-Type': 'application/json',
  },
});