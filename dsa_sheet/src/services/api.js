import axios from 'axios';

const API_URL = 'http://localhost:8000/api';

export const api = {
  getProblems: async (params = {}) => {
    const response = await axios.get(`${API_URL}/problems/`, { params });
    return response.data;
  },
  
  getStats: async () => {
    const response = await axios.get(`${API_URL}/stats/`);
    return response.data;
  },
  
  toggleProblem: async (id) => {
    const response = await axios.post(`${API_URL}/problems/${id}/toggle`);
    return response.data;
  }
};