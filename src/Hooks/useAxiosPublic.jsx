import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://bistro-boss.up.railway.app',
})

const useAxiosPublic = () => {
    return axiosPublic;
};

export default useAxiosPublic;