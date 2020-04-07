import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-practiceapp.firebaseio.com/'
});

export default instance;
