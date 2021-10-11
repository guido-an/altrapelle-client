import axios from "axios";
import { stringify } from "query-string";
class orderService {
    // switch to fetch 
    constructor() {
        let service = axios.create({
          baseURL: process.env.API_URL,
          withCredentials: true,
        });
        this.service = service;
      }
   
    createOrder = async (billingDetails, productsInCart, newsLetterConsent) => {
        const response = this.service.post('/order/create', 
        { billingDetails, 
          productsInCart, 
          newsLetterConsent } )
        return response.data
    } 

    getAllOrders = async () => {
        const res = await fetch(`${process.env.API_URL}/order/get-all`)
        const data = await res.json()
        return data
    } 

    updateOrderState = async (_id, newValue) => {
        const payload = {  _id, stateOfTheOrder: newValue, }
        const res = await fetch(`${process.env.API_URL}/order/update-state`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(payload)
        })
       // const data = await res.json()
        //return data
        return res
    } 

 }
 
 export default orderService