import axios from "axios";
class AuthService {
    constructor() {
        let service = axios.create({
          baseURL: process.env.API_URL,
          withCredentials: true,
        });
        this.service = service;
      }

  login = (email, password) => {
    return this.service.post("/auth/login", { email, password }).then((response) => response.data);
  };

  logout = () => {
    return this.service.get("/auth/logout").then((response) => response.data);
  };

  loggedin = () => {
    return this.service.get("/auth/loggedin").then((response) => response.data);
  };

}

export default AuthService;