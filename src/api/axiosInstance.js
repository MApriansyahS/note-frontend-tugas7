import axios from "axios";

const instance = axios.create({
  baseURL: "https://notes-backend-559917148272.us-central1.run.app", 
  withCredentials: true, 
});

export default instance;

