import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getInvestments = async () => {
  try {
    let response = await axios.get(`${baseUrl}/investments`);
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    let message = error;
    console.error('Error al intentar recuperar la data', message);
    return false;
  }
};
