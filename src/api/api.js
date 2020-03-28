import axios from "axios";

const api = {
    sendEmail: (emailObj) => {
        return axios.post("https://dp-portfolio-api.herokuapp.com/email", emailObj);
    },
    sendSms: (smsObj) => {
        return axios.post("https://dp-portfolio-api.herokuapp.com/sms", smsObj);
    }
    // sendEmail: (emailObj) => {
    //     return axios.post("http://localhost:4500/email", emailObj);
    // },
    // sendSms: (smsObj) => {
    //     return axios.post("http://localhost:4500/sms", smsObj);
    // }
};

export default api;