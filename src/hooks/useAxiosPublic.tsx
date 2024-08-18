import axios, { AxiosInstance } from 'axios'

const axiosPublic : AxiosInstance = axios.create(
    {
        // baseURL: "https://bditserver-eh3029ivi-rashedul-islam-rajibs-projects.vercel.app/"
        baseURL: "http://localhost:5000"
    }
);

const useAxiosPublic = (): AxiosInstance => {
    return axiosPublic;
};

export default useAxiosPublic
