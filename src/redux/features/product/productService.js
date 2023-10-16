// import axios from "axios";
import api from "../../../utils/api";


const page = 1;
const limit = 100;

const getProducts = () =>{
    // const response = await axios.get(API_URL);
    const response = api.get('/phones',{
        params:{
            page,
            limit
        }
    });

    return response;
}

// const getProduct =  (productId) =>{
//     const response = api.get(`/phones/${productId}`);
//     console.log('hello');
//     return response;
// }

const productService = {
    getProducts,
   
}

export  default productService;