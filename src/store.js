// import { createStore, combineReducers, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import { composeWithDevTools } from 'redux-devtools-extension'
// import { productListReducer } from './reducer/productReducers'



// const reducer = combineReducers({
//     productListReducer: productListReducer,
// })

// const initialState = {}

// const middleware =  [thunk]

// const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

// export default store

import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { productListReducer, productDetailsReducer} from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducers';

const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
};

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []


const initialState = {
  cart: { cartItems: cartItemsFromStorage }
}

const middleware = [thunk];


const store = configureStore({
  reducer,
  middleware,
  devTools: true, // This enables the Redux DevTools Extension
});

export default store;
