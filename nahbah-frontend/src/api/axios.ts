import axios from 'axios';

const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'http://127.0.0.1:8000',  // Fallback to local if not set
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;