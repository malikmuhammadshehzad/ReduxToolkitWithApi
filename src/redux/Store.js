 import { combineReducers, configureStore } from  '@reduxjs/toolkit';
import AuthReducer from './reducers/AuthReducer';
import ProductReducer from './reducers/ProductReducer';
 

 const reducers = combineReducers({
    Auth:AuthReducer,
    product:ProductReducer
 })

 export const store = configureStore({
    reducer:reducers
 })
