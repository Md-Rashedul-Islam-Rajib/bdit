import axios, { AxiosInstance } from 'axios'

const axiosPublic : AxiosInstance = axios.create(
    {
        baseURL: "http://localhost:5000"
    }
);

export default useAxiosPublic
