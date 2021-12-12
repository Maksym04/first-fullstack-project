import axios from 'axios';

//экземпляр подключения, чтобы к нему каждый раз обращаться
const axiosOptions = {
  baseURL: 'http://127.0.0.1:5000/api',
};

const apiInstance = axios.create(axiosOptions);

// 'http://127.0.0.1:5000/api/users'
export const getUsers = () => apiInstance.get('/users');

export const createUser = user => apiInstance.post('/users', user);

export const deleteUser = id => apiInstance.delete(`/users/${id}`);
