import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./slices/dataSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import productsSlice from "./slices/productsSlice";



export const store = configureStore({
    reducer: {
        data: dataReducer,
        products: productsSlice,
    },
})


export const useAppDispatch : () => typeof store.dispatch = useDispatch;

export const useAppSelector : TypedUseSelectorHook<ReturnType<typeof store.getState>> = useSelector;