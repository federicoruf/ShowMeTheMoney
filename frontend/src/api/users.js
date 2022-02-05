import axios from 'axios';

const baseUrl = process.env.REACT_APP_BASE_URL;

export const getUser = async (name) => {
  try {
    let response = await axios.get(`${baseUrl}/user/${name}`);
    if (response.status === 200) {
      console.log('response', response.data);
      return response.data;
    }
  } catch (error) {
    let message = error;
    console.error('Error al intentar recuperar la data', message);
    return false;
  }
};
