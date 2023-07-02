import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


// export interface products {
//     id: number;
//     title: string;
//     price: number;
//     description: string;
//     category: string;
//     image: HTMLImageElement;
//     rating: {
//         rate: number;
//         count: number;
//     };
// }

// interface productsState {
//     products: products[];
    
// }

// const initialState: productsState = {
//     products: []
// }

export const fetchProducts = createAsyncThunk("productsSlice/fetchProducts",async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    return data;
})



 const productsSlice = createSlice({
    name: "productsSlice",
    initialState: [],
    reducers: {},
    extraReducers: (builder)=> {
        builder.addCase(fetchProducts.fulfilled, (state,action) => {
            return action.payload;
        })
    }
 })


 export default productsSlice.reducer;
 export const {} = productsSlice.actions;