import axios from 'axios';

const API_BASE_URL = 'http://localhost:8000/api';

export const api = {
  submitMood: async (data) => {
    const response = await axios.post(`${API_BASE_URL}/mood`, data);
    return response.data;
  },
  getHistory: async () => {
    const response = await axios.get(`${API_BASE_URL}/mood/history`);
    return response.data;
  }
};
