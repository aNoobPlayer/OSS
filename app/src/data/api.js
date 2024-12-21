import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const fetchPhong = async () => {
  try {
    const response = await axios.get(`${API_URL}/phongs`);
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error.response?.data || error.message);
    throw error;
  }
};

export const createPhong = async (phong) => {
  try {
    await axios.post(`${API_URL}/phongs`, phong);
  } catch (error) {
    console.error('Create error:', error.response?.data || error.message);
    throw error;
  }
};

export const editPhong = async (id, updatedPhong) => {
  try {
    await axios.put(`${API_URL}/phongs/${id}`, updatedPhong);
  } catch (error) {
    console.error('Edit error:', error.response?.data || error.message);
    throw new error;
  }
};

export const fetchKhachhang = async () => {
  try {
    const response = await axios.get(`${API_URL}/khachhang`);
    return response.data;
  } catch (error) {
    console.error('Fetch error:', error.response?.data || error.message);
    throw error;
  }
};

export const createKhachhang = async (kh) => {
  try {
    await axios.post(`${API_URL}/khachhang`, kh);
  } catch (error) {
    console.error('Create error:', error.response?.data || error.message);
    throw error;
  }
};
