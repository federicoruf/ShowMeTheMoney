import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUser = async (name) => {
  try {
    let response = await axios.get(`${baseUrl}/user/${name}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    let message = error;
    console.error('Error', message);
    return false;
  }
};

export const updateUserInvestment = async (id, name, amount, type, savings) => {
  try {
    const data = { type, amount, savings };
    let response = await axios.put(`${baseUrl}/${id}/invest/${name}`, data);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    let message = error;
    console.error('Error ', message);
    return false;
  }
};

export const removeUserInvestment = async (id, name) => {
  try {
    let response = await axios.delete(`${baseUrl}/${id}/invest/${name}`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    let message = error;
    console.error('Error ', message);
    return false;
  }
};
