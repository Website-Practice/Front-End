import axios from 'axios';

const axiosWithAuth = () => {
    const token = window.localStorage.getItem('token');

    return axios.create({
        headers: {
            Authorization: token, /*`Bearer ${token}`*/
        },
        baseURL: "https://my-tech-back-end.herokuapp.com"
    });
};

export default axiosWithAuth