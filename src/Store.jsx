import { configureStore } from "@reduxjs/toolkit";
import customerReducer from './Slice/CustomerSlice'

export const Store = configureStore({
    devTools:true,
    reducer:{
        customers : customerReducer
    }
})