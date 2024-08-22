import axios from "axios";

const ApiURL = axios.create({
    baseURL: "http://localhost:5000/",

})
export default ApiURL;

