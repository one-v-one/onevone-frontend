import axios from 'axios';
import { CONSTANTS } from '../../Constants';


export const GetUserService = async (token) => {

  const onSuccess = ({ data }) => {
    return data;
  };

  const onFailure = (error) => {
    throw error;
  };

  // Add the token to the headers
  const headers = {
    Authorization: `Bearer ${token}`,  
  };

  return await axios
  .get( CONSTANTS.BASE_URL + CONSTANTS.GET_USER , { headers })
  .then( onSuccess )
  .catch( onFailure );
};
