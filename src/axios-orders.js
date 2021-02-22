import axios from "axios";
import { firebaseDBUrl } from "./routes/routes.external";

const instance = axios.create({
  baseURL: firebaseDBUrl,
});

export default instance;
