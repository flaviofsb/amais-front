import axios from 'axios'

const api = axios.create({

    baseURL: 'https://amais-api.herokuapp.com/api' 

});
export default api;