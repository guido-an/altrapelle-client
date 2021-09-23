import axios from "axios";
class orderService {
    // switch to fetch 
    constructor() {
        let service = axios.create({
          baseURL: process.env.API_URL,
          withCredentials: true,
        });
        this.service = service;
      }

    //   createOrder = async (billingDetails, productsInCart, newsLetterConsent) => {
    //     console.log('creating order')
    //     const payload = { billingDetails, productsInCart, newsLetterConsent }
    //     const response = await fetch(`${process.env.API_URL}/order/create`, { 
    //       method: 'POST',
    //       body: JSON.stringify(payload),
    //       headers: {
    //         "Content-type": "application/json; charset=UTF-8"
    //        }
    //       })
    //       console.log(response)
    //     //return response.data.json()
    // } 
    
    createOrder = async (billingDetails, productsInCart, newsLetterConsent) => {
        const response = this.service.post('/order/create', 
        { billingDetails, 
          productsInCart, 
          newsLetterConsent } )
        return response.data
    } 
 }
 
 export default orderService