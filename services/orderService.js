import axios from "axios";

class orderService {
    constructor() {
        let service = axios.create({
          baseURL: process.env.API_URL,
          withCredentials: true,
        });
        this.service = service;
      }
    
    createOrder = async (billingDetails, productsInCart) => {
        console.log('CREATING ORDER', billingDetails)
        const response = this.service.post('/order/create', { billingDetails, productsInCart } )
        return response.data
    } 

    // signup = (username, password) => {
    //     return this.service
    //       .post("/auth/signup", { username, password })
    //       .then((response) => response.data);
    //   };

      

    // createOrder = async () => {
    //     const res =  await fetch(`${process.env.API_URL}product/get-all`)
    //     const data = await res.json()
    //     return data
    // }  
 }
 
 export default orderService