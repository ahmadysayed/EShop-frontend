import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { 
  productListReducer, 
  productDetailsReducer, 
  productDeleteReducer, 
  productCreateReducer,
  productUpdateReducer,
  productReviewCreateReducer } from './reducer/productReducers';
import { cartReducer } from './reducer/cartReducers';
import { 
  userLoginReducer, 
  userRegisterReducer, 
  userDetailsReducer, 
  userUpdateProfileReducer, 
  userListReducer, 
  userDeleteReducer, 
  userUpdateReducer } from './reducer/userReducers';
import { orderCreateReducer, 
  orderDetailsReducer, 
  orderPayReducer, 
  orderListMyReducer, 
  orderListReducer,
  orderDeliverReducer } from './reducer/orderReducers';


const reducer = {
  productList: productListReducer,
  productDetails: productDetailsReducer,
  productDelete: productDeleteReducer,
  productCreate: productCreateReducer,
  productUpdate: productUpdateReducer,
  productReviewCreate: productCreateReducer,

  cart: cartReducer,
  userLogin: userLoginReducer,
  userRegister: userRegisterReducer,
  userDetails: userDetailsReducer,
  userUpdateProfile: userUpdateProfileReducer,
  userList: userListReducer,
  userDelete: userDeleteReducer,
  userUpdate: userUpdateReducer,

  orderCreate: orderCreateReducer,
  orderDetails: orderDetailsReducer,
  orderPay: orderPayReducer,
  orderListMy: orderListMyReducer,
  orderList: orderListReducer,
  orderDeliver: orderDeliverReducer,
};

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const userInfoFromStorage = localStorage.getItem('userInfo') ?
JSON.parse(localStorage.getItem('userInfo')) : null


const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
JSON.parse(localStorage.getItem('shippingAddress')) : {}



const initialState = {
  cart: { cartItems: cartItemsFromStorage, shippingAddress: shippingAddressFromStorage },
  userLogin: {userInfo: userInfoFromStorage}
}

const middleware = [thunk];


const store = configureStore({
  reducer,
  initialState,
  middleware,
  devTools: true, // This enables the Redux DevTools Extension
});

export default store;