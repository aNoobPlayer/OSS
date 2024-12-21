import axios from 'axios';
const API_URL = 'http://localhost:5000/api';

export const fetchPhong = async () => {
  try {
    const response = await axios.get(`${API_URL}/phongs`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      console.error('Network error or server is unreachable.');
      throw new Error('Unable to connect to the server. Please check your network connection.');
    }
    console.error('Fetch error:', error.response?.data || error.message);
    throw new Error('Failed to fetch rooms. Please try again later.');
  }
};

export const createPhong = async (phong) => {
  try {
    await axios.post(`${API_URL}/phongs`, phong);
  } catch (error) {
    if (!error.response) {
      console.error('Network error or server is unreachable.');
      throw new Error('Unable to connect to the server. Please check your network connection.');
    }
    console.error('Create error:', error.response?.data || error.message);
    throw new Error('Failed to create a room. Please check your input.');
  }
};

export const editPhong = async (id, updatedPhong) => {
  try {
    await axios.put(`${API_URL}/phongs/${id}`, updatedPhong);
  } catch (error) {
    if (!error.response) {
      console.error('Network error or server is unreachable.');
      throw new Error('Unable to connect to the server. Please check your network connection.');
    }
    console.error('Edit error:', error.response?.data || error.message);
    throw new Error('Failed to update room details. Please try again.');
  }
};

export const fetchKhachhang = async () => {
  try {
    const response = await axios.get(`${API_URL}/khachhang`);
    return response.data;
  } catch (error) {
    if (!error.response) {
      console.error('Network error or server is unreachable.');
      throw new Error('Unable to connect to the server. Please check your network connection.');
    }
    console.error('Fetch error:', error.response?.data || error.message);
    throw new Error('Failed to fetch customers. Please try again later.');
  }
};

export const createKhachhang = async (kh) => {
  try {
    await axios.post(`${API_URL}/khachhang`, kh);
  } catch (error) {
    if (!error.response) {
      console.error('Network error or server is unreachable.');
      throw new Error('Unable to connect to the server. Please check your network connection.');
    }
    console.error('Create error:', error.response?.data || error.message);
    throw new Error('Failed to create a booking. Please check your input.');
  }
   
};
console.error('helo data.');
