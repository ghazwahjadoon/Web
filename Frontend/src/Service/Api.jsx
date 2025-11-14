import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; //backend server URL

export const loginAPI = async (data) => {
    return axios.post(`${API_BASE_URL}/login`, data);
};

export const BookingAPI= async(data)=>{
     return axios.post(`${API_BASE_URL}/Booking`,data);
}

export const SigninAPI=async (data)=>{
    return axios.post(`${API_BASE_URL}/Signin`,data);
}