import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import productService from "./productService"




const initialState = {
    phones:[
      
    ],
    // cart:[],
    // isLoading:false,
    // isSuccess:false,
    // isError:false,
}

// export const getProducts = createAsyncThunk(
//     '/phones',
//     async () =>{
//         try {
//             return await productService.getProducts();
//         } catch (error) {
//             console.log('Error: ',error);
//         }
//     }
// )

// export const getProduct = createAsyncThunk(
//     '/phones/:id',
//     async (productId, thunkAPI) =>{
//         try {
//             return await productService.getProduct(productId);
//         } catch (error) {
//             console.log('Error: ',error);
            
//         }
//     }
// )

export const productSilce = createSlice({
    name:"product",
    initialState,
    reducers:{
        getProducts:(state,action)=> { 
            state.phones= action.payload?.data.result.phones || [];
        }
    },
    // extraReducers: (builder) =>{
    //     builder
    //         .addCase(getProducts.fulfilled,(state,action)=>{ 
    //             state.phones= action.payload?.data.result.phones || [];
    //         })
    //         .addCase(getProducts.rejected,(state)=>{
    //             state.phones = [];
    //         })

    //         // get Product
    //         .addCase(getProduct.fulfilled,(state, action) => {
    //             state.product = action.payload?.data || [];
    //         })
    // }
})

// export default productSilce.reducer;
export const { getProducts } = productSilce.actions;
export default productSilce.reducer;