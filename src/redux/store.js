import { applyMiddleware, combineReducers, createStore } from "@reduxjs/toolkit";
import { getProductsReducer } from "./Reducers/ProductReducer";

const {default: thunk} = require("redux-thunk")

const reducer = combineReducers({
    products: getProductsReducer
})


const initialState ={
}

const middleware = [thunk]

const store = createStore(
    reducer,
    initialState,
    applyMiddleware(...middleware)
)


export default store;