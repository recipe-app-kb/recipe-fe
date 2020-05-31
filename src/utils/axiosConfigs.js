import axios from "axios";

axios.create({
	baseURL: process.env.REACT_APP_LOCAL_HOST
})