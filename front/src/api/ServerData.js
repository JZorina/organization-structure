import axios from 'axios';
export default axios.create({
    headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json'},
    baseURL:'http://127.0.0.1:3001'
});

